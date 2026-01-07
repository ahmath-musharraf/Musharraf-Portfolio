import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-16 text-center"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Academic Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Education & Qualifications</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.15 }
              } as any)}
              className="group relative bg-slate-900/50 p-8 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Card Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300 shadow-inner">
                  <GraduationCap className="text-secondary group-hover:text-white transition-colors" size={28} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-slate-300 font-medium mb-4">{edu.institution}</p>
                
                <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-6 pt-6 border-t border-slate-800 group-hover:border-slate-700/50 transition-colors">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-800 rounded-md text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;