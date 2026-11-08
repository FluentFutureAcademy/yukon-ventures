import { ShoppingBag } from "lucide-react";
import type { Platform } from "@/content/siteContent";
import { cn } from "@/lib/utils";

const bg: Record<Platform, string> = {
  poshmark: "bg-poshmark",
  ebay: "bg-ebay",
  walmart: "bg-walmart",
};

export function PlatformBadge({ platform, label, className }: { platform: Platform; label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[2px] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white",
        bg[platform],
        className,
      )}
    >
      <ShoppingBag size={13} strokeWidth={2} aria-hidden="true" />
      {label}
    </span>
  );
}
