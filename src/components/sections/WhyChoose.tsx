import { BadgePercent, HeartHandshake, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import { Reveal, RevealItem, Stagger } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/siteContent";

const icons = { selected: Sparkles, value: BadgePercent, service: HeartHandshake, convenient: ShoppingBag, growing: TrendingUp };

export function WhyChoose() {
  const w = site.why;
  return (
    <section aria-labelledby="why-heading" className="bg-beige">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <SectionHeading id="why-heading" label={w.label} heading={w.heading} intro={w.intro} />

        <Stagger className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-4 lg:grid-cols-6">
          {w.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <RevealItem
                key={item.title}
                className={"md:col-span-2 " + (i === 4 ? "md:col-start-2 lg:col-start-auto " : "") + (i === 3 ? "lg:col-start-2" : "")}
              >
                <div className="card-lift flex h-full flex-col items-center border border-line bg-card px-6 py-10 text-center">
                  <span className="icon-circle">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[25px] font-semibold leading-[1.15]">{item.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.7]">{item.text}</p>
                </div>
              </RevealItem>
            );
          })}
        </Stagger>

        <Reveal>
          <p className="mx-auto mt-16 max-w-[720px] text-center font-serif text-[24px] italic leading-[1.35] text-charcoal sm:text-[28px]">
            {w.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
