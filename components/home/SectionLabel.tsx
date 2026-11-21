import { Link as I18nLink } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  id: string;
  title: string;
  moreHref?: string;
  moreLabel?: string;
  /** Grokipedia type-title (default). Accent keeps a quiet label pill. */
  variant?: "display" | "accent";
};

export default function SectionLabel({
  id,
  title,
  moreHref,
  moreLabel,
  variant = "display",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-5 flex items-end justify-between gap-3",
        variant === "display" && "mb-6",
      )}
    >
      <h2
        id={id}
        className={cn(
          variant === "accent"
            ? "type-label rounded-full bg-wiki-panel px-2.5 py-1 text-[12px] font-medium tracking-[0.02em] text-wiki-muted"
            : "type-title text-[22px] font-medium tracking-[-0.012em] text-wiki-ink",
        )}
      >
        {title}
      </h2>
      {moreHref && moreLabel ? (
        <I18nLink
          href={moreHref}
          prefetch={false}
          className="pb-0.5 text-[13px] text-wiki-muted transition-colors hover:text-wiki-accent"
        >
          {moreLabel} →
        </I18nLink>
      ) : null}
    </div>
  );
}
