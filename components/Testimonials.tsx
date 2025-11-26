
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Update active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
        handleScroll(); // Initial check
        ref.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            ref.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
        const { clientWidth } = scrollRef.current;
        scrollRef.current.scrollTo({ left: index * clientWidth, behavior: 'smooth' });
    }
  };

  // Calculate number of "pages" (dots) based on screen width
  // This is an estimation for the UI dots
  const getTotalPages = () => {
     if (!scrollRef.current) return TESTIMONIALS.length;
     const { scrollWidth, clientWidth } = scrollRef.current;
     if (clientWidth === 0) return 0;
     return Math.ceil(scrollWidth / clientWidth);
  };
  
  const totalPages = getTotalPages();

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-16 text-center"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">What Colleagues Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative group">
          {/* Previous Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-slate-800 border border-white/10 text-white shadow-lg hover:bg-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                {...({
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 }
                } as any)}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="h-full relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm group/card hover:bg-slate-900/60 hover:border-white/10 transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-slate-800 group-hover/card:text-primary/20 transition-colors">
                    <Quote size={48} fill="currentColor" />
                  </div>

                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="mb-6 flex-grow">
                       <p className="text-slate-300 italic leading-relaxed text-lg">"{testimonial.quote}"</p>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                            <User size={20} className="text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                        <div className="flex flex-col">
                            <span className="text-secondary text-xs font-medium">{testimonial.role}</span>
                            <span className="text-slate-500 text-[10px] uppercase tracking-wide">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-slate-800 border border-white/10 text-white shadow-lg hover:bg-primary hover:border-primary transition-all duration-300 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                    ? 'bg-primary w-8' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
            </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
