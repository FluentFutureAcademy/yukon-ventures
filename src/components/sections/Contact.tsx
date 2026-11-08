import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/siteContent";

export function Contact() {
  const c = site.contact;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-beige">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <p className="label">{c.label}</p>
            <h2 id="contact-heading" className="mt-4 text-[40px] font-medium leading-[1.08] sm:text-[48px] lg:text-[54px]">
              {c.heading}
            </h2>
            <span className="rule-gold mt-6" aria-hidden="true" />
            <div className="mt-7 space-y-4 text-[16px] leading-[1.75] sm:text-[17px]">
              {c.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="icon-circle">
                  <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-grey">Email</p>
                  <a href={`mailto:${c.email}`} className="text-[17px] font-medium text-charcoal underline-offset-4 hover:underline">
                    {c.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="icon-circle">
                  <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-grey">Telephone</p>
                  <a href={c.phoneHref} className="text-[17px] font-medium text-charcoal underline-offset-4 hover:underline">
                    {c.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
            <SocialLinks className="mt-8" />
          </Reveal>

          <Reveal className="border border-line bg-card p-7 sm:p-10">
            <h3 className="text-[30px] font-semibold leading-tight">{c.form.heading}</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
