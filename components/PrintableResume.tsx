import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, SOFTWARE_PROJECTS, LANGUAGES, CERTIFICATIONS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const PrintableResume: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 p-8 md:p-12 max-w-[21cm] mx-auto font-sans shadow-2xl my-8 print:shadow-none print:m-0 print:max-w-none print:p-0">
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
                <Mail size={14} /> {PERSONAL_INFO.email}
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
                    <Linkedin size={14} /> linkedin.com/in/ahmathmusharraf
                 </div>
             ))}
             <div className="flex items-center gap-2">
                <Globe size={14} /> ahmathmusharraf.vercel.app
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
                <div key={exp.id}>
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
       <section className="mb-6">
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
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
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
       <section>
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
       
       <style>{`
          @media print {
            body { background: white; }
            .print\\:hidden { display: none !important; }
            .print\\:shadow-none { box-shadow: none !important; }
            .print\\:m-0 { margin: 0 !important; }
            .print\\:max-w-none { max-width: none !important; }
            .print\\:p-0 { padding: 0 !important; }
          }
       `}</style>
    </div>
  );
};

export default PrintableResume;