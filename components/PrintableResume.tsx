
import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, LANGUAGES, CERTIFICATIONS } from '../constants';

const PrintableResume: React.FC = () => {
  return (
    <div className="mx-auto bg-neutral-200 print:bg-white print:p-0">
      <style>{`
        @media screen {
          .cv-page {
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            margin: 2rem auto;
          }
        }
        @media print {
          @page { 
            size: A4; 
            margin: 0; 
          }
          body { 
            background: white !important; 
            -webkit-print-color-adjust: exact; 
          }
          .cv-page { 
            box-shadow: none !important; 
            margin: 0 !important; 
            page-break-after: always;
            border: none !important;
          }
          .cv-page:last-child { 
            page-break-after: avoid; 
          }
        }
        /* ATS Optimized A4 Container */
        .cv-page {
          background: white;
          width: 210mm;
          height: 297mm;
          padding: 12mm 15mm;
          color: #111827;
          font-family: 'Inter', sans-serif;
          line-height: 1.4;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .ats-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12pt;
          border-bottom: 2pt solid #111827;
          padding-bottom: 12pt;
        }
        .header-left {
          flex: 1;
        }
        .header-right {
          text-align: right;
          font-size: 8pt;
          color: #374151;
          line-height: 1.6;
        }
        .ats-name { 
          font-size: 26pt; 
          font-weight: 900; 
          letter-spacing: -0.04em;
          margin-bottom: 0;
          color: #000;
          line-height: 1;
        }
        .ats-roles {
          font-size: 10pt;
          font-weight: 700;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 4pt;
        }
        .ats-section-title {
          font-size: 10.5pt;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4pt 0;
          margin-top: 12pt;
          margin-bottom: 8pt;
          letter-spacing: 0.1em;
          display: block;
          border-bottom: 1pt solid #e5e7eb;
          color: #111827;
        }
        .ats-summary {
          font-size: 9pt;
          line-height: 1.6;
          margin-bottom: 8pt;
          color: #374151;
          text-align: left;
        }
        .ats-skills-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10pt;
          margin-bottom: 8pt;
        }
        .ats-skill-group {
          font-size: 8.5pt;
          line-height: 1.4;
        }
        .ats-skill-group strong {
          display: block;
          font-size: 8pt;
          color: #000;
          margin-bottom: 2pt;
          border-left: 2pt solid #6366f1;
          padding-left: 4pt;
        }
        .ats-exp-item {
          margin-bottom: 10pt;
        }
        .ats-exp-header {
          display: flex;
          justify-content: space-between;
          font-size: 10pt;
          font-weight: 800;
          color: #000;
        }
        .ats-exp-sub {
          display: flex;
          justify-content: space-between;
          font-size: 9pt;
          font-weight: 600;
          color: #6366f1;
          margin-bottom: 2pt;
        }
        .ats-bullet-list {
          margin: 0 0 6pt 12pt;
          padding: 0;
          list-style-type: square;
          font-size: 8.5pt;
          color: #4b5563;
        }
        .ats-bullet-list li {
          margin-bottom: 1.5pt;
          padding-left: 2pt;
        }
        .ats-edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15pt;
        }
        .ats-footer {
          margin-top: auto;
          text-align: center;
          font-size: 7.5pt;
          color: #9ca3af;
          border-top: 1px solid #f3f4f6;
          padding-top: 8pt;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>

      {/* PAGE 1: Profile, Skills, and Top Experience */}
      <div className="cv-page">
        <div className="ats-header">
          <div className="header-left">
            <div className="ats-name">{PERSONAL_INFO.name}</div>
            <div className="ats-roles">{PERSONAL_INFO.roles.slice(0, 2).join(" | ")}</div>
          </div>
          <div className="header-right">
            <div>{PERSONAL_INFO.location}</div>
            <div>{PERSONAL_INFO.phone}</div>
            <div><a href={`mailto:${PERSONAL_INFO.email}`} style={{color: '#6366f1', fontWeight: 600}}>{PERSONAL_INFO.email}</a></div>
            <div>linkedin.com/in/ahmathmusharraf</div>
            <div>ahmathmusharraf.vercel.app</div>
          </div>
        </div>

        <div className="ats-section-title">Executive Summary</div>
        <div className="ats-summary">{PERSONAL_INFO.summary}</div>

        <div className="ats-section-title">Technical Expertise</div>
        <div className="ats-skills-container">
          {SKILL_CATEGORIES.slice(0, 6).map(cat => (
            <div key={cat.name} className="ats-skill-group">
              <strong>{cat.name.toUpperCase()}</strong>
              {cat.skills.join(", ")}
            </div>
          ))}
        </div>

        <div className="ats-section-title">Professional Chronicle</div>
        <div className="flex-1 overflow-hidden">
          {EXPERIENCES.slice(0, 2).map(exp => (
            <div key={exp.id} className="ats-exp-item">
              <div className="ats-exp-header">
                <span>{exp.role.toUpperCase()}</span>
                <span>{exp.period}</span>
              </div>
              <div className="ats-exp-sub">
                <span>{exp.company}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="ats-bullet-list">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ats-footer">{PERSONAL_INFO.name} | Curriculum Vitae | Page 1</div>
      </div>

      {/* PAGE 2: Education, Remaining Experience, Certs */}
      <div className="cv-page">
        <div className="ats-section-title">Professional Chronicle (Continued)</div>
        <div className="space-y-4">
          {EXPERIENCES.slice(2).map(exp => (
            <div key={exp.id} className="ats-exp-item">
              <div className="ats-exp-header">
                <span>{exp.role.toUpperCase()}</span>
                <span>{exp.period}</span>
              </div>
              <div className="ats-exp-sub">
                <span>{exp.company}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="ats-bullet-list">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ats-section-title">Educational Foundation</div>
        <div className="ats-edu-grid">
          {EDUCATION.map(edu => (
            <div key={edu.id} className="ats-exp-item">
              <div className="ats-exp-header" style={{fontSize: '9pt'}}>
                <span>{edu.degree}</span>
                <span style={{fontWeight: 600}}>{edu.period}</span>
              </div>
              <div className="ats-exp-sub" style={{fontSize: '8.5pt'}}>
                <span>{edu.institution}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="ats-section-title">Accreditations & Linguistics</div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <ul className="ats-bullet-list" style={{marginLeft: '10pt', fontSize: '8pt'}}>
              {CERTIFICATIONS.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
          <div className="text-[8pt] pt-0">
            <div className="mb-3">
              <strong className="block mb-1 text-[#6366f1]">LANGUAGES</strong>
              <span className="font-medium">{LANGUAGES.join(" • ")}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border-l-2 border-slate-200">
              <p className="text-slate-500 italic leading-relaxed">
                "Bridging the intersection of cinema and code to architect the next generation of visual brand identity."
              </p>
            </div>
          </div>
        </div>

        <div className="ats-footer">{PERSONAL_INFO.name} | Curriculum Vitae | Page 2</div>
      </div>
    </div>
  );
};

export default PrintableResume;
