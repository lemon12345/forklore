import { Link as I18nLink } from "@/i18n/routing";

type HomeCtaProps = {
  title: string;
  body: string;
  actionLabel: string;
};

/** Quiet closing band — Grokipedia panel surface, not Genius black/yellow. */
export default function HomeCta({ title, body, actionLabel }: HomeCtaProps) {
  return (
    <section className="border-t border-wiki-line bg-wiki-panel">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center md:py-14">
        <div className="max-w-xl">
          <h2 className="type-title text-[22px] font-medium tracking-[-0.012em] text-wiki-ink sm:text-[24px]">
            {title}
          </h2>
          <p className="type-hint mt-3 !text-[15px] !leading-6">{body}</p>
        </div>
        <I18nLink
          href="/glossary"
          prefetch={false}
          className="pill-primary inline-flex h-11 items-center rounded-full px-5 text-[14px] font-medium tracking-[-0.2px]"
        >
          {actionLabel}
        </I18nLink>
      </div>
    </section>
  );
}
