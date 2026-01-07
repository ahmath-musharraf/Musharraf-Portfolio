
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
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
             <div className="h-px w-6 bg-indigo-500/50"></div>
             <span className="text-indigo-400 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Expertise Matrix</span>
             <div className="h-px w-6 bg-indigo-500/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Mastery</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base font-light leading-relaxed">
            Professional competencies across cinematography, branding, engineering, and digital strategy.
          </p>
        </motion.div>

        {/* Dynamic Grid for Skill Cards - Configured for 4 columns on XL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: idx * 0.05 }
              } as any)}
              className="bg-[#0c111d]/60 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group relative overflow-hidden flex flex-col shadow-xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-11 h-11 bg-slate-800/40 rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-indigo-500/20 transition-all duration-500">
                  <category.icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={20} />
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-mono text-[8px] tracking-[0.1em] uppercase font-black block mb-0.5 opacity-60">Expertise Area</span>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors leading-tight">{category.name}</h3>
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-auto">
                {category.skills.map((skill, sIdx) => {
                  const percentage = 98 - (idx * 2) - (sIdx * 4);
                  return (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-[13px] font-medium tracking-tight group-hover:text-slate-200 transition-colors">{skill}</span>
                      </div>
                      <div className="h-[1.5px] w-full bg-slate-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (sIdx * 0.05) }}
                          className="h-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.3)] rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials & Languages - Simplified Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
