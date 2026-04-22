
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  ExternalLink,
  ChevronRight,
  Sparkles
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

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ experience, index }) => {
  const Icon = getRoleIcon(experience.role);
  
  return (
    <motion.div
      {...({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay: index * 0.1 }
      } as any)}
      className="relative pl-8 md:pl-12 pb-16 last:pb-0"
    >
      {/* Timeline Node & Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Date Component */}
        <div className="md:w-32 flex-shrink-0 pt-1">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-2">{experience.period}</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-primary uppercase">
            <Calendar size={10} /> REC_V{index + 1}
          </div>
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:bg-white/[0.04] transition-colors group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg text-primary">
                  <Icon size={16} />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">{experience.role}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400">
                {experience.website ? (
                  <a 
                    href={experience.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[12px] sm:text-sm font-semibold text-slate-200 hover:text-primary transition-colors flex items-center gap-1.5 underline decoration-slate-700 underline-offset-4"
                  >
                    {experience.company} <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[12px] sm:text-sm font-semibold text-slate-200">{experience.company}</span>
                )}
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-[11px] sm:text-sm flex items-center gap-1.5"><MapPin size={12} /> {experience.location}</span>
              </div>
            </div>
            
            {index === 0 && (
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse self-start md:self-center">
                Current
              </div>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {experience.description.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <ChevronRight size={14} className="mt-1 text-primary opacity-50 flex-shrink-0" />
                <p className="text-slate-400 text-[12px] sm:text-sm leading-relaxed font-light">{point}</p>
              </div>
            ))}
          </div>

          {/* Tag cloud for visibility */}
          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
             {["Leadership", "Production", "Strategy", "Execution"].map((tag, tIdx) => (
               <span key={tIdx} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded">
                 #{tag}
               </span>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} id="experience" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Chronicle.</span></h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A comprehensive look at my professional evolution, focusing on digital transformation, multimedia architecture, and strategic growth.
          </p>
        </div>

        <div className="relative mt-20">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
