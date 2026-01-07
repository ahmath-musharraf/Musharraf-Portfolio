
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Sparkles, Star, FileText, Building2, Car, Briefcase, GraduationCap, Megaphone, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  
  const blob1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const blob1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
  
  const blob2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const blob2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);
  
  const gridRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const gridRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
       const { innerWidth, innerHeight } = window;
       const x = (e.clientX / innerWidth) - 0.5;
       const y = (e.clientY / innerHeight) - 0.5;
       mouseX.set(x);
       mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const specialties = [
    { label: 'Real Estate', icon: Building2, color: 'text-amber-400' },
    { label: 'Automotive', icon: Car, color: 'text-indigo-400' },
    { label: 'Digital Strategy', icon: Megaphone, color: 'text-emerald-400' },
    { label: 'Social Reels', icon: Smartphone, color: 'text-purple-400' },
    { label: 'Teaching', icon: GraduationCap, color: 'text-rose-400' },
    { label: 'Management', icon: Briefcase, color: 'text-cyan-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-32 lg:pt-0">
      
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <motion.div 
            className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-20"
            style={{ 
                perspective: 1000,
                rotateX: gridRotateX,
                rotateY: gridRotateY,
                scale: 1.1
            } as any}
        />

        <motion.div 
            className="absolute top-0 -left-4 pointer-events-none"
            style={{ x: blob1X, y: blob1Y }}
        >
            <div className="w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        </motion.div>
        
        <motion.div 
            className="absolute top-0 -right-4 pointer-events-none"
            style={{ x: blob2X, y: blob2Y }}
        >
            <div className="w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={14} />
              <span>Premium Multimedia Specialist in Dubai</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-amber-200 to-indigo-400 bg-300% animate-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            <div className="h-12 lg:h-16 mb-6 overflow-hidden">
               <motion.p 
                key={roleIndex}
                className="text-2xl lg:text-3xl text-slate-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                Expertise in <span className="font-semibold text-white">{PERSONAL_INFO.roles[roleIndex]}</span>
              </motion.p>
            </div>
            
            <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed text-lg">
              Architecting cinematic property narratives, automotive visual systems, and data-driven marketing strategies for the Dubai luxury market.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-indigo-500 text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/25 hover:scale-105"
              >
                Book a Consultation
              </a>
              
              {onOpenResume && (
                  <button 
                    onClick={onOpenResume}
                    className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-medium hover:bg-slate-700 transition-all flex items-center gap-2 shadow-lg group"
                  >
                    <FileText size={20} className="group-hover:text-amber-400 transition-colors" />
                    <span>View Resume</span>
                  </button>
              )}
            </div>

            {/* Specialties Pill Section */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {specialties.map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/50 border border-white/5 backdrop-blur-md shadow-xl transition-all hover:border-white/10 group">
                   <spec.icon size={18} className={`${spec.color} group-hover:scale-110 transition-transform`} />
                   <span className="text-sm font-medium text-slate-300">{spec.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-amber-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
               <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 text-left">
                <p className="text-white font-bold text-lg">{PERSONAL_INFO.location}</p>
                <p className="text-amber-400 text-sm font-medium">{PERSONAL_INFO.nationality}</p>
              </div>
            </div>

            <motion.div 
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-amber-400 rounded-full flex items-center justify-center text-white">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white leading-none">5+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years Exp</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
