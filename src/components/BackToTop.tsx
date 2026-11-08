import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Appears after scrolling. On wide screens it sits in the empty margin; on
 * narrower screens it only shows briefly while scrolling up, so it never
 * stays over buttons or text.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const last = useRef(0);
  const timer = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const wide = window.innerWidth >= 1360;
      const past = y > 700;
      window.clearTimeout(timer.current);
      if (wide) setShow(past);
      else {
        const up = y < last.current;
        setShow(past && up);
        if (past && up) timer.current = window.setTimeout(() => setShow(false), 2200);
      }
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={cn(
        "fixed bottom-5 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-gold bg-ivory/95 text-charcoal shadow-[0_8px_24px_-12px_rgba(31,31,31,0.35)] backdrop-blur transition-all duration-300 hover:bg-charcoal hover:text-ivory sm:bottom-6 sm:right-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={18} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
