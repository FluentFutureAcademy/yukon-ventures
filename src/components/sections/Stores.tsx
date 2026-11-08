import { ButtonLink } from "@/components/ButtonLink";
import { PlatformBadge } from "@/components/PlatformBadge";
import { RevealItem, Stagger } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/siteContent";

export function Stores() {
  const s = site.storesSection;
  return (
    <section id="stores" aria-labelledby="stores-heading" className="bg-ivory">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <SectionHeading id="stores-heading" label={s.label} heading={s.heading} intro={s.intro} />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {site.stores.map((store) => {
            const live = !!store.url;
            return (
              <RevealItem key={store.name} className="h-full min-w-0">
                <article className="card-lift flex h-full flex-col border border-line border-t-[3px] border-t-gold bg-card p-6 sm:p-10">
                  <div>
                    <PlatformBadge platform={store.platform} label={store.platformLabel} />
                  </div>
                  <h3 className="mt-6 text-[30px] font-semibold leading-[1.1]">{store.name}</h3>
                  {store.username ? (
                    <p className="mt-1.5 text-[13px] text-grey">{store.username}</p>
                  ) : (
                    <p className="mt-1.5 text-[13px]" aria-hidden="true">&nbsp;</p>
                  )}
                  <p className="mt-5 text-[15.5px] leading-[1.7]">{store.description}</p>
                  {!live && store.comingSoonText ? (
                    <p className="mt-4 font-serif text-[19px] italic text-charcoal">{store.comingSoonText}</p>
                  ) : null}

                  <div className="mt-auto pt-8">
                    {live ? (
                      <ButtonLink href={store.url} external className="w-full px-4 sm:px-7">
                        {store.buttonText}
                      </ButtonLink>
                    ) : (
                      <span className="btn w-full px-4 sm:px-7" role="link" aria-disabled="true">
                        {s.comingSoonButton}
                      </span>
                    )}
                    <p className="mt-4 whitespace-nowrap text-center text-[11px] uppercase tracking-[0.16em] text-grey">
                      {s.operatedBy}
                    </p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
