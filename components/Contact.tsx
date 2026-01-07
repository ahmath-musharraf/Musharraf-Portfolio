import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, ArrowRight, Send, Flag } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const phoneNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `*New Inquiry from Portfolio Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-10 border-t border-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">

          {/* Contact Info & Social Badge */}
          <div className="lg:w-5/12 space-y-10">
            <div>
              <span className="text-secondary font-mono text-sm tracking-widest uppercase">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Let's Work Together</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                    <p className="text-sm text-slate-500 mb-1">Mail me at</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">{PERSONAL_INFO.email}</p>
                </div>
              </a>

               <div className="flex items-start gap-6 p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform mt-1">
                  <Phone size={22} />
                </div>
                <div>
                    <p className="text-sm text-slate-500 mb-2">Call me at</p>
                    <div className="flex flex-col gap-2">
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 group/phone">
                            {PERSONAL_INFO.phone}
                            <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded uppercase group-hover/phone:bg-primary/20 group-hover/phone:text-primary transition-colors">UAE</span>
                        </a>
                        {PERSONAL_INFO.secondaryPhone && (
                            <a href={`tel:${PERSONAL_INFO.secondaryPhone}`} className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 group/phone">
                                {PERSONAL_INFO.secondaryPhone}
                                <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded uppercase group-hover/phone:bg-primary/20 group-hover/phone:text-primary transition-colors">SL</span>
                            </a>
                        )}
                    </div>
                </div>
              </div>
              
               <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                    <p className="text-sm text-slate-500 mb-1">Based in</p>
                    <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>

               <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <Flag size={22} />
                </div>
                <div>
                    <p className="text-sm text-slate-500 mb-1">Nationality</p>
                    <p className="text-white font-medium">{PERSONAL_INFO.nationality}</p>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.filter(link => ['GitHub', 'Behance', 'Instagram'].includes(link.name)).map((link) => (
                 <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-slate-900/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-primary/50 hover:scale-110 transition-all duration-300 group shadow-lg"
                    aria-label={link.name}
                  >
                    <link.icon size={24} className="group-hover:text-primary transition-colors" />
                  </a>
              ))}
            </div>

            {/* LinkedIn Creative Card */}
            <div className="relative p-6 rounded-2xl bg-[#0077b5] overflow-hidden group shadow-xl shadow-blue-900/20 transform hover:-translate-y-1 transition-transform duration-300">
                 <div className="absolute top-0 right-0 p-16 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                              <Linkedin className="text-white" size={24} />
                            </div>
                            <div>
                              <span className="text-white font-bold block leading-tight">LinkedIn</span>
                              <span className="text-blue-100 text-xs">Professional Profile</span>
                            </div>
                        </div>
                        <a 
                            href="https://linkedin.com/in/ahmathmusharraf" 
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-white text-[#0077b5] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Connect <ExternalLink size={14} />
                        </a>
                    </div>
                    <p className="text-white/90 text-sm mb-5 font-light leading-relaxed">
                        Join my network for the latest updates on digital marketing trends, creative projects, and industry insights.
                    </p>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-black/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                        Open to Opportunities
                    </div>
                 </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                 <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm text-slate-400 ml-1 font-medium">Name</label>
                        <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700"
                        placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-slate-400 ml-1 font-medium">Email</label>
                        <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700"
                        placeholder="john@example.com"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-slate-400 ml-1 font-medium">Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700"
                        placeholder="Project Inquiry"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-slate-400 ml-1 font-medium">Message</label>
                    <textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700 resize-none"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 group">
                    Send to WhatsApp
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                </form>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                title={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;