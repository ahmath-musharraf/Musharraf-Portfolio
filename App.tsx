import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
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

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
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