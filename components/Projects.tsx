
import React from 'react';
import { motion } from 'framer-motion';
import { SOFTWARE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Github, Globe2, Code2, Terminal, Cpu, Database, Layout, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find(link => link.name === "GitHub")?.url || "https://github.com/ahmathmusharraf";

  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('full-stack')) return <Database size={16} />;
    if (t.includes('ui/ux')) return <Layout size={16} />;
    if (t.includes('ai') || t.includes('neural')) return <Cpu size={16} />;
    return <Code2 size={16} />;
  };

  return (
    <section id="engineering" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-16 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase text-glow px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
              Web Engineering & Design
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 text-glow font-display tracking-tight">
            Full-Stack Digital Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-indigo-400 to-indigo-600 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Bridging the gap between Front-end aesthetics and Back-end scalability to build complete, high-performance web ecosystems.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {SOFTWARE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              {...({
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: index * 0.05 }
              } as any)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border border-white/5 shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                    <a 
                      href={project.github || "#"} 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[9px] font-bold text-white bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-full hover:bg-primary transition-all border border-white/5 uppercase tracking-tighter"
                    >
                      <Github size={12} /> Source
                    </a>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[9px] font-bold text-white bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-full hover:bg-secondary transition-all border border-white/5 uppercase tracking-tighter"
                      >
                        <Globe2 size={12} /> Live
                      </a>
                    )}
                </div>
              </div>

              {/* Corner Icon Badge */}
              <div className="absolute top-4 right-4 p-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl text-primary group-hover:scale-110 transition-all">
                {getTechIcon(project.tags[0])}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA Area */}
        <motion.div 
            {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true }
            } as any)}
            className="mt-20 text-center relative"
        >
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a 
                    href={githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 pl-3 pr-6 py-2.5 bg-white text-slate-950 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                    <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white">
                      <Terminal size={18} />
                    </div>
                    <span className="text-sm">Complete Engineering Stack on GitHub</span>
                    <Sparkles size={16} className="text-primary ml-auto md:ml-0" />
                </a>
            </div>
            
            <p className="mt-8 text-slate-600 font-mono text-[10px] uppercase tracking-[0.5em] opacity-50">
              Full-Stack Build — 2025
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
