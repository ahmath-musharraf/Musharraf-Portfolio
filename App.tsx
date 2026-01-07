
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowLeft, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VisualWorks from './components/VisualWorks';
import Education from './components/Education';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrintableResume from './components/PrintableResume';
import { SITE_CONFIG } from './constants';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Dynamic Head updates for SEO
    document.title = SITE_CONFIG.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SITE_CONFIG.description);
    
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resume Mode Rendering
  if (showResume) {
    return (
      <div className="min-h-screen bg-neutral-100 py-12 relative print:bg-white print:py-0 print:px-0">
        <div className="fixed top-8 right-8 z-50 flex gap-4 print:hidden">
          <button 
            onClick={() => setShowResume(false)} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-indigo-600 transition-all border border-white/10"
          >
            <ArrowLeft size={18} /> Exit
          </button>
          
          <a 
            href={SITE_CONFIG.resumeUrl}
            download="Ahmath_Musharraf_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full font-bold shadow-2xl hover:bg-indigo-600 transition-all border border-white/10"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
        <PrintableResume />
      </div>
    );
  }

  // Portfolio Mode Rendering
  return (
    <div className="min-h-screen bg-dark text-slate-200 selection:bg-primary/30 selection:text-white overflow-x-hidden scroll-smooth">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main>
        <Hero onOpenResume={() => setShowResume(true)} />
        <Experience />
        <Skills />
        <VisualWorks />
        <Projects />
        <Education />
        <Testimonials />
      </main>
      
      <Contact />
      <FloatingWhatsApp />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-8 p-4 bg-slate-800/80 backdrop-blur-md rounded-full shadow-2xl border border-white/10 hover:bg-primary transition-all z-40 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
