/**
 * [INPUT]: Depends on drizzle-orm/pg-core for table construction, on
 *          @/config/pricing for the PaymentProvider type (type level only,
 *          erased at compile time)
 * [OUTPUT]: Exports every table object (user/session/account/verification/
 *           user_source/organization/member/invitation/orders/subscriptions/
 *           credit_balances/organization_credit_balances/credit_transactions/
 *           posts/tags/post_tags/feedback/feedback_replies), every enum
 *           (user_role/payment_provider/order_type/order_status/plan_interval/
 *           credit_transaction_type plus the post and feedback families) and
 *           the inferred types
 * [POS]: The structural source of truth of lib/db — every table lives in the
 *        public schema (no pgSchema prefix); pricing is not persisted (planId
 *        stores the slug from config/pricing.ts), and the billing tables
 *        unify the idempotency semantics of stripe/creem/paypal through the
 *        composite provider + provider_order_id unique key
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { sql } from 'drizzle-orm';
import {
  bigint,
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  unique,
  uniqueIndex,
  uuid,
  varchar,
  type AnyPgColumn,
} from 'drizzle-orm/pg-core';
import type { PaymentProvider } from '../../config/pricing';

export const userRoleEnum = pgEnum('user_role', ['user', 'admin', 'superadmin'])

// Mirrors config/pricing.ts PaymentProvider — the `satisfies` clause makes the
// compiler reject any value the config type does not know about.
export const paymentProviderEnum = pgEnum('payment_provider', [
  'stripe',
  'creem',
  'paypal',
] satisfies [PaymentProvider, ...PaymentProvider[]])

export const user = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').unique().notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(), // better-auth
  name: text("name"), // better-auth
  image: text("image"), // better-auth
  role: userRoleEnum('role').default('user').notNull(),
  isAnonymous: boolean('is_anonymous').default(false).notNull(), // better-auth anonymous plugin
  // One column per payment provider — a user may hold identities at several
  // providers over their lifetime; each is unique within its provider space.
  stripeCustomerId: text("stripe_customer_id").unique(),
  creemCustomerId: text("creem_customer_id").unique(),
  paypalPayerId: text("paypal_payer_id").unique(),
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})

export type UserType = typeof user.$inferSelect;

export const session = pgTable("session", {
  id: uuid('id').primaryKey().defaultRandom(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  // better-auth organization plugin: the active workspace for this session.
  // NULL = personal workspace. No FK — the plugin clears it lazily and a
  // deleted organization must not invalidate the whole session row.
  activeOrganizationId: uuid("active_organization_id"),
  // better-auth admin plugin: the superadmin behind this borrowed session.
  // NULL = a real login. No FK — same reason as above: this is an audit trace
  // on a short-lived row, and it must never block deleting the admin account.
  impersonatedBy: uuid("impersonated_by"),
});

export const account = pgTable("account", {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: true }),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: true }),
  scope: text('scope'),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const verification = pgTable("verification", {
  id: uuid('id').primaryKey().defaultRandom(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// ============================================================================
// Organizations — better-auth organization plugin tables (v1.4.7 shape).
// Property names MUST match the plugin's model fields verbatim (the drizzle
// adapter resolves columns by TS property name); SQL names stay snake_case.
// An organization is the billing subject of team subscriptions and the owner
// of a shared credit pool (organization_credit_balances below).
// ============================================================================

export const organization = pgTable('organization', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  logo: text('logo'),
  // JSON serialized by the plugin — stored as text, never queried by key.
  metadata: text('metadata'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
})

export type OrganizationRow = typeof organization.$inferSelect

export const member = pgTable(
  'member',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organization.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    // Plugin roles are plain strings (comma-separated when multiple).
    role: text('role').default('member').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    organizationIdx: index('idx_member_organization_id').on(
      table.organizationId
    ),
    userIdx: index('idx_member_user_id').on(table.userId),
    // One membership per user per organization.
    orgUserUnique: unique('uq_member_org_user').on(
      table.organizationId,
      table.userId
    ),
  })
)

export type MemberRow = typeof member.$inferSelect

export const invitation = pgTable(
  'invitation',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    organizationId: uuid('organization_id')
      .notNull()
      .references(() => organization.id, { onDelete: 'cascade' }),
    email: text('email').notNull(),
    role: text('role'),
    // pending | accepted | rejected | canceled — expiry is judged from
    // expiresAt at read time, there is no persisted "expired" status.
    status: text('status').default('pending').notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    inviterId: uuid('inviter_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    organizationIdx: index('idx_invitation_organization_id').on(
      table.organizationId
    ),
    emailIdx: index('idx_invitation_email').on(table.email),
  })
)

export type InvitationRow = typeof invitation.$inferSelect

// User source/attribution tracking
export const userSource = pgTable(
  'user_source',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => user.id, { onDelete: 'cascade' })
      .notNull(),

    // aff code (from URL params like ref, via, aff.)
    affCode: text('aff_code'),

    // Traffic Source (UTM parameters)
    utmSource: text('utm_source'),
    utmMedium: text('utm_medium'),
    utmCampaign: text('utm_campaign'),
    utmTerm: text('utm_term'),
    utmContent: text('utm_content'),
    referrer: text('referrer'),
    referrerDomain: text('referrer_domain'),
    landingPage: text('landing_page'),

    // Device & Browser
    userAgent: text('user_agent'),
    browser: text('browser'),
    browserVersion: text('browser_version'),
    os: text('os'),
    osVersion: text('os_version'),
    deviceType: text('device_type'), // mobile, desktop, tablet
    deviceBrand: text('device_brand'),
    deviceModel: text('device_model'),
    screenWidth: integer('screen_width'),
    screenHeight: integer('screen_height'),
    language: text('language'),
    timezone: text('timezone'),

    // Network & Location (from Cloudflare headers)
    ipAddress: text('ip_address'),
    countryCode: varchar('country_code', { length: 2 }),

    // Extensibility
    metadata: jsonb('metadata'),

    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    userIdIdx: index('idx_user_source_user_id').on(table.userId),
    affCodeIdx: index('idx_user_source_aff_code').on(table.affCode),
    utmSourceIdx: index('idx_user_source_utm_source').on(table.utmSource),
    countryCodeIdx: index('idx_user_source_country_code').on(table.countryCode),
    createdAtIdx: index('idx_user_source_created_at').on(table.createdAt),
  })
)

// ============================================================================
// Billing (multi-provider: stripe | creem | paypal, credits-based)
//
// Plans live in code (config/pricing.ts) — `planId` columns store plan slugs,
// not foreign keys. The payment provider is the source of truth for money;
// these tables are the local ledger: orders (what was paid), subscriptions
// (what renews), credit_balances (what a user can spend), credit_transactions
// (audit trail). Provider-specific ids collapse into three generic columns:
//   provider_order_id        — canonical idempotency id per paid event
//   provider_payment_id      — charge/capture/payment-intent for refund lookup
//   provider_subscription_id — the renewing agreement at the provider
// ============================================================================

export const orderTypeEnum = pgEnum('order_type', [
  'one_time', // credit pack purchase (checkout mode=payment)
  'subscription_initial', // first invoice of a subscription
  'subscription_renewal', // recurring invoice of a subscription
  'subscription_upgrade', // mid-cycle plan change proration invoice
])
export type OrderType = (typeof orderTypeEnum.enumValues)[number]

// Confirmed money lands as 'completed'; refunds mutate the original order,
// never add rows. 'pending' is the one in-flight state: a PayPal eCheck
// capture accepted but not yet settled — it is the durable local trace the
// reconcile cron chases, granted zero credits and excluded from revenue.
// Settlement promotes pending → completed (credits granted exactly then);
// denial marks it 'failed' (terminal, zero credits, audit trail only).
export const orderStatusEnum = pgEnum('order_status', [
  'pending',
  'completed',
  'partially_refunded',
  'refunded',
  'failed',
])
export type OrderStatus = (typeof orderStatusEnum.enumValues)[number]

export const planIntervalEnum = pgEnum('plan_interval', [
  'month',
  'year',
])
export type PlanInterval = (typeof planIntervalEnum.enumValues)[number]

export const creditTransactionTypeEnum = pgEnum(
  'credit_transaction_type',
  [
    'purchase', // one-time credit pack purchase
    'subscription_grant', // periodic subscription grant (incl. yearly drip)
    'subscription_cycle_expire', // unused subscription credits expired when a new grant reset the bucket
    'usage', // feature consumption
    'usage_refund', // a failed task returns its usage to the original buckets
    'refund_revoke', // credits clawed back after a refund
    'subscription_end_revoke', // remaining subscription credits cleared on end
    'admin_adjustment', // manual grant/deduction by an admin
    'signup_bonus', // one-time welcome credits granted on registration
  ]
)
export type CreditTransactionType =
  (typeof creditTransactionTypeEnum.enumValues)[number]

// All monetary amounts are integer cents (provider-native). Never numeric/float.
export const orders = pgTable(
  'orders',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    // Orders are financial records: they survive account deletion (payer
    // becomes NULL), never cascade away with the user row.
    userId: uuid('user_id').references(() => user.id, {
      onDelete: 'set null',
    }),
    // Team purchases: the organization whose pool the credits went to. NULL =
    // personal order. userId stays the payer either way.
    organizationId: uuid('organization_id').references(() => organization.id, {
      onDelete: 'set null',
    }),
    planId: text('plan_id').notNull(), // plan slug from config/pricing.ts
    orderType: orderTypeEnum('order_type').notNull(),
    status: orderStatusEnum('status').default('completed').notNull(),
    creditsGranted: integer('credits_granted').default(0).notNull(),
    amountTotal: integer('amount_total').notNull(),
    amountSubtotal: integer('amount_subtotal'),
    amountDiscount: integer('amount_discount').default(0).notNull(),
    amountTax: integer('amount_tax').default(0).notNull(),
    amountRefunded: integer('amount_refunded').default(0).notNull(),
    currency: varchar('currency', { length: 10 }).notNull(),
    provider: paymentProviderEnum('provider').notNull(),
    // Canonical webhook idempotency id, scoped per provider:
    //   stripe payment mode → checkout session id; stripe subscription →
    //   invoice id; creem one-time → order/checkout id; creem subscription →
    //   transaction id; paypal one-time → capture id; paypal subscription →
    //   sale id. The composite unique below IS the replay guard.
    providerOrderId: text('provider_order_id').notNull(),
    // Charge/capture/payment-intent id — the handle refunds are issued against.
    providerPaymentId: text('provider_payment_id'),
    providerSubscriptionId: text('provider_subscription_id'),
    refundedAt: timestamp('refunded_at', { withTimezone: true }),
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    userIdx: index('idx_orders_user_id').on(table.userId),
    organizationIdx: index('idx_orders_organization_id')
      .on(table.organizationId)
      .where(sql`${table.organizationId} is not null`),
    planIdIdx: index('idx_orders_plan_id').on(table.planId),
    createdAtIdx: index('idx_orders_created_at').on(table.createdAt),
    providerOrderUnique: uniqueIndex('uq_orders_provider_order_id').on(
      table.provider,
      table.providerOrderId
    ),
    providerPaymentIdx: index('idx_orders_provider_payment_id').on(
      table.providerPaymentId
    ),
    providerSubscriptionIdx: index('idx_orders_provider_subscription_id').on(
      table.providerSubscriptionId
    ),
  })
)

export type OrderRow = typeof orders.$inferSelect

export const subscriptions = pgTable(
  'subscriptions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    // Billing history: survives account deletion (purchaser becomes NULL),
    // never cascades away with the user row.
    userId: uuid('user_id').references(() => user.id, {
      onDelete: 'set null',
    }),
    // Team subscriptions: the organization this subscription entitles. NULL =
    // personal. userId stays the purchaser (billing owner) either way; grants
    // and clears route to the org pool when set. RESTRICT: an org that ever
    // subscribed carries billing history and may not be hard-deleted.
    organizationId: uuid('organization_id').references(() => organization.id, {
      onDelete: 'restrict',
    }),
    planId: text('plan_id').notNull(), // plan slug from config/pricing.ts
    provider: paymentProviderEnum('provider').notNull(),
    providerSubscriptionId: text('provider_subscription_id').notNull(),
    providerCustomerId: text('provider_customer_id'),
    // stripe price id / creem product id / paypal plan id — the provider-side
    // object the subscription was created from.
    providerPriceId: text('provider_price_id'),
    // Canonical normalized status written by the provider adapters:
    // active | trialing | past_due | unpaid | canceled | incomplete |
    // expired | paused
    status: text('status').notNull(),
    interval: planIntervalEnum('interval').notNull(),
    currentPeriodStart: timestamp('current_period_start', {
      withTimezone: true,
    }),
    currentPeriodEnd: timestamp('current_period_end', { withTimezone: true }),
    cancelAtPeriodEnd: boolean('cancel_at_period_end').default(false).notNull(),
    canceledAt: timestamp('canceled_at', { withTimezone: true }),
    endedAt: timestamp('ended_at', { withTimezone: true }),
    // Yearly-plan credit drip: credits are granted month by month, not all at
    // once. The schedule is first-class state here — no jsonb blobs.
    monthlyCredits: integer('monthly_credits').default(0).notNull(),
    remainingGrants: integer('remaining_grants').default(0).notNull(),
    nextGrantAt: timestamp('next_grant_at', { withTimezone: true }),
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    userIdx: index('idx_subscriptions_user_id').on(table.userId),
    organizationIdx: index('idx_subscriptions_organization_id')
      .on(table.organizationId)
      .where(sql`${table.organizationId} is not null`),
    statusIdx: index('idx_subscriptions_status').on(table.status),
    planIdIdx: index('idx_subscriptions_plan_id').on(table.planId),
    providerSubscriptionUnique: uniqueIndex(
      'uq_subscriptions_provider_subscription_id'
    ).on(table.provider, table.providerSubscriptionId),
    // Scheduler queues: the per-minute cron scans "drip due" and "renewal
    // overdue" — both partial, so they only ever index the live tail.
    nextGrantAtIdx: index('idx_subscriptions_next_grant_at')
      .on(table.nextGrantAt)
      .where(sql`${table.nextGrantAt} is not null`),
    currentPeriodEndIdx: index('idx_subscriptions_current_period_end')
      .on(table.currentPeriodEnd)
      .where(sql`${table.currentPeriodEnd} is not null`),
  })
)

export type SubscriptionRow = typeof subscriptions.$inferSelect

// Two buckets: subscription credits reset every grant period; purchased
// credits never expire. Spending drains the subscription bucket first.
export const creditBalances = pgTable('credit_balances', {
  userId: uuid('user_id')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade' }),
  subscriptionCredits: integer('subscription_credits').default(0).notNull(),
  purchasedCredits: integer('purchased_credits').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})

export type CreditBalanceRow = typeof creditBalances.$inferSelect

// Team pool: same two-bucket shape keyed by organization instead of user.
// A parallel table (not a polymorphic key on credit_balances) keeps the
// personal hot path untouched; the single write channel in lib/credits
// dispatches to one table or the other off the accounting subject.
export const organizationCreditBalances = pgTable(
  'organization_credit_balances',
  {
    organizationId: uuid('organization_id')
      .primaryKey()
      .references(() => organization.id, { onDelete: 'cascade' }),
    subscriptionCredits: integer('subscription_credits').default(0).notNull(),
    purchasedCredits: integer('purchased_credits').default(0).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  }
)

export type OrganizationCreditBalanceRow =
  typeof organizationCreditBalances.$inferSelect

// Append-only ledger. Every balance mutation writes exactly one row with
// post-mutation snapshots, so history is auditable without replaying.
export const creditTransactions = pgTable(
  'credit_transactions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    // Monotonic insertion order. `createdAt` alone cannot order rows written
    // in one transaction (Postgres now() is transaction-fixed) — e.g. a cycle
    // expire + grant pair; history queries tiebreak on this.
    seq: bigint('seq', { mode: 'number' }).generatedAlwaysAsIdentity(),
    // Accounting subject: personal rows have organizationId NULL and userId
    // as the subject. Org-pool rows carry organizationId as the subject and
    // userId as the acting member. userId is SET NULL (not cascade): account
    // deletion de-identifies the ledger instead of erasing it — burn/grant
    // analytics and the audit trail never shrink retroactively.
    userId: uuid('user_id').references(() => user.id, {
      onDelete: 'set null',
    }),
    // RESTRICT: the ledger is append-only financial history — an org that
    // ever moved credits may not be hard-deleted (app-level guard in
    // lib/auth/organization.ts, this FK is the database backstop).
    organizationId: uuid('organization_id').references(
      () => organization.id,
      { onDelete: 'restrict' }
    ),
    type: creditTransactionTypeEnum('type').notNull(),
    amount: integer('amount').notNull(), // signed: positive = grant, negative = spend/revoke
    // Per-bucket deltas (amount = subscriptionDelta + purchasedDelta). Rows
    // are self-contained: a usage row knows its exact bucket split, so a
    // usage_refund can return credits to the buckets they came from.
    subscriptionDelta: integer('subscription_delta').default(0).notNull(),
    purchasedDelta: integer('purchased_delta').default(0).notNull(),
    subscriptionCreditsAfter: integer('subscription_credits_after').notNull(),
    purchasedCreditsAfter: integer('purchased_credits_after').notNull(),
    note: text('note'),
    orderId: uuid('order_id').references(() => orders.id, {
      onDelete: 'set null',
    }),
    // Set only on usage_refund rows: the usage row being reversed. UNIQUE —
    // a spend can be refunded at most once, the constraint is the idempotency
    // guarantee (same trick as the provider ids on orders).
    refundedTransactionId: uuid('refunded_transaction_id')
      .unique()
      .references((): AnyPgColumn => creditTransactions.id, {
        onDelete: 'set null',
      }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    userCreatedAtIdx: index('idx_credit_transactions_user_created_at').on(
      table.userId,
      table.createdAt
    ),
    organizationCreatedAtIdx: index(
      'idx_credit_transactions_org_created_at'
    )
      .on(table.organizationId, table.createdAt)
      .where(sql`${table.organizationId} is not null`),
    typeIdx: index('idx_credit_transactions_type').on(table.type),
    orderIdIdx: index('idx_credit_transactions_order_id').on(table.orderId),
  })
)

export type CreditTransactionRow = typeof creditTransactions.$inferSelect

export const postTypeEnum = pgEnum('post_type', [
  'blog',
  'glossary',
])
export type PostType = (typeof postTypeEnum.enumValues)[number]

export const postStatusEnum = pgEnum('post_status', [
  'draft',
  'published',
  'archived',
])
export type PostStatus = (typeof postStatusEnum.enumValues)[number]

export const postVisibilityEnum = pgEnum('post_visibility', [
  'public',
  'logged_in',
  'subscribers',
])

export const posts = pgTable(
  'posts',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    language: varchar('language', { length: 10 }).notNull(),
    postType: postTypeEnum('post_type').default('blog'),
    authorId: uuid('author_id')
      .references(() => user.id, { onDelete: 'set null' })
      .notNull(),
    title: text('title').notNull(),
    slug: text('slug').notNull(),
    content: text('content'),
    description: text('description'),
    featuredImageUrl: text('featured_image_url'),
    isPinned: boolean('is_pinned').default(false).notNull(),
    status: postStatusEnum('status').default('draft').notNull(),
    visibility: postVisibilityEnum('visibility').default('public').notNull(),
    publishedAt: timestamp('published_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => {
    return {
      languageSlugPostTypeUnique: unique('posts_language_slug_post_type_unique').on(
        table.language,
        table.slug,
        table.postType
      ),
      authorIdIdx: index('idx_posts_author_id').on(table.authorId),
      postTypeIdx: index('idx_posts_post_type').on(table.postType),
      statusIdx: index('idx_posts_status').on(table.status),
      visibilityIdx: index('idx_posts_visibility').on(table.visibility),
      languageStatusIdx: index('idx_posts_language_status').on(
        table.language,
        table.status
      ),
      languagePostTypeStatusIdx: index('idx_posts_language_post_type_status').on(
        table.language,
        table.postType,
        table.status
      ),
    }
  }
)

export const tags = pgTable(
  'tags',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    postType: postTypeEnum('post_type').default('blog'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      nameIdx: index('idx_tags_name').on(table.name),
      namePostTypeUnique: unique('tags_name_post_type_unique').on(
        table.name,
        table.postType
      ),
    }
  }
)

export const postTags = pgTable(
  'post_tags',
  {
    postId: uuid('post_id')
      .references(() => posts.id, { onDelete: 'cascade' })
      .notNull(),
    tagId: uuid('tag_id')
      .references(() => tags.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.tagId] }),
      postIdIdx: index('idx_post_tags_post_id').on(table.postId),
      tagIdIdx: index('idx_post_tags_tag_id').on(table.tagId),
    }
  }
)

// ============================================
// Feedback System
// ============================================

export const feedbackTypeEnum = pgEnum('feedback_type', [
  'feature_request',
  'bug_report',
  'improvement',
  'other',
])
export type FeedbackType = (typeof feedbackTypeEnum.enumValues)[number]

export const feedbackStatusEnum = pgEnum('feedback_status', [
  'submitted',
  'under_review',
  'planned',
  'in_progress',
  'completed',
  'declined',
])
export type FeedbackStatus = (typeof feedbackStatusEnum.enumValues)[number]

export const feedbackPriorityEnum = pgEnum('feedback_priority', [
  'low',
  'medium',
  'high',
])
export type FeedbackPriority = (typeof feedbackPriorityEnum.enumValues)[number]

export const feedback = pgTable(
  'feedback',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id').references(() => user.id, { onDelete: 'set null' }),
    submitterEmail: text('submitter_email').notNull(),
    submitterName: text('submitter_name'),
    type: feedbackTypeEnum('type').notNull(),
    title: varchar('title', { length: 120 }).notNull(),
    description: text('description').notNull(),
    priority: feedbackPriorityEnum('priority').default('medium').notNull(),
    status: feedbackStatusEnum('status').default('submitted').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    userCreatedAtIdx: index('idx_feedback_user_created_at').on(table.userId, table.createdAt),
    statusIdx: index('idx_feedback_status').on(table.status),
    typeIdx: index('idx_feedback_type').on(table.type),
    createdAtIdx: index('idx_feedback_created_at').on(table.createdAt),
  })
)

export type FeedbackRow = typeof feedback.$inferSelect

export const feedbackReplies = pgTable(
  'feedback_replies',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    feedbackId: uuid('feedback_id')
      .references(() => feedback.id, { onDelete: 'cascade' })
      .notNull(),
    authorId: uuid('author_id').references(() => user.id, { onDelete: 'set null' }),
    authorEmail: text('author_email').notNull(),
    authorName: text('author_name'),
    isAdmin: boolean('is_admin').default(false).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    feedbackCreatedAtIdx: index('idx_feedback_replies_feedback_created_at').on(
      table.feedbackId,
      table.createdAt
    ),
  })
)

export type FeedbackReplyRow = typeof feedbackReplies.$inferSelect
