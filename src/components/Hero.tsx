import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import { site } from "@/content/siteContent";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const h = site.hero;

export function Hero() {
  const small = useMediaQuery("(max-width: 767px)");
  // phones use the portrait image; the copy fills the lower half of the screen,
  // so the hero grows a little to leave the products their own band
  const phone = useMediaQuery("(max-width: 639px)");
  return (
    <div id="home">
      <SculptureHero
        src={h.desktopImage}
        mobileSrc={h.mobileImage}
        darkSrc={h.desktopImage}
        mobileDarkSrc={h.mobileImage}
        imageAlt={h.imageAlt}
        showNav={false}
        theme="light"
        themeToggle={false}
        background="#FAF8F4"
        textColor="#1F1F1F"
        // approved deep gold: #B8975A is 2.6:1 on ivory, below AA for large text
        accentColor="#A5844A"
        loadFonts={false}
        headingFont="'Cormorant Garamond', Georgia, serif"
        accentFont="'Cormorant Garamond', Georgia, serif"
        bodyFont="'Inter', system-ui, sans-serif"
        eyebrow={h.eyebrow}
        headline={h.headline}
        headlineAccent={h.headlineAccent}
        subheading={h.subheading}
        body={h.body}
        ctas={h.ctas}
        hint={h.hint}
        hintTouch={h.hintTouch}
        backdropText={h.backdropText}
        height="var(--hero-h)"
        restStyle="image"
        intro
        ambient
        ambientIntensity={0.5}
        strength={0.9}
        particleDensity={small ? 0.6 : 1}
        // The component's own nav is hidden, so its layout band starts at the very
        // top; these push the products below the fixed site header.
        sculptureY={phone ? -3 : 5}
        sculptureScale={0.9}
        mobileSculptureScale={0.88}
        // Author credit kept: remove only after confirming the component's licence allows it.
        showCredit
      />
    </div>
  );
}
