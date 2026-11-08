import { Flag } from "@/components/Flags";
import { PlatformBadge } from "@/components/PlatformBadge";
import { Reveal } from "@/components/Reveal";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { site } from "@/content/siteContent";

// map code + geometry load in their own chunk, off the critical path
const NorthAmericaMap = lazy(() => import("@/components/NorthAmericaMap").then((m) => ({ default: m.NorthAmericaMap })));

const mapPlaceholder = <div className="aspect-[800/620] w-full" aria-hidden="true" />;

export function Presence() {
  const p = site.presence;
  // the map mounts on the client only, once the section is near the viewport
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && setShowMap(true), { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section aria-labelledby="presence-heading" className="bg-ivory">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="label">{p.label}</p>
            <h2 id="presence-heading" className="mt-4 text-[36px] font-medium leading-[1.1] sm:text-[44px] lg:text-[48px]">
              {p.heading}
            </h2>
            <span className="rule-gold mt-6" aria-hidden="true" />
            <div className="mt-7 space-y-5 text-[16px] leading-[1.75] sm:text-[17px]">
              {p.paragraphs.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Countries of registration">
              {p.countries.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card py-2 pl-2.5 pr-4 text-[14px] font-medium text-charcoal"
                >
                  <Flag country={c as "Canada" | "United States"} className="h-[14px] w-[21px] flex-none rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border border-line bg-card p-4 sm:p-6">
            <div ref={mapRef}>
                {showMap ? (
                  <Suspense fallback={mapPlaceholder}>
                    <NorthAmericaMap label={p.mapAlt} />
                  </Suspense>
                ) : (
                  mapPlaceholder
                )}
            </div>
            <ul className="mt-2 flex flex-wrap justify-center gap-2 border-t border-line pt-5" aria-label="Marketplaces">
              {p.marketplaces.map((m) => (
                <li key={m.label}>
                  <PlatformBadge platform={m.platform} label={m.label} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
