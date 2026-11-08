import { ExternalLink, Mail, Phone } from "lucide-react";
import { Flag } from "@/components/Flags";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/siteContent";
import type { LegalDoc } from "@/components/LegalModal";

const heading = "font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-gold";
const link = "text-[14.5px] text-ivory/80 transition-colors hover:text-gold";

export function Footer({ onOpenLegal }: { onOpenLegal: (d: LegalDoc) => void }) {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <a href="#home" aria-label="Yukon Ventures, back to top">
            <Logo tone="light" />
          </a>
          <p className="mt-5 max-w-[300px] font-serif text-[19px] italic leading-snug text-ivory/85">{site.tagline}.</p>
          <div className="mt-5 flex items-center gap-2.5">
            <Flag country="Canada" className="h-[14px] w-[21px] rounded-[2px]" />
            <Flag country="United States" className="h-[14px] w-[21px] rounded-[2px]" />
            <span className="sr-only">Registered in Canada and the United States</span>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className={heading}>Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {site.footer.quickLinks.map((l) => (
              <li key={l.href}>
                <a className={link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Online Stores</h2>
          <ul className="mt-5 space-y-3">
            {site.footer.storeLinks.map((s) => (
              <li key={s.label}>
                {s.url ? (
                  <a className={`${link} inline-flex items-center gap-1.5`} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                    <ExternalLink size={12} strokeWidth={1.75} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-[14.5px] text-ivory/60">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a className={`${link} inline-flex items-center gap-2.5 break-all`} href={`mailto:${site.contact.email}`}>
                <Mail size={15} strokeWidth={1.5} className="flex-none text-gold" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a className={`${link} inline-flex items-center gap-2.5`} href={site.contact.phoneHref}>
                <Phone size={15} strokeWidth={1.5} className="flex-none text-gold" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
            </li>
          </ul>
          <SocialLinks tone="light" className="mt-6" />
        </div>
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-4 border-t border-gold/40 py-7 text-[13px] text-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.companyName}. {site.footer.rights}
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <button type="button" className="underline-offset-4 hover:text-gold hover:underline" onClick={() => onOpenLegal("privacy")}>
              {site.legal.privacy.title}
            </button>
            <span aria-hidden="true" className="text-gold">·</span>
            <button type="button" className="underline-offset-4 hover:text-gold hover:underline" onClick={() => onOpenLegal("terms")}>
              {site.legal.terms.title}
            </button>
            <span aria-hidden="true" className="text-gold">·</span>
            <a href="#contact" className="underline-offset-4 hover:text-gold hover:underline">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
