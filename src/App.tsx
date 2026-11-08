import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LegalModal, type LegalDoc } from "@/components/LegalModal";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Presence } from "@/components/sections/Presence";
import { Products } from "@/components/sections/Products";
import { Stores } from "@/components/sections/Stores";
import { Welcome } from "@/components/sections/Welcome";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function App() {
  const [legal, setLegal] = useState<LegalDoc | null>(null);
  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="main">
        <Hero />
        <Welcome />
        <About />
        <Products />
        <Stores />
        <WhyChoose />
        <Presence />
        <Contact />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalModal doc={legal} onClose={() => setLegal(null)} />
      <BackToTop />
    </MotionConfig>
    </LazyMotion>
  );
}
