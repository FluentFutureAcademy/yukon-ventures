import { ArrowRight } from "lucide-react";
import { RevealItem, Stagger } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { imageSources, site } from "@/content/siteContent";

export function Products() {
  const p = site.products;
  return (
    <section id="products" aria-labelledby="products-heading" className="bg-beige">
      <div className="container-site py-24 sm:py-28 lg:py-32">
        <SectionHeading id="products-heading" label={p.label} heading={p.heading} intro={p.intro} />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {site.categories.map((c, i) => {
            const img = imageSources(c.image);
            return (
              <RevealItem key={c.title} className="h-full">
                <article className="card-lift group flex h-full flex-col border border-line bg-card">
                  <div className="overflow-hidden">
                    <img
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 46vw, 92vw"
                      alt={c.alt}
                      width={800}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="card-img aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="font-serif text-[22px] font-medium leading-none text-gold-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[28px] font-semibold leading-[1.15]">{c.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-[1.7]">{c.description}</p>
                    <a
                      href="#stores"
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium uppercase tracking-[0.06em] text-charcoal transition-opacity duration-300 hover:text-gold-text [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:focus-visible:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
                    >
                      {p.linkText}
                      <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </Stagger>

        <p className="mx-auto mt-14 max-w-[640px] text-center font-serif text-[20px] italic leading-snug text-charcoal">
          {p.note}
        </p>
      </div>
    </section>
  );
}
