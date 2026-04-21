
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
  Sparkles,
  ExternalLink,
  Target,
  Zap,
  Layers,
  ArrowRight
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
  if (r.includes('photographer')) return 'from-cyan-500 to-blue-600';
  if (r.includes('marketing')) return 'from-indigo-500 to-purple-600';
  if (r.includes('designer')) return 'from-pink-500 to-rose-600';
  if (r.includes('lecturer')) return 'from-amber-400 to-orange-600';
  return 'from-slate-400 to-slate-600';
};

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ experience, index }) => {
  const Icon = getRoleIcon(experience.role);
  const themeClasses = getRoleTheme(experience.role);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Custom tech tags based on role (hardcoded for impact since they aren't in constants)
  const getTechTags = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes('visual lead')) return ['DaVinci Resolve', '4K Cinematic', 'Brand Strategy', 'UI/UX'];
    if (r.includes('lecturer')) return ['BTEC Curriculum', 'React.js', 'Lighting Design', 'Mentorship'];
    if (r.includes('studio routes')) return ['Fashion Editorial', 'Commercial Video', 'FPV Drones', 'Color Science'];
    if (r.includes('strategist')) return ['Meta Ads', 'Google Analytics', 'SEO', 'Conversion Funnels'];
    if (r.includes('marketing')) return ['Healthcare Brand', 'UX Design', 'Content Strategy', 'Demographic Analysis'];
    return ['Strategy', 'Leadership', 'Execution'];
  };

  const tags = getTechTags(experience.role);

  return (
    <motion.div
      {...({
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      } as any)}
      className="relative pl-8 md:pl-20 group"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-5px] md:left-[35px] top-0 bottom-0 w-[2px] bg-white/5 group-last:bg-transparent">
        <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            className={`absolute top-0 left-0 w-full bg-gradient-to-b ${themeClasses} opacity-30`}
        />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 z-10 group-hover:scale-125 transition-transform duration-500`}>
          <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${themeClasses} animate-pulse`} />
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <span className={`text-sm font-mono font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-transparent bg-clip-text bg-gradient-to-r ${themeClasses} uppercase tracking-tighter`}>
                {experience.period}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
                <MapPin size={12} />
                {experience.location}
            </div>
        </div>

        <div className="relative">
            {/* Background Accent */}
            <div className={`absolute -left-12 top-0 text-[8rem] font-black opacity-[0.02] select-none pointer-events-none leading-none z-0 tracking-tighter`}>
                0{index + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                <div className="lg:col-span-8">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                        {experience.role}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${themeClasses} p-[1px]`}>
                            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                                <Icon size={20} className="text-white" />
                            </div>
                        </div>
                        <div>
                            {experience.website ? (
                                <a 
                                    href={experience.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-2xl font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2 hover:underline decoration-secondary/50 underline-offset-4"
                                >
                                    {experience.company}
                                    <ExternalLink size={16} className="opacity-40" />
                                </a>
                            ) : (
                                <p className="text-2xl font-bold text-slate-300">{experience.company}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        {experience.description.slice(0, isExpanded ? experience.description.length : 2).map((point, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 text-slate-400 leading-relaxed"
                            >
                                <ArrowRight size={18} className="mt-1 flex-shrink-0 text-slate-600 group-hover:text-primary transition-colors" />
                                <p className="text-lg md:text-xl font-light">{point}</p>
                            </motion.div>
                        ))}
                    </div>

                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-slate-200 transition-all border border-white/5"
                    >
                        {isExpanded ? 'Collapse' : 'Impact Details'}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h4 className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                             <Layers size={12} /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, tIdx) => (
                                <span 
                                    key={tIdx} 
                                    className="px-3 py-1 rounded-lg bg-slate-900 border border-white/5 text-[11px] font-bold text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-white/5 shadow-xl">
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                             <Target size={12} /> Key Outcome
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Zap size={14} className="text-amber-400" />
                                <p className="text-xs font-bold text-white">Scale: Int'l Markets</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Sparkles size={14} className="text-indigo-400" />
                                <p className="text-xs font-bold text-white">Impact: High Revenue</p>
                            </div>
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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="experience" className="py-40 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[40%] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-8">
                <motion.div
                    {...({
                        initial: { opacity: 0, x: -30 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: true }
                    } as any)}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 shadow-xl shadow-primary/5">
                         Curated History
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Career <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-secondary animate-gradient bg-[length:200%_auto]">
                            Chronicle.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg">
                        Architecting digital experiences and cinematic narratives for elite brands globally.
                    </p>
                </motion.div>

                <motion.div
                    {...({
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true }
                    } as any)}
                    className="flex lg:flex-col items-center lg:items-end gap-3 text-right"
                >
                    <div className="text-4xl font-mono font-black text-white/10 select-none">EST. 2018</div>
                    <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-primary/50" />
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto relative mt-20">
                <div className="space-y-0">
                    {EXPERIENCES.map((exp, index) => (
                        <ExperienceCard key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>

            {/* Resume Call to Action */}
            <motion.div 
               {...({
                 initial: { opacity: 0, y: 40 },
                 whileInView: { opacity: 1, y: 0 },
                 viewport: { once: true }
               } as any)}
               className="mt-40"
            >
               <div className="relative group p-12 md:p-20 rounded-[3rem] bg-slate-900 border border-white/5 overflow-hidden flex flex-col items-center text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 transition-opacity group-hover:opacity-100" />
                  <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-blob" />
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                  
                  <div className="relative z-10">
                     <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Ready for the Next Chapter?</h3>
                     <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
                        Explore the full record of impacts, certifications, and technical proficiencies in the comprehensive case study or professional CV.
                     </p>
                     <div className="flex flex-wrap justify-center gap-6">
                        <a 
                            href="#contact" 
                            className="group relative px-10 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-2xl flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">Initiate Project <ArrowRight size={16} /></span>
                        </a>
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-10 py-5 bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-700 transition-all border border-white/10"
                        >
                            Back to Top
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
