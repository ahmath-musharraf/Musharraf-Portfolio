import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, Printer, ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrintableResume from './components/PrintableResume';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showResume) {
    return (
      <div className="min-h-screen bg-slate-200 py-8 relative print:bg-white print:p-0 print:m-0">
        <div className="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
            <button 
              onClick={() => setShowResume(false)}
              className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-primary transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </button>
            <button 
              onClick={() => {
                setTimeout(() => window.print(), 100);
              }}
              className="px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-full font-bold shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <Printer size={18} />
              Save CV as PDF
            </button>
        </div>
        <PrintableResume />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[100]"
        style={{ scaleX } as any}
      />

      <Navbar />
      
      <main>
        <Hero onOpenResume={() => setShowResume(true)} />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
      
      <Contact />

      <FloatingWhatsApp />

      {/* Scroll To Top Button - Positioned above WhatsApp button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            {...({
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.5 }
            } as any)}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 md:right-8 p-3 bg-slate-800 text-white rounded-full shadow-lg border border-white/10 hover:bg-primary transition-all z-40 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;