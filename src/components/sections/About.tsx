import { Eye, Target } from "lucide-react";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";
import { imageSources, site } from "@/content/siteContent";

export function About() {
  const a = site.about;
  const img = imageSources(a.image);
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ivory">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[460px] pb-5 pl-5 lg:max-w-none">
            <div className="absolute inset-0 top-5 right-5 border border-gold" aria-hidden="true" />
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(min-width: 1024px) 460px, (min-width: 520px) 460px, 90vw"
              alt={a.alt}
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <Reveal>
            <p className="label">{a.label}</p>
            <h2 id="about-heading" className="mt-4 text-[40px] font-medium leading-[1.08] sm:text-[48px] lg:text-[54px]">
              {a.heading}
            </h2>
            <span className="rule-gold mt-6" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-[16px] leading-[1.75] sm:text-[17px]">
              {a.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-24">
          {[
            { ...a.mission, Icon: Target },
            { ...a.vision, Icon: Eye },
          ].map(({ title, text, Icon }) => (
            <RevealItem key={title} className="h-full">
              <div className="flex h-full gap-6 border border-line bg-card p-8 sm:p-10">
                <span className="icon-circle">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[28px] font-semibold leading-tight">{title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.7]">{text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
