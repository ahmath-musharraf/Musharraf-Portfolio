
import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial, VisualWork } from './types';
import { 
  Palette, 
  Linkedin, 
  Mail, 
  Instagram,
  Github,
  GraduationCap,
  Globe,
  Smartphone,
  Code,
  Zap,
  Car,
  Sparkles,
  Building2,
  Briefcase,
  Megaphone,
  PenTool,
  Trophy,
  Focus,
  Workflow
} from 'lucide-react';

export const SITE_CONFIG = {
  title: "Ahmath Musharraf | Global Creative Lead & Multimedia Architect",
  description: "Specializing in High-End Real Estate Cinematography, Automotive Branding, and Performance Web Architecture for the Dubai Luxury Sector.",
  keywords: "Dubai Creative Director, Luxury Real Estate Videographer, Automotive Content Strategy, Next.js Developer Dubai, Brand Architect",
  resumeUrl: "#" 
};

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
  linkedin: "linkedin.com/in/ahmathmusharraf",
  portfolio: "ahmathmusharraf.vercel.app",
  
  summary: "Results-driven Multimedia Architect with over 5 years of international experience across the UAE and GCC markets. Expert in bridging high-end cinematic production with technical web engineering to drive measurable business growth. Proven track record in scaling luxury automotive brands and real estate portfolios through data-backed visual storytelling and conversion-optimized digital ecosystems.",
  
  profileImage: "https://raw.githubusercontent.com/ahmath-musharraf/Musharraf-Portfolio/refs/heads/main/Musharraf.png" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/ahmathmusharraf", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/ahmathmusharraf", icon: Github },
  { name: "Behance", url: "https://behance.net/ahmathmusharraf", icon: Palette },
  { name: "Instagram", url: "https://instagram.com/ahmath_musharraf", icon: Instagram },
  { name: "Email", url: "mailto:ahmathmusharraf@gmail.com", icon: Mail },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Visual Lead & Brand Architect",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2024 - Present",
    website: "https://alkhateeb.ae/",
    description: [
      "Strategized and executed 360-degree visual identity for the GCC’s leading automotive accessories group, managing a multi-million AED brand portfolio.",
      "Produced cinematic 4K video campaigns for Land Cruiser 300 and Lexus LX600 lineages, achieving a 30% increase in social media engagement.",
      "Architected conversion-focused UI/UX frameworks for corporate digital platforms, reducing bounce rates by 15% through optimized user journeys.",
      "Managed end-to-end production pipelines including high-bitrate color grading, lighting design, and technical asset management."
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
      "Engineered an integrated content-marketing ecosystem that increased annual student enrollment by 40% via multi-channel digital funnels.",
      "Optimized web performance and SEO architecture, improving organic search visibility by 25% for high-intent academic keywords.",
      "Administered a $100k+ annual advertising budget across Meta, Google, and TikTok with an average ROAS of 4.5x.",
      "Collaborated with cross-functional teams to align regional brand messaging with international quality standards."
    ]
  },
  {
    id: "3",
    role: "Lecturer - Interactive Multimedia & UX",
    company: "British College of Applied Studies (BCAS)",
    location: "Colombo, Sri Lanka",
    period: "Mar 2024 - Aug 2025",
    description: [
      "Instructed Level 5 Higher National Diploma (HND) modules in User Experience (UX) and Professional Design Workflows.",
      "Mentored 200+ students in mastering industry-standard tools including DaVinci Resolve, Adobe Creative Cloud, and React.js.",
      "Designed curriculum focused on technical proficiency and commercial marketability in the global creative economy."
    ]
  },
  {
    id: "4",
    role: "Creative Director",
    company: "Studio Routes",
    location: "Sri Lanka / UAE",
    period: "Feb 2023 - Aug 2025",
    website: "https://studioroutes.vercel.app/",
    description: [
      "Directed cinematic cinematography for ultra-luxury real estate listings, facilitating property sales totaling over $5M.",
      "Developed a proprietary 'Social-First' visual framework for real estate agents, resulting in 1M+ organic views on vertical platforms."
    ]
  },
  {
    id: "5",
    role: "Multimedia Marketing Specialist",
    company: "Dr. Jameel Memorial Hospital",
    location: "Colombo, Sri Lanka",
    period: "Oct 2020 - Dec 2022",
    description: [
      "Spearheaded digital transformation of legacy healthcare branding, increasing online patient inquiries by 50%.",
      "Produced health-educational video content that amassed over 500k organic views and enhanced community trust."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "Bachelor of Science (Hons) in Software Engineering",
    institution: "University of Solent - UK",
    location: "United Kingdom",
    period: "2023 – 2024"
  },
  {
    id: "e2",
    degree: "BTEC Higher National Diploma in Computing",
    institution: "Pearson - UK",
    location: "United Kingdom",
    period: "2020 – 2022"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Visual Engineering",
    icon: Focus,
    skills: ["4K Cinematography", "DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects", "FPV Drone Ops", "Color Science"]
  },
  {
    name: "Strategic Branding",
    icon: Car,
    skills: ["Brand Architecture", "Luxury Market Strategy", "Performance Marketing", "Content Funnels", "Conversion Design"]
  },
  {
    name: "Full-Stack Development",
    icon: Code,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "SEO Architecture", "Core Web Vitals"]
  },
  {
    name: "Design Systems",
    icon: Workflow,
    skills: ["UI/UX Design", "Figma", "Wireframing", "Interaction Design", "Responsive Layouts", "Accessibility (A11y)"]
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
