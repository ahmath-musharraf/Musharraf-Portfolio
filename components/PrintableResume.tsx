
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
          padding: 15mm 20mm;
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
          text-align: center;
          margin-bottom: 12pt;
          border-bottom: 2pt solid #111827;
          padding-bottom: 10pt;
        }
        .ats-name { 
          font-size: 24pt; 
          font-weight: 800; 
          letter-spacing: -0.02em;
          margin-bottom: 2pt;
          color: #000;
        }
        .ats-roles {
          font-size: 10pt;
          font-weight: 600;
          color: #4b5563;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 6pt;
        }
        .ats-contact {
          font-size: 9pt;
          color: #374151;
        }
        .ats-contact a {
          color: #111827;
          text-decoration: none;
          font-weight: 500;
        }
        .ats-section-title {
          font-size: 11pt;
          font-weight: 700;
          text-transform: uppercase;
          background: #f3f4f6;
          padding: 3pt 8pt;
          margin-top: 14pt;
          margin-bottom: 6pt;
          letter-spacing: 0.05em;
          display: block;
          border-left: 3pt solid #111827;
        }
        .ats-summary {
          font-size: 9.5pt;
          line-height: 1.5;
          margin-bottom: 10pt;
          color: #374151;
          text-align: justify;
        }
        .ats-skills-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8pt;
          margin-bottom: 10pt;
        }
        .ats-skill-group {
          font-size: 9pt;
        }
        .ats-skill-group strong {
          display: block;
          font-size: 8.5pt;
          color: #111827;
          margin-bottom: 1pt;
        }
        .ats-exp-item {
          margin-bottom: 10pt;
        }
        .ats-exp-header {
          display: flex;
          justify-content: space-between;
          font-size: 10pt;
          font-weight: 700;
          color: #000;
        }
        .ats-exp-sub {
          display: flex;
          justify-content: space-between;
          font-size: 9pt;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 3pt;
        }
        .ats-bullet-list {
          margin: 0 0 8pt 15pt;
          padding: 0;
          list-style-type: disc;
          font-size: 9pt;
          color: #374151;
        }
        .ats-bullet-list li {
          margin-bottom: 2pt;
          padding-left: 3pt;
        }
        .ats-edu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6pt;
        }
        .ats-footer {
          margin-top: auto;
          text-align: center;
          font-size: 8pt;
          color: #9ca3af;
          border-top: 1px solid #e5e7eb;
          padding-top: 10pt;
        }
      `}</style>

      {/* PAGE 1: Profile, Skills, and Recent Experience */}
      <div className="cv-page">
        <div className="ats-header">
          <div className="ats-name">{PERSONAL_INFO.name}</div>
          <div className="ats-roles">{PERSONAL_INFO.roles.slice(0, 3).join(" • ")}</div>
          <div className="ats-contact">
            {PERSONAL_INFO.location} | {PERSONAL_INFO.phone} | <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a><br/>
            LinkedIn: linkedin.com/in/ahmathmusharraf | Portfolio: ahmathmusharraf.vercel.app
          </div>
        </div>

        <div className="ats-section-title">Professional Summary</div>
        <div className="ats-summary">{PERSONAL_INFO.summary}</div>

        <div className="ats-section-title">Core Competencies & Technology Stack</div>
        <div className="ats-skills-container">
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.name} className="ats-skill-group">
              <strong>{cat.name.toUpperCase()}</strong>
              {cat.skills.join(", ")}
            </div>
          ))}
        </div>

        <div className="ats-section-title">Professional Experience</div>
        <div className="space-y-4">
          {EXPERIENCES.slice(0, 2).map(exp => (
            <div key={exp.id} className="ats-exp-item">
              <div className="ats-exp-header">
                <span>{exp.role}</span>
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

      {/* PAGE 2: Remaining Experience, Education, Certs */}
      <div className="cv-page">
        <div className="ats-section-title">Professional Experience (Continued)</div>
        <div className="space-y-4">
          {EXPERIENCES.slice(2).map(exp => (
            <div key={exp.id} className="ats-exp-item">
              <div className="ats-exp-header">
                <span>{exp.role}</span>
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

        <div className="ats-section-title">Educational Credentials</div>
        <div className="ats-edu-grid">
          {EDUCATION.map(edu => (
            <div key={edu.id} className="ats-exp-item">
              <div className="ats-exp-header">
                <span>{edu.degree}</span>
                <span>{edu.period}</span>
              </div>
              <div className="ats-exp-sub">
                <span>{edu.institution}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="ats-section-title">Certifications & Languages</div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ul className="ats-bullet-list" style={{marginLeft: '10pt'}}>
              {CERTIFICATIONS.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
          <div className="text-[9pt] pt-1">
            <strong className="block mb-1">LANGUAGES:</strong>
            {LANGUAGES.join(" • ")}
            <div className="mt-4 text-gray-500 italic">
              Verified references and professional portfolio available upon request.
            </div>
          </div>
        </div>

        <div className="ats-footer">{PERSONAL_INFO.name} | Curriculum Vitae | Page 2</div>
      </div>
    </div>
  );
};

export default PrintableResume;
