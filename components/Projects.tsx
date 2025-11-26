import React from 'react';
import { motion } from 'framer-motion';
import { SOFTWARE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { FolderGit2, ArrowUpRight, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const githubLink = SOCIAL_LINKS.find(link => link.name === "GitHub")?.url || "https://github.com/ahmathmusharraf";

  return (
    <section id="portfolio" aria-label="Portfolio and Projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-secondary font-mono text-sm tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Featured Works</h2>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block border-r-4 border-primary pr-4">
             A selection of software and web development projects. 
             <br/>Check <a href="https://behance.net/ahmathmusharraf" className="text-white underline hover:text-secondary focus:outline-none focus:text-secondary focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm" aria-label="View creative works on Behance">Behance</a> for creative works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {SOFTWARE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              role="listitem"
              tabIndex={0}
              {...({
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1 }
              } as any)}
              className="group relative bg-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 focus-within:shadow-2xl focus-within:shadow-primary/20"
            >
              <div className="h-64 bg-slate-700 relative overflow-hidden">
                {/* Project Image or Abstract BG */}
                {project.image ? (
                   <>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 group-focus:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
                   </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 group-hover:scale-110 group-focus:scale-110 transition-transform duration-700" aria-hidden="true"></div>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-slate-900 to-slate-900" aria-hidden="true"></div>
                        
                        {/* Center Icon fallback */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 group-focus:bg-primary/20 group-focus:border-primary/50 transition-all duration-300">
                                <FolderGit2 size={40} className="text-slate-400 group-hover:text-white group-focus:text-white transition-colors" />
                            </div>
                        </div>
                    </>
                )}

                {/* Overlay on Hover/Focus */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github || "#"} 
                    onClick={(e) => !project.github && e.preventDefault()} 
                    target={project.github ? "_blank" : undefined}
                    rel={project.github ? "noopener noreferrer" : undefined}
                    aria-label={`View source code for ${project.title}`}
                    title="View Source Code on GitHub"
                    className="p-3 bg-white rounded-full text-primary hover:bg-slate-100 transition-colors transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900"
                  >
                    <Github size={24} aria-hidden="true" />
                  </a>
                  <a 
                    href={project.link || "#"} 
                    onClick={(e) => !project.link && e.preventDefault()} 
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    aria-label={`View live demo for ${project.title}`}
                    title="View Live Demo"
                    className="p-3 bg-slate-900 rounded-full text-white hover:bg-black transition-colors transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0 duration-300 delay-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-slate-900"
                  >
                    <ArrowUpRight size={24} aria-hidden="true" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary group-focus:border-primary group-focus:text-primary transition-colors" aria-hidden="true">
                  <span className="font-mono font-bold text-lg">{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary group-focus:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-xs text-slate-300 group-hover:border-primary/30 group-focus:border-primary/30 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <motion.a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-full font-bold overflow-hidden border border-white/5 hover:border-primary/50 shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900"
                aria-label="View my GitHub profile"
            >
                {/* Background Fill Animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                
                <span className="relative z-10">View GitHub Profile</span>
                
                {/* Arrow Animation */}
                <motion.div
                    className="relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.div>
            </motion.a>
        </div>

        <div className="mt-12 text-center md:hidden">
          <p className="text-slate-400 mb-4">See my creative portfolio</p>
          <a 
            href="https://behance.net/ahmathmusharraf" 
            className="inline-block px-6 py-2 border border-slate-600 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-slate-900"
            aria-label="View my creative portfolio on Behance"
          >
            View Behance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;