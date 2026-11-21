import { cn } from "@/lib/utils";

type WikiAtmosphereProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared Grokipedia-light canvas for Forklore public pages. */
export function WikiAtmosphere({ children, className }: WikiAtmosphereProps) {
  return (
    <div
      className={cn(
        "relative isolate w-full min-h-[calc(100vh-4rem)] overflow-hidden bg-wiki text-wiki-ink",
        className
      )}
    >
      <div className="relative w-full">{children}</div>
    </div>
  );
}
