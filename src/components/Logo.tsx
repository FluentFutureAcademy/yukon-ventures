import { cn } from "@/lib/utils";
import { site } from "@/content/siteContent";

/**
 * Text wordmark with a gold monogram. To use a real logo file later, replace
 * the contents of this component with:
 *   <img src="/logo.svg" alt="Yukon Ventures" width={…} height={…} />
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9 flex-none", className)} aria-hidden="true">
      <rect x="1.5" y="1.5" width="37" height="37" fill="none" stroke="#B8975A" strokeWidth="1.5" />
      <path d="M11 10 L20 21 L20 31" fill="none" stroke="#B8975A" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M29 10 L20 21" fill="none" stroke="#B8975A" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3 whitespace-nowrap", className)}>
      <Monogram />
      <span
        className={cn(
          "font-serif text-[17px] font-semibold uppercase leading-none tracking-[0.18em] sm:text-[19px]",
          tone === "light" ? "text-ivory" : "text-charcoal",
        )}
      >
        {site.companyName}
      </span>
    </span>
  );
}
