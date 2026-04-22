
import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial, VisualWork } from './types';
import { 
  Palette, 
  Linkedin, 
  Mail, 
  Instagram, 
  Github, 
  GraduationCap, 
  Code, 
  Zap, 
  Car, 
  Building2, 
  Briefcase, 
  Megaphone, 
  Focus, 
  Workflow, 
  Stethoscope, 
  Camera, 
  Video, 
  Cpu, 
  Brain, 
  Layers 
} from 'lucide-react';

/**
 * EDIT THIS SECTION TO CHANGE YOUR MAIN INFO
 */
export const PERSONAL_INFO = {
  name: "Ahmath Musharraf",
  roles: [
    "Multimedia Architect",
    "Automotive Brand Lead",
    "Real Estate Cinematographer",
    "Web Engineering Specialist",
    "Digital Strategy Mentor"
  ],
  location: "Dubai, United Arab Emirates",
  nationality: "Sri Lankan",
  email: "ahmathmusharraf@gmail.com",
  phone: "+971 58146 2540",
  secondaryPhone: "+94 76 776 5080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf",
  portfolio: "ahmathmusharraf.vercel.app",
  
  summary: "Results-driven Multimedia Architect with over 5 years of international experience across the UAE and GCC markets. Expert in bridging high-end cinematic production with technical web engineering to drive measurable business growth. Proven track record in scaling luxury automotive brands, healthcare groups, and real estate portfolios through data-backed visual storytelling and conversion-optimized digital ecosystems.",
  
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",

  // PATH TO YOUR REAL CV
  cvUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
};

