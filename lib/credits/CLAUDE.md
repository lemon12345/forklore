# lib/credits/
> L2 | Parent: /CLAUDE.md

The only read/write channel for credit balances. Two buckets: subscription credits (reset on each grant, cleared when the subscription ends) and purchased credits (never expire, only spent or clawed back). Spending drains the subscription bucket first, and every balance change appends a ledger row with a snapshot in the same transaction.

The billing subject is either a personal pair of buckets (organizationId omitted) or an organization shared pool (organizationId set, userId degrades to the acting user). Both share the same bucket shape and idempotency mechanics; only the balance table differs (credit_balances vs. organization_credit_balances).

Files
- ledger.ts: Write layer built on the single primitive mutateCredits (subject dispatch, row lock, upsert, snapshot, per-bucket delta, ledger insert). Exports grantPurchasedCredits, resetSubscriptionCredits, grantSubscriptionUpgradeCredits, sumSubscriptionGrantsSince, spendCredits, refundSpentCredits, revokeCreditsForRefund, clearSubscriptionCredits, adjustCredits, grantSignupBonusCredits, InsufficientCreditsError, DbTransaction — all accepting an injected transaction and an optional organizationId.
- index.ts: Read layer and facade — getUserCredits, getUserBillingSummary, getOrganizationCredits, getOrganizationBillingSummary, hasEntitledSubscription, ENTITLED_SUBSCRIPTION_STATUSES, plus the annual drip settlement primitives (settleDripForSubscription, settleDueDripGrantsBatch for cron, settleDueDripGrants for lazy settlement, addMonthsClamped). Re-exports ledger, but shadows spendCredits with a "settle first, then spend" version.

Design rules
- Balances never go negative: clawback operations clamp at 0.
- A no-op transfer returns null and writes no ledger row.
- A subscription reset writes two rows (subscription_cycle_expire + subscription_grant) so the grant row is always the full amount.
- Annual drip state lives in first-class subscriptions columns (monthlyCredits / remainingGrants / nextGrantAt) — the database is the schedule queue.
- Cron and lazy settlement both funnel into settleDripForSubscription; a row lock plus recheck folds concurrent triggers into one grant.
- The signup bonus is once per user, checked inside the same transaction so replays are harmless.

[PROTOCOL]: Update this header on changes, then check CLAUDE.md
