
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
    "Photographer & Videographer",
    "Digital Marketing Specialist",
    "IT & Multimedia Lecturer",
    "Brand & Social Media Lead",
    "Graphic Design Expert"
  ],
  location: "Dubai, United Arab Emirates",
  nationality: "Sri Lankan",
  email: "ahmathmusharraf@gmail.com",
  phone: "+971 58146 2540",
  secondaryPhone: "+94 76 776 5080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf",
  portfolio: "ahmathmusharraf.vercel.app",
  
  summary: "Results-driven Multimedia Architect with over 5 years of international experience across the UAE and GCC markets. Expert in bridging high-bitrate cinematic production with technical web engineering and strategic digital marketing. Proven track record in scaling brands across automotive, healthcare, and academic sectors through data-backed visual storytelling and technical innovation.",
  
  profileImage: "https://raw.githubusercontent.com/ahmath-musharraf/Musharraf-Portfolio/refs/heads/main/Musharraf.png",

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
    role: "Photographer, Videographer cum Graphic Designer",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    website: "https://alkhateeb.ae/",
    description: [
      "Produced high-quality photography and videography for marketing and product campaigns, increasing content engagement by 40%+ across digital platforms.",
      "Led end-to-end content production (planning, shooting, editing), reducing turnaround time by 30% while maintaining premium visual standards.",
      "Designed creative assets for social media and promotions, contributing to a 25%+ growth in audience reach and brand visibility.",
      "Collaborated with marketing and sales teams to deliver targeted visual campaigns, supporting increased lead generation and customer conversions.",
      "Managed and optimized digital media library and workflows, improving content accessibility and team efficiency by 20%."
    ]
  },
  {
    id: "2",
    role: "Digital Marketing Specialist",
    company: "British College of Applied Studies (BCAS)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Aug 2025",
    website: "https://bcas.lk/",
    description: [
      "Executed multi-channel digital marketing campaigns (Meta, Google Ads, email), increasing student inquiries and qualified leads by 35%+.",
      "Improved SEO performance, boosting organic website traffic by 40% and ranking key academic programs on the first page of search results.",
      "Developed and managed targeted content strategies, increasing social media engagement by 50%+ and growing follower base significantly.",
      "Analyzed campaign performance and optimized strategies, improving conversion rates by 25% and maximizing marketing ROI.",
      "Collaborated with academic and admissions teams on recruitment campaigns, contributing to a 20%+ increase in student enrollments."
    ]
  },
  {
    id: "3",
    role: "Visiting Lecturer - IT",
    company: "British College of Applied Studies (BCAS)",
    location: "Colombo, Sri Lanka",
    period: "Mar 2024 - Aug 2025",
    website: "https://bcas.lk/",
    description: [
      "Delivered IT and Multimedia lectures to undergraduate students, achieving 90%+ student satisfaction and consistently strong academic outcomes.",
      "Designed and updated curriculum aligned with industry standards, improving student skill readiness and practical competencies.",
      "Supervised student projects and assessments, contributing to 95%+ pass rates and enhanced project quality.",
      "Mentored students in multimedia tools and technologies, increasing employability and successful internship/job placements."
    ]
  },
  {
    id: "4",
    role: "Social Media Executive & Brand Lead",
    company: "Dr. Jameel Memorial Hospital",
    location: "Colombo, Sri Lanka",
    period: "Oct 2020 - Dec 2022",
    website: "https://jameelhospital.lk/",
    description: [
      "Led social media strategy and brand positioning, increasing online engagement by 60%+ and strengthening brand awareness across platforms.",
      "Managed and executed digital campaigns (Facebook, Instagram, Google), driving 30%+ growth in patient inquiries and appointments.",
      "Developed high-quality healthcare content and campaigns, improving audience reach and trust in medical services.",
      "Analyzed performance metrics and optimized campaigns, improving conversion rates by 25%+ and maximizing ROI.",
      "Coordinated with medical and administrative teams to promote services and health campaigns, contributing to increased patient acquisition and retention."
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
    title: "Al Khateeb Car Accessories",
    description: "We offer everything from custom-fit seat covers, LED lights, and mobile chargers to dashboard cameras, parking sensors, and window tinting accessories.",
    tags: ["Next.js", "Tailwind", "UX"],
    link: "https://alkhateeb.ae/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Dress Line - Batticaloa",
    description: "Simply The Best.",
    tags: ["E-Commerce", "Tailwind", "UX"],
    link: "https://dressline.vercel.app/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Studio Routes",
    description: "Everything Has Beauty - Photography & Videography.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://studioroutes.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ink Spire",
    description: "Every Pixel, a Touch of Magic.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://inkspirekky.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hive Image",
    description: "Hive Image brings you the world's most elite electronics. Based in Canary Wharf, delivered UK-wide with professional precision.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://hiveimage.co.uk/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Fix Deal",
    description: "The most sophisticated marketplace in Sri Lanka. Explore, buy, and sell with absolute precision.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://fixdeal.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sri Lanka Signature Tours",
    description: "Experience bespoke luxury journeys curated by local experts. From ancient heritage to pristine beaches, we unveil the island's best.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://slsignaturetours.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  }
];

export const VISUAL_WORKS: VisualWork[] = [
  { 
    id: "v1", 
    title: "Jetour Upgrades New Style", 
    category: "Videography", 
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ldzhMWha3bk", 
    aspectRatio: '16:9'
  },
  { 
    id: "v2", 
    title: "Lexus LX600 Identity", 
    category: "Reels", 
    imageUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    aspectRatio: '9:16'
  },
  { 
    id: "v3", 
    title: "Luxury Watch Branding", 
    category: "Branding", 
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  { 
    id: "v4", 
    title: "Tech Workshop Series", 
    category: "Mentorship", 
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  {
    id: "v5",
    title: "Automotive Lighting Studio",
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '16:9'
  },
  {
    id: "v6",
    title: "Corporate Identity Motion",
    category: "Videography",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '16:9'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: "Instagram", url: "https://instagram.com/ahmath_musharraf", icon: Instagram },
  { name: "GitHub", url: "https://github.com/ahmathmusharraf", icon: Github },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const LANGUAGES = ["English (Professional)", "Tamil (Native)", "Sinhala (Professional)", "Malayalam (Conversational)", "Hindi (Conversational)",];

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
