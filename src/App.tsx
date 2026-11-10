// Proprietary source — see LICENSE.md for terms.

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import ProductScroll from './components/ProductScroll';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { scrollToElement, setLenisInstance } from './lib/scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-center pointer-events-none">
      <div className="flex items-center gap-10 bg-white/95 backdrop-blur-3xl border border-slate-200/50 rounded-full px-10 py-4 shadow-2xl shadow-slate-200/40 pointer-events-auto">
        <div className="flex items-center gap-3 border-r border-slate-200 pr-10">
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          <span className="text-[14px] font-bold tracking-tight text-slate-900 uppercase">DCOZI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium uppercase tracking-widest text-slate-500">
          <button type="button" onClick={() => scrollToElement('#home')} className="hover:text-brand-gold transition-colors cursor-pointer">Home</button>
          <button type="button" onClick={() => scrollToElement('#products')} className="hover:text-brand-gold transition-colors cursor-pointer">Systems</button>
          <button type="button" onClick={() => scrollToElement('#certified')} className="hover:text-brand-gold transition-colors cursor-pointer">Showroom</button>
          <button type="button" onClick={() => scrollToElement('#contact')} className="hover:text-brand-gold transition-colors cursor-pointer">Contact</button>
        </div>

        <button
          type="button"
          onClick={() => scrollToElement('#contact')}
          className="ml-6 px-8 py-2.5 bg-brand-gold text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-brand-gold/30 cursor-pointer"
        >
          Inquiry
        </button>
      </div>
    </nav>
  );
}

export default function App() {
  const [inquirySelection, setInquirySelection] = useState<{ product: string; seq: number }>({
    product: '',
    seq: 0,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  const handleInquire = (productName: string) => {
    setInquirySelection((prev) => ({ product: productName, seq: prev.seq + 1 }));
  };

  return (
    <div className="relative font-sans selection:bg-brand-gold selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="products">
          <ProductScroll onInquire={handleInquire} />
        </div>
        <div id="contact">
          <ContactForm
            selectedProduct={inquirySelection.product}
            selectionSeq={inquirySelection.seq}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
