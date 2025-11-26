import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { ChevronDown, Sparkles, Star, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Motion values for mouse tracking (avoids re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax elements
  const springConfig = { damping: 25, stiffness: 150 };
  
  // Parallax calculations
  const blob1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const blob1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
  
  const blob2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const blob2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);
  
  const blob3X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const blob3Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

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

  // Rotating roles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 lg:pt-0">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        {/* Reacting Grid */}
        <motion.div 
            className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-20"
            style={{ 
                perspective: 1000,
                rotateX: gridRotateX,
                rotateY: gridRotateY,
                scale: 1.1
            } as any}
        />

        {/* Mouse Spotlight */}
        <motion.div 
            className="absolute rounded-full bg-primary/5 blur-[100px] pointer-events-none"
            style={{
                width: '600px',
                height: '600px',
                left: '50%',
                top: '50%',
                x: useTransform(mouseX, [-0.5, 0.5], [-300, 300]),
                y: useTransform(mouseY, [-0.5, 0.5], [-300, 300]),
                marginLeft: -300,
                marginTop: -300,
            }}
        />

        {/* Animated Blobs with Parallax */}
        <motion.div 
            className="absolute top-0 -left-4 pointer-events-none"
            style={{ x: blob1X, y: blob1Y }}
        >
            <div className="w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        </motion.div>
        
        <motion.div 
            className="absolute top-0 -right-4 pointer-events-none"
            style={{ x: blob2X, y: blob2Y }}
        >
            <div className="w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
        
        <motion.div 
            className="absolute -bottom-8 left-20 pointer-events-none"
            style={{ x: blob3X, y: blob3Y }}
        >
            <div className="w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            {...({
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 }
            } as any)}
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={14} />
              <span>Open to Work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Typing/Cycling Role Effect */}
            <div className="h-12 lg:h-16 mb-6 overflow-hidden">
               <motion.p 
                key={roleIndex}
                className="text-2xl lg:text-3xl text-slate-300 font-light"
                {...({
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.5 }
                } as any)}
              >
                I am a <span className="font-semibold text-white">{PERSONAL_INFO.roles[roleIndex]}</span>
              </motion.p>
            </div>
            
            <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed text-lg">
              Blending design aesthetics with data-driven marketing strategies to achieve measurable business growth in the Gulf region.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95"
              >
                Let's Collaborate
              </a>
              
              {/* Web CV Button */}
              {onOpenResume && (
                  <button 
                    onClick={onOpenResume}
                    className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-medium hover:bg-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <FileText size={20} className="group-hover:text-secondary transition-colors" />
                    <span>View Web CV</span>
                  </button>
              )}
            </div>

            <div className="flex gap-6 mt-12 justify-center lg:justify-start items-center">
              <span className="h-px w-12 bg-slate-700"></span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-all transform hover:scale-110 hover:text-secondary"
                  title={link.name}
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          {...({
            initial: { opacity: 0, scale: 0.8, rotate: 5 },
            animate: { opacity: 1, scale: 1, rotate: 0 },
            transition: { duration: 0.8, delay: 0.2 }
          } as any)}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Creative Frame */}
            <motion.div 
              className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-800 shadow-2xl transition-all duration-500"
              whileHover={{ rotate: 0, scale: 1.02 }}
              style={{ rotate: 3 } as any}
            >
               {/* Using a placeholder since we don't have the user's actual image file hosted */}
               <img 
                src="https://raw.githubusercontent.com/ahmath-musharraf/Musharraf-Portfolio/refs/heads/main/MusharrafImage.jpg" 
                alt="Ahmath Musharraf" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 text-left">
                <p className="text-xs font-mono text-secondary mb-1">Based in</p>
                <p className="text-white font-bold">{PERSONAL_INFO.location}</p>
                <p className="text-xs font-mono text-secondary mt-2 mb-1">Nationality</p>
                <p className="text-white font-bold">{PERSONAL_INFO.nationality}</p>
              </div>
            </motion.div>

            {/* Decorative Element - Experience Badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                <Star size={20} fill="currentColor" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-white leading-none">5+</p>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Years Exp</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        {...({
          animate: { y: [0, 10, 0] },
          transition: { repeat: Infinity, duration: 2 }
        } as any)}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
