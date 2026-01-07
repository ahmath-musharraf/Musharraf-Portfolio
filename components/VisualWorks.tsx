
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VISUAL_WORKS } from '../constants';
import { Camera, Video, ExternalLink, Play, Palette, Layout, Sparkles, Download, X, Smartphone, Building2, Car, Stethoscope, Briefcase, GraduationCap } from 'lucide-react';
import { VisualWork } from '../types';

const VisualWorks: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VisualWork | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    { name: 'All', icon: Sparkles },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Automotive', icon: Car },
    { name: 'Social Reels', icon: Smartphone },
    { name: 'Mentorship', icon: GraduationCap },
    { name: 'Healthcare', icon: Stethoscope },
    { name: 'Branding', icon: Briefcase },
  ];

  const filteredWorks = VISUAL_WORKS.filter(work => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Real Estate') return work.title.toLowerCase().includes('villa') || work.title.toLowerCase().includes('penthouse') || work.title.toLowerCase().includes('architectural');
    if (activeFilter === 'Automotive') return work.category === 'Reels' || work.title.toLowerCase().includes('cruiser') || work.title.toLowerCase().includes('lexus') || work.title.toLowerCase().includes('off-road');
    if (activeFilter === 'Social Reels') return work.category === 'Reels';
    if (activeFilter === 'Mentorship') return work.title.toLowerCase().includes('lecturing') || work.title.toLowerCase().includes('workshop') || work.title.toLowerCase().includes('mentorship');
    if (activeFilter === 'Healthcare') return work.title.toLowerCase().includes('medical') || work.title.toLowerCase().includes('hospital');
    if (activeFilter === 'Branding') return work.category === 'Photography' || work.title.toLowerCase().includes('corporate');
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Photography': return <Camera size={16} />;
      case 'Videography': return <Video size={16} />;
      case 'Reels': return <Smartphone size={16} />;
      case 'Graphic Design': return <Layout size={16} />;
      case 'Branding': return <Palette size={16} />;
      default: return <Camera size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Photography': return 'bg-primary/20 text-primary';
      case 'Videography': return 'bg-secondary/20 text-secondary';
      case 'Reels': return 'bg-indigo-500/20 text-indigo-400';
      case 'Graphic Design': return 'bg-pink-500/20 text-pink-400';
      case 'Branding': return 'bg-amber-500/20 text-amber-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <section id="visuals" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <span className="text-secondary font-mono text-sm tracking-widest uppercase text-glow px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              Creative Direction
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 text-glow font-display">Specialized Multimedia</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(0,182,212,0.5)]"></div>
        </motion.div>

        {/* Filter Navigation - Expanded for Mentorship */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 ${
                activeFilter === filter.name
                  ? 'bg-slate-800 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                  : 'bg-slate-900/50 border-white/5 hover:border-white/10 text-slate-400'
              }`}
            >
              <filter.icon 
                size={18} 
                className={activeFilter === filter.name ? 'text-amber-400' : 'text-indigo-400 opacity-60'} 
              />
              <span className={`text-sm font-medium ${activeFilter === filter.name ? 'text-white' : 'text-slate-500'}`}>
                {filter.name}
              </span>
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-lg cursor-pointer"
                onClick={() => work.videoUrl && setSelectedVideo(work)}
              >
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                {work.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                     <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Play size={20} fill="currentColor" />
                     </div>
                  </div>
                )}

                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                     <div className={`${getCategoryColor(work.category)} backdrop-blur-md p-1.5 rounded-lg`}>
                         {getCategoryIcon(work.category)}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                         {work.category}
                     </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight tracking-tight">{work.title}</h3>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                      <button className="flex items-center gap-2 text-[10px] font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white/20 transition-all border border-white/5 uppercase tracking-tighter">
                          {work.videoUrl ? <Play size={12} fill="currentColor" /> : <ExternalLink size={12} />}
                          {work.videoUrl ? 'Watch Now' : 'Explore'}
                      </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 md:p-8"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`relative w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden bg-black ${
                  selectedVideo.aspectRatio === '9:16' ? 'max-w-[400px] aspect-[9/16]' : 'aspect-video'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-1 block">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                    href="https://behance.net/ahmathmusharraf" 
                    target="_blank"
                    className="flex items-center gap-4 pl-3 pr-6 py-2.5 bg-white text-slate-950 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                    <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white">
                      <Camera size={18} />
                    </div>
                    <span className="text-sm">View Full Design Portfolio on Behance</span>
                    <Sparkles size={16} className="text-[#06b6d4] ml-auto md:ml-0" />
                </a>

                <a 
                    href="/Multimedia_Portfolio_Ahmath.pdf" 
                    download
                    className="flex items-center gap-4 pl-3 pr-8 py-2.5 bg-slate-900/40 text-white border border-slate-800 rounded-full font-bold transition-all hover:bg-slate-900/60 hover:border-slate-700 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                    <div className="w-9 h-9 bg-slate-950/50 rounded-lg flex items-center justify-center border border-white/5">
                        <Download size={18} />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">Download Design Folio</span>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualWorks;
