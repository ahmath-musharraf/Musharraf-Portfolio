import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Palette, 
  Megaphone, 
  GraduationCap, 
  Camera, 
  Share2,
  Code,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const getRoleIcon = (role: string) => {
  const r = role.toLowerCase();
  if (r.includes('photographer') || r.includes('video')) return Camera;
  if (r.includes('designer') || r.includes('multimedia')) return Palette;
  if (r.includes('lecturer') || r.includes('teaching')) return GraduationCap;
  if (r.includes('marketing') || r.includes('seo') || r.includes('ads')) return Megaphone;
  if (r.includes('social media')) return Share2;
  if (r.includes('software') || r.includes('developer')) return Code;
  return Briefcase;
};

const getKeywords = (description: string[]) => {
  const text = description.join(' ').toLowerCase();
  const keywords = [
    'seo', 'google ads', 'meta ads', 'photoshop', 'premiere pro', 
    'after effects', 'social media', 'content', 'photography', 
    'videography', 'teaching', 'lecturing', 'management', 'branding'
  ];
  return keywords.filter(k => text.includes(k));
};

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ experience, index }) => {
  const Icon = getRoleIcon(experience.role);
  const tags = getKeywords(experience.description);
  const isEven = index % 2 === 0;
  
  const [isExpanded, setIsExpanded] = useState(false);
  const initialItemsToShow = 2;
  const hasMore = experience.description.length > initialItemsToShow;

  return (
    <motion.div
      {...({
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay: index * 0.1 }
      } as any)}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Node (Mobile: Left, Desktop: Center) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] group hover:border-primary hover:scale-110 transition-all duration-300">
        <Icon size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
      </div>

      {/* Spacer for Desktop Alignment */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
        <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 hover:from-primary/50 hover:to-secondary/50 transition-all duration-500">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl" />
          
          <div className="relative p-6 rounded-2xl h-full border border-white/5 group-hover:border-transparent transition-colors">
            {/* Header */}
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-xs font-mono text-primary tracking-wider uppercase mb-1 flex items-center gap-2">
                <Calendar size={12} /> {experience.period}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Briefcase size={14} className="text-secondary" />
                {experience.company}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={12} />
                {experience.location}
              </div>
            </div>

            {/* Description */}
            <div role="list" className="space-y-3 mb-4">
              {experience.description.slice(0, initialItemsToShow).map((point, idx) => (
                <div role="listitem" key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed group/item">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover/item:bg-secondary transition-colors" />
                  {point}
                </div>
              ))}
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                     <div className="space-y-3 pt-3">
                       {experience.description.slice(initialItemsToShow).map((point, idx) => (
                         <div role="listitem" key={idx + initialItemsToShow} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed group/item">
                           <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover/item:bg-secondary transition-colors" />
                           <span>{point}</span>
                         </div>
                       ))}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View More Button */}
            {hasMore && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-white transition-colors mb-4 focus:outline-none group/btn"
                >
                    {isExpanded ? 'View Less' : 'View More'}
                    {isExpanded ? (
                        <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                    ) : (
                        <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    )}
                </button>
            )}

            {/* Auto-generated Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-400 bg-slate-800 rounded-md border border-slate-700 group-hover:border-primary/30 group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-20 text-center"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY } as any}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10"
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
          
          {/* Bottom Node */}
          <div className="absolute -bottom-2 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 border-2 border-primary rounded-full z-20" />
        </div>
      </div>
    </section>
  );
};

export default Experience;