import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, SOFTWARE_PROJECTS, LANGUAGES, CERTIFICATIONS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const BehanceIcon = ({ size = 14, className = "" }: { size?: number, className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        fill="currentColor" 
        className={className}
    >
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
    </svg>
);

const PrintableResume: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 p-8 md:p-12 max-w-[21cm] mx-auto font-sans shadow-2xl my-8 print:shadow-none print:m-0 print:w-full print:max-w-none print:p-0">
       <style>{`
          @media print {
            @page {
              margin: 1cm;
              size: auto;
            }
            body {
              background-color: white !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            /* Ensure links are black */
            a { color: #0f172a !important; text-decoration: none !important; }
          }
       `}</style>

       {/* Header */}
       <header className="border-b-2 border-slate-800 pb-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-2">{PERSONAL_INFO.name}</h1>
          <p className="text-sm md:text-base font-bold text-slate-600 mb-4 max-w-2xl leading-relaxed uppercase">
            {PERSONAL_INFO.roles.join(" • ")}
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
             <div className="flex items-center gap-2">
                <MapPin size={14} /> {PERSONAL_INFO.location}
             </div>
             <div className="flex items-center gap-2">
                <Mail size={14} /> 
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
             </div>
             <div className="flex items-center gap-2">
                <Phone size={14} /> {PERSONAL_INFO.phone}
             </div>
             {PERSONAL_INFO.secondaryPhone && (
                <div className="flex items-center gap-2">
                    <Phone size={14} /> {PERSONAL_INFO.secondaryPhone} (SL)
                </div>
             )}
             {SOCIAL_LINKS.filter(l => l.name === "LinkedIn").map(l => (
                 <div key={l.name} className="flex items-center gap-2">
                    <Linkedin size={14} /> 
                    <a href={l.url} target="_blank" rel="noreferrer" className="hover:underline">
                        linkedin.com/in/ahmathmusharraf
                    </a>
                 </div>
             ))}
             {SOCIAL_LINKS.filter(l => l.name === "Behance").map(l => (
                 <div key={l.name} className="flex items-center gap-2">
                    <BehanceIcon size={14} /> 
                    <a href={l.url} target="_blank" rel="noreferrer" className="hover:underline">
                        behance.net/ahmathmusharraf
                    </a>
                 </div>
             ))}
             <div className="flex items-center gap-2">
                <Globe size={14} /> 
                <a href="https://ahmathmusharraf.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">
                    ahmathmusharraf.vercel.app
                </a>
             </div>
          </div>
       </header>

       {/* Summary */}
       <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-3 pb-1">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-700 text-justify">
             {PERSONAL_INFO.summary}
          </p>
       </section>

       {/* Experience */}
       <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-4 pb-1">Professional Experience</h2>
          <div className="space-y-4">
             {EXPERIENCES.map(exp => (
                <div key={exp.id} className="break-inside-avoid">
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-800">{exp.role}</h3>
                      <span className="text-xs font-bold text-slate-500 whitespace-nowrap">{exp.period}</span>
                   </div>
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">{exp.company}</span>
                      <span className="text-xs text-slate-500 italic">{exp.location}</span>
                   </div>
                   <ul className="list-disc list-outside ml-4 text-xs space-y-1 text-slate-700">
                      {exp.description.map((point, i) => (
                         <li key={i} className="pl-1">{point}</li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>
       </section>

       {/* Education */}
       <section className="mb-6 break-inside-avoid">
          <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-4 pb-1">Education</h2>
          <div className="space-y-3">
             {EDUCATION.map(edu => (
                <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-slate-800 text-sm">{edu.degree}</h3>
                        <span className="text-xs font-bold text-slate-500">{edu.period}</span>
                    </div>
                    <p className="text-xs text-slate-600">{edu.institution} - {edu.location}</p>
                </div>
             ))}
          </div>
       </section>

       {/* Skills & Certs Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 break-inside-avoid">
          <section>
              <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-3 pb-1">Technical Skills</h2>
              <div className="space-y-2">
                  {SKILL_CATEGORIES.map(cat => (
                      <div key={cat.name}>
                          <span className="font-bold text-xs text-slate-800 block mb-1">{cat.name}:</span>
                          <p className="text-xs text-slate-600 leading-relaxed">
                              {cat.skills.join(", ")}
                          </p>
                      </div>
                  ))}
              </div>
          </section>

          <section>
               <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-3 pb-1">Certifications & Languages</h2>
               <div className="mb-4">
                  <span className="font-bold text-xs text-slate-800 block mb-1">Certifications:</span>
                  <ul className="list-disc list-inside text-xs text-slate-600">
                      {CERTIFICATIONS.map(c => <li key={c}>{c}</li>)}
                  </ul>
               </div>
               <div>
                  <span className="font-bold text-xs text-slate-800 block mb-1">Languages:</span>
                  <p className="text-xs text-slate-600">{LANGUAGES.map(l => l.split(' - ')[0]).join(", ")}</p>
               </div>
          </section>
       </div>
       
       {/* Projects */}
       <section className="break-inside-avoid">
          <h2 className="text-lg font-bold text-blue-700 uppercase border-b border-slate-300 mb-3 pb-1">Software Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {SOFTWARE_PROJECTS.map(proj => (
                 <div key={proj.title}>
                     <h3 className="font-bold text-xs text-slate-800">{proj.title}</h3>
                     <p className="text-xs text-slate-600">{proj.description}</p>
                 </div>
             ))}
          </div>
       </section>
    </div>
  );
};

export default PrintableResume;