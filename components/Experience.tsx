
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';
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
  ChevronUp,
  Sparkles,
  ExternalLink
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

const getRoleTheme = (role: string) => {
  const r = role.toLowerCase();
  if (r.includes('photographer')) return 'from-cyan-500 to-blue-500';
  if (r.includes('marketing')) return 'from-indigo-500 to-purple-500';
  if (r.includes('designer')) return 'from-pink-500 to-rose-500';
  if (r.includes('lecturer')) return 'from-amber-400 to-orange-500';
  return 'from-slate-400 to-slate-600';
};

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ experience, index }) => {
  const Icon = getRoleIcon(experience.role);
  const themeClasses = getRoleTheme(experience.role);
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      {...({
        initial: { opacity: 0, x: isEven ? -50 : 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, type: 'spring', bounce: 0.3 }
      } as any)}
      className={`relative flex flex-col md:flex-row items-center gap-8 mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Background Index Number (Editorial Design) */}
      <span className={`absolute top-0 text-[10rem] font-black opacity-[0.03] select-none pointer-events-none leading-none z-0 ${isEven ? 'right-0' : 'left-0'}`}>
        0{index + 1}
      </span>

      {/* Visual Side (Icon/Graphic) */}
      <div className="flex-1 w-full flex justify-center items-center relative">
        <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${themeClasses} p-[2px] shadow-2xl rotate-3 group hover:rotate-0 transition-transform duration-500`}>
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center relative overflow-hidden">
             <div className={`absolute inset-0 bg-gradient-to-br ${themeClasses} opacity-10`} />
             <Icon size={40} className="text-white relative z-10" />
          </div>
          {/* Accent Glow */}
          <div className={`absolute -inset-4 bg-gradient-to-br ${themeClasses} opacity-20 blur-2xl -z-10`} />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-[2] w-full">
        <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-2xl">
          {/* Subtle Background pattern */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
               <div className="flex items-center gap-3 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <Calendar size={14} className="text-secondary" />
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-tighter">{experience.period}</span>
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest">
                  <MapPin size={14} />
                  {experience.location}
               </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight">
              {experience.role}
            </h3>
            
            <div className="flex items-center gap-3 mb-8">
              <span className={`w-8 h-[2px] bg-gradient-to-r ${themeClasses}`} />
              {experience.website ? (
                <a 
                  href={experience.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-medium text-slate-400 hover:text-white transition-all flex items-center gap-2 group/link hover:underline decoration-secondary/50 underline-offset-4"
                >
                  {experience.company}
                  <ExternalLink size={16} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
                </a>
              ) : (
                <p className="text-xl font-medium text-slate-400">{experience.company}</p>
              )}
            </div>

            <div className="space-y-4">
              {experience.description.slice(0, isExpanded ? 100 : 2).map((point, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-4 text-slate-300 leading-relaxed"
                >
                  <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${themeClasses} shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                  <p className="text-base md:text-lg">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors group"
              >
                {isExpanded ? 'Show Less' : 'Full Responsibilities'}
                <div className={`p-1.5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              <div className="hidden lg:flex gap-2">
                 {/* Visual indicator of "Key Project" or similar */}
                 <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-tighter animate-pulse">
                    <Sparkles size={12} />
                    High Impact
                 </div>
              </div>
            </div>
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
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Briefcase size={14} />
            Professional Path
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Chronicle</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            A journey of creative evolution and digital excellence across international markets.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* The Central "Thread" */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 hidden md:block" />
          
          <motion.div 
            style={{ 
              scaleY: pathLength,
              opacity 
            } as any}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2 hidden md:block origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />

          <div className="space-y-32">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Closing Career Statement */}
        <motion.div 
           {...({
             initial: { opacity: 0 },
             whileInView: { opacity: 1 },
             viewport: { once: true }
           } as any)}
           className="mt-40 text-center"
        >
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 relative overflow-hidden max-w-4xl mx-auto">
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Continually Evolving...</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                   Currently applying these years of expertise to drive innovation at Al Khateeb Global.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Work With Me <Sparkles size={18} />
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
