
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const FloatingPortfolioButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[45] hidden lg:block"
    >
      <a 
        href="#visuals"
        className="group flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 border-r-0 rounded-l-2xl p-4 shadow-2xl hover:bg-primary transition-all duration-500"
      >
        <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white/80 transition-colors">Visual</span>
            <span className="text-sm font-bold text-white uppercase tracking-tighter">Portfolio</span>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all">
          <Camera size={20} className="animate-pulse" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-l-2xl"></div>
      </a>
    </motion.div>
  );
};

export default FloatingPortfolioButton;
