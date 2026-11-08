import { socialIcons } from "@/components/socialIcons";
import { site } from "@/content/siteContent";
import { cn } from "@/lib/utils";

/** Renders only the networks that have a link in siteContent.ts. */
export function SocialLinks({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const links = (Object.keys(socialIcons) as (keyof typeof socialIcons)[]).filter((k) => site.social[k]);
  if (!links.length) return null;
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map((k) => (
        <li key={k}>
          <a
            href={site.social[k]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Yukon Ventures on ${socialIcons[k].name} (opens in a new tab)`}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-colors",
              tone === "light"
                ? "border-gold/60 text-ivory hover:bg-gold hover:text-charcoal"
                : "border-gold text-charcoal hover:bg-charcoal hover:text-ivory",
            )}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d={socialIcons[k].path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
