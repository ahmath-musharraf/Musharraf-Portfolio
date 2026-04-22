
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, LANGUAGES, CERTIFICATIONS } from '../constants';
import { Award, Globe, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
             <div className="h-px w-6 sm:w-8 bg-indigo-500/50"></div>
             <span className="text-indigo-400 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">Expertise Matrix</span>
             <div className="h-px w-6 sm:w-8 bg-indigo-500/50"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tighter">Technical Mastery.</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base font-light leading-relaxed">
            Professional competencies across cinematography, branding, and engineering.
          </p>
        </motion.div>

        {/* Technical Mastery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 sm:gap-y-16 px-2 sm:px-0">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: idx * 0.05, duration: 0.6 }
              } as any)}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4 relative">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <category.icon size={16} />
                </div>
                <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-[0.1em]">{category.name}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill} className="flex items-start gap-2.5 group/skill">
                    <div className="w-1 h-1 rounded-full bg-slate-800 mt-1.5 group-hover/skill:bg-indigo-500 transition-colors"></div>
                    <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-relaxed group-hover/skill:text-slate-200 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials & Languages - Simplified Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-32">
          <motion.div
            {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="lg:col-span-8 bg-[#0c111d]/40 p-8 rounded-3xl border border-white/5 shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-amber-400" size={20} /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-white/5 group hover:border-amber-400/20 transition-all">
                  <div className="p-2 bg-slate-800 rounded-lg text-amber-400/80 group-hover:scale-110 transition-transform">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-200 font-medium text-xs leading-tight transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="lg:col-span-4 bg-indigo-600/90 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-24 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <Globe className="text-white" size={20} /> Global Languages
            </h3>
            <div className="space-y-4 relative z-10">
              {LANGUAGES.map((lang) => {
                 const [name, levelRaw] = lang.split(' (');
                 const level = levelRaw?.replace(')', '') || 'Native';
                 return (
                    <div key={name} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                        <span className="text-white text-sm font-bold">{name}</span>
                        <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-white text-[9px] font-black uppercase tracking-wider">{level}</span>
                    </div>
                 )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
