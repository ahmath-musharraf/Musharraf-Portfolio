import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, LANGUAGES, CERTIFICATIONS } from '../constants';
import { CheckCircle2, Award, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-16 text-center"
        >
           <span className="text-primary font-mono text-sm tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-6">Technical Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              {...({
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: idx * 0.1 },
                whileHover: { y: -5 }
              } as any)}
              className="bg-slate-900/40 p-6 rounded-3xl border border-white/5 hover:bg-slate-800/60 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all shadow-lg group-hover:shadow-primary/25">
                <category.icon className="text-slate-300 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-medium group-hover:border-slate-600 group-hover:text-slate-200 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Languages - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <motion.div
            {...({
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true }
            } as any)}
            className="lg:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
             {/* Decorative */}
             <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <Award className="text-yellow-400" /> Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:border-yellow-400/30 transition-colors">
                  <div className="p-2 bg-slate-900 rounded-full text-green-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-200 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             {...({
               initial: { opacity: 0, x: 20 },
               whileInView: { opacity: 1, x: 0 },
               viewport: { once: true }
             } as any)}
             className="bg-slate-900 p-8 rounded-3xl border border-white/5 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="text-secondary" /> Languages
            </h3>
            <div className="space-y-6">
              {LANGUAGES.map((langString, index) => {
                 const isFluent = langString.toLowerCase().includes('fluent');
                 const isIntermediate = langString.toLowerCase().includes('intermediate');
                 const name = langString.split(' - ')[0].split(' (')[0];
                 const level = isFluent ? 'Fluent' : isIntermediate ? 'Intermediate' : 'Basic';
                 const percent = isFluent ? 100 : isIntermediate ? 65 : 30;

                 return (
                    <div key={index}>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-slate-200 font-medium">{name}</span>
                            <span className={`text-xs font-bold tracking-wide ${isFluent ? 'text-secondary' : 'text-primary'}`}>
                                {level}
                            </span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                className={`h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                                    isFluent 
                                    ? 'bg-gradient-to-r from-secondary to-teal-300' 
                                    : 'bg-gradient-to-r from-primary to-indigo-300'
                                }`}
                            />
                        </div>
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