import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/content/siteContent";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const ids = site.nav.map((n) => n.href.slice(1));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // full-screen menu: lock scroll, close on Escape, return focus to the toggle
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,height,backdrop-filter] duration-300",
        scrolled && !open
          ? "h-[68px] border-line bg-[rgba(250,248,244,0.92)] backdrop-blur-md"
          : "h-[84px] border-transparent bg-transparent",
        open && "bg-ivory",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <div className="container-site flex h-full items-center justify-between gap-6 lg:max-w-[1360px]">
        <a href="#home" aria-label="Yukon Ventures, back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {site.nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative py-2 text-[14px] font-medium text-charcoal transition-colors hover:text-gold-text",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300",
                      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center text-charcoal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>
    </header>

      {/* outside <header>: its backdrop-filter would otherwise contain this fixed panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[84px] z-40 overflow-y-auto bg-ivory lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {site.nav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-baseline gap-5 py-5 font-serif text-[34px] font-medium leading-none text-charcoal sm:text-[42px]",
                    active === item.href.slice(1) && "text-gold-text",
                  )}
                >
                  <span className="font-sans text-[12px] tracking-[0.2em] text-gold-text">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-[15px]">
            <a className="block text-charcoal underline-offset-4 hover:underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <a className="block text-charcoal underline-offset-4 hover:underline" href={site.contact.phoneHref}>
              {site.contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