export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} | Global Creative Lead & Multimedia Architect`,
  description: "Specializing in High-End Real Estate Cinematography, Automotive Branding, and Performance Web Architecture for the Dubai Luxury Sector.",
  resumeUrl: PERSONAL_INFO.cvUrl,
};

/**
 * EDIT YOUR WORK EXPERIENCE HERE
 * All entries have exactly 4 high-impact points.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Visual Lead & Brand Architect",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2024 - Present",
    website: "https://alkhateeb.ae/",
    description: [
      "Orchestrating the digital visual transformation for GCC’s premier automotive accessories group, managing creative assets for a multi-million AED brand portfolio across the UAE.",
      "Spearheading high-bitrate cinematic 4K production and art direction for flagship Toyota LC300 and Lexus LX600 campaigns, amplifying regional brand visibility with 1M+ organic social impressions.",
      "Engineering high-performance UI/UX frameworks for corporate e-commerce portals, optimizing user navigation and increasing online conversion rates by 18%.",
      "Leading the end-to-end technical production pipeline, implementing advanced color science workflows in DaVinci Resolve for global lifestyle brand consistency."
    ]
  },
  {
    id: "2",
    role: "Senior Digital Strategist",
    company: "British College of Applied Studies (BCAS)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Aug 2025",
    website: "https://bcas.lk/",
    description: [
      "Conceptualized and deployed a data-driven recruitment funnel that yielded a 40% increase in student enrollment through targeted multi-channel digital strategies.",
      "Optimized enterprise SEO and web speed performance, securing top-3 rankings for high-intent academic keywords in a competitive South Asian education market.",
      "Managed a significant annual digital ad spend across Meta and Google ecosystems, achieving a consistent 4.5x ROAS through rigorous data analytics and A/B testing.",
      "Developed interactive digital brochures and virtual tour experiences that reduced physical inquiry processing time by 25% while improving lead quality."
    ]
  },
  {
    id: "3",
    role: "Lead Photographer & Cinematographer",
    company: "Studio Routes",
    location: "Colombo, Sri Lanka",
    period: "Feb 2023 - Aug 2025",
    website: "https://studioroutes.vercel.app/",
    description: [
      "Directed high-end photography and cinematic videography across diverse sectors including fashion editorials, corporate branding, luxury weddings, and professional portraits.",
      "Managed end-to-end visual production pipelines for elite clientele, delivering high-bitrate 4K content with specialized focus on architectural and commercial storytelling.",
      "Mastered intricate studio and on-location lighting setups for fashion and portrait sessions, ensuring consistent high-fidelity image quality across various challenging environments.",
      "Pioneered cinematic wedding and event coverage utilizing multi-cam operations, FPV drone perspectives, and DaVinci Resolve color science for premium emotional narratives."
    ]
  },
  {
    id: "4",
    role: "Digital Marketing & Brand Lead",
    company: "Dr. Jameel Memorial Hospital",
    location: "Sri Lanka",
    period: "2021 – 2023",
    description: [
      "Developed and executed the digital brand identity for the healthcare facility, modernizing the patient outreach program through content-driven trust building.",
      "Architected the hospital's appointment booking portal and web infrastructure, improving digital appointment acquisition by 35% through UX optimization.",
      "Managed production for a series of 'Expert Medical Insights' video campaigns, effectively positioning the hospital as a regional leader in specialized care.",
      "Analyzed patient demographic data to create hyper-targeted awareness campaigns for specialized medical wings, maximizing clinical operational efficiency."
    ]
  },
  {
    id: "5",
    role: "Lecturer - Interactive Multimedia & UX",
    company: "BCAS Campus",
    location: "Colombo, Sri Lanka",
    period: "Mar 2024 - Aug 2025",
    description: [
      "Delivering Pearson BTEC Level 5 HND modules in User Experience (UX) and Multimedia Design, focusing on industry-aligned prototyping and visual theory.",
      "Mentoring a cohort of 200+ students in advanced technical workflows including professional cinematography, lighting design, and full-stack React.js development.",
      "Designing a specialized curriculum for digital entrepreneurship, empowering students to build market-ready portfolios for the global creative economy.",
      "Facilitating hands-on masterclasses in DaVinci Resolve color grading and Adobe Creative Cloud, bridging the gap between academia and professional production standards."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "B.Sc (Hons) in Software Engineering",
    institution: "University of Solent - UK",
    location: "United Kingdom",
    period: "2023 – 2024"
  },
  {
    id: "e2",
    degree: "Higher National Diploma in Computing",
    institution: "Pearson - UK",
    location: "United Kingdom",
    period: "2020 – 2022"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Real Estate Media",
    icon: Building2,
    skills: ["Property Photography", "Real Estate Videography", "Virtual Tours", "Architectural & Interior Photography"]
  },
  {
    name: "Branding & Strategy",
    icon: Briefcase,
    skills: ["Brand Identity Development", "Market Positioning", "Campaign Strategy", "Brand Guidelines", "Storytelling Frameworks"]
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    skills: ["Social Media Marketing", "SEO & Growth Strategy", "Meta & Google Ads", "Analytics & Conversion Optimization", "Viral Content Strategy"]
  },
  {
    name: "Content Creation",
    icon: Video,
    skills: ["Content Strategy", "Short-form & Long-form Video", "Viral Content Planning", "Copywriting", "Social Media Content Production"]
  },
  {
    name: "Graphic Design",
    icon: Palette,
    skills: ["Adobe Creative Suite", "Visual Design", "Social Media Creatives", "Print & Digital Media", "Typography & Color Theory"]
  },
  {
    name: "Photography & Videography",
    icon: Camera,
    skills: ["Commercial Photography", "Event Coverage", "Product Shoots", "Cinematic Video Production", "Editing & Color Grading"]
  },
  {
    name: "Academic & Mentorship",
    icon: GraduationCap,
    skills: ["IT Lecturing", "Workshop Facilitation", "Student Mentoring", "Curriculum Support", "Technical Training"]
  },
  {
    name: "Web Development",
    icon: Code,
    skills: ["WordPress Development", "HTML / CSS / Javascript", "UI/UX Design", "SEO Optimization", "E-Commerce Development"]
  },
  {
    name: "AI & Automation",
    icon: Brain,
    skills: ["AI Content Generation", "Prompt Engineering", "Marketing Automation", "Chatbots", "AI Image & Video Tools", "Workflow Optimization"]
  },
  {
    name: "Management & Leadership",
    icon: Workflow,
    skills: ["Project Management", "Team Coordination", "Creative Direction", "Workflow Optimization", "Client Communication"]
  }
];

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: "Al Khateeb Digital Transformation",
    description: "Re-engineered visual assets and web UI for a leading GCC automotive enterprise to drive e-commerce growth.",
    tags: ["Next.js", "Tailwind", "UX"],
    link: "https://alkhateeb.ae/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Studio Routes Media Engine",
    description: "Cloud-optimized media delivery platform for high-bitrate luxury real estate visual assets.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://studioroutes.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  }
];

export const VISUAL_WORKS: VisualWork[] = [
  { 
    id: "v1", 
    title: "Dubai Penthouse Cinematic", 
    category: "Videography", 
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    aspectRatio: '16:9'
  },
  { 
    id: "v2", 
    title: "Lexus LX600 Identity", 
    category: "Reels", 
    imageUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    aspectRatio: '9:16'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: "Instagram", url: "https://instagram.com/ahmath_musharraf", icon: Instagram },
  { name: "GitHub", url: "https://github.com/ahmathmusharraf", icon: Github },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const LANGUAGES = ["English (Professional)", "Tamil (Native)", "Sinhala (Native)", "Malayalam (Conversational)"];

export const CERTIFICATIONS = [
  "Meta Certified Creative Strategy Professional",
  "Google Ads Search Certification", 
  "Adobe Certified Professional - Video Design",
  "HubSpot Content Marketing Strategy"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Visual Lead",
    role: "Senior Director",
    company: "Al Khateeb Global",
    quote: "Ahmath combines a rare cinematic eye with technical rigor. His ability to modernize a brand's visual language is unmatched in our sector."
  }
];
