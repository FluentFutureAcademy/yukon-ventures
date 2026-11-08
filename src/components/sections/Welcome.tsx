import { HeartHandshake, Layers, ShieldCheck, Store } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/siteContent";

const trustIcons = { registered: ShieldCheck, stores: Store, categories: Layers, service: HeartHandshake };

export function Welcome() {
  return (
    <section aria-label="Welcome" className="bg-ivory">
      <div className="container-site py-20 sm:py-24">
        <Reveal className="mx-auto max-w-[760px] space-y-6 text-center text-[17px] leading-[1.7] sm:text-[18px]">
          <span className="rule-gold mx-auto" aria-hidden="true" />
          {site.welcome.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
      <div className="border-y border-line bg-beige">
        <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
          {site.trust.map((t, i) => {
            const Icon = trustIcons[t.icon];
            return (
              <li
                key={t.text}
                className={[
                  "flex flex-col items-center gap-3 px-3 py-7 text-center sm:flex-row sm:justify-center sm:text-left lg:py-8",
                  i % 2 === 1 ? "border-l border-gold/50" : "",
                  i >= 2 ? "border-t border-gold/50 lg:border-t-0" : "",
                  i === 2 ? "lg:border-l" : "",
                ].join(" ")}
              >
                <Icon className="flex-none text-gold-deep" size={22} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-[13px] font-medium leading-snug text-charcoal sm:text-[14px]">{t.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
