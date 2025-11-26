import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial } from './types';
import { 
  Palette, 
  Megaphone, 
  Camera, 
  Code, 
  Linkedin, 
  Mail, 
  Phone, 
  Globe,
  Instagram,
  Github
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ahmath Musharraf",
  roles: [
    "Digital Marketing Specialist",
    "Multimedia Specialist",
    "Graphic Designer",
    "Photographer"
  ],
  location: "Dubai, United Arab Emirates",
  nationality: "Sri Lankan",
  email: "ahmathmusharraf@gmail.com",
  phone: "+971 58146 2540",
  secondaryPhone: "+94 76 776 5080",
  resume: "/Ahmath_Musharraf_CV.pdf", // CHANGE THIS: Put your PDF in the public folder and update this name, or paste an external link
  summary: "Creative and performance-driven Multimedia & Digital Marketing Specialist with over 5 years of experience delivering impactful campaigns and high-quality visual content across diverse industries in the Gulf region. Expertise in SEO, social media marketing, paid advertising (Google & Meta), and creative direction. Proven track record of boosting brand visibility, engagement, and lead generation through data-driven marketing strategies."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/ahmathmusharraf", icon: Linkedin },
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "Behance", url: "https://behance.net/ahmathmusharraf", icon: Globe },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
  { name: "Email", url: "mailto:ahmathmusharraf@gmail.com", icon: Mail },
  { name: "Phone", url: "tel:+971581462540", icon: Phone },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Graphic Designer cum Photographer",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    description: [
      "Conceptualize and produce visually striking product photography that enhances brand appeal across digital and print platforms.",
      "Design modern product catalogs, brand visuals, and marketing materials communicating commercial value.",
      "Develop eye-catching social media content and visual campaigns to engage audiences.",
      "Manage the entire creative process from concept and lighting setup to retouching and layout design."
    ]
  },
  {
    id: "5",
    role: "Visiting Lecturer - Information Technology",
    company: "British College of Applied Studies (BCAS Campus)",
    location: "Colombo, Sri Lanka",
    period: "Mar 2024 - Aug 2025",
    description: [
      "Develop and deliver lectures on various IT topics including Graphic Design, Web Design.",
      "Provide hands-on instruction in graphic design tools and techniques, fostering students' creativity and technical skills.",
      "Mentor and advise students on academic and career pathways in the IT and design fields.",
      "Evaluated student performance through assignments, projects, and examinations, providing constructive feedback.",
      "Collaborated with faculty members to enhance interdisciplinary teaching and research efforts."
    ]
  },
  {
    id: "2",
    role: "Digital Marketing Specialist",
    company: "British College of Applied Studies (BCAS Campus)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Aug 2025",
    description: [
      "Developed and executed multi-channel digital marketing strategies (SEO, SEM, social, and email), increasing lead generation by 40%.",
      "Managed Google Ads and Meta Ads campaigns with optimized ROI through data-driven analytics.",
      "Integrated CRM tools (Zoho, BCAS) to enhance conversion tracking and campaign personalization.",
      "Strengthened brand awareness through audience segmentation and A/B testing."
    ]
  },
  {
    id: "3",
    role: "Photographer & Videographer / Video Editor",
    company: "Studio Routes",
    location: "Sri Lanka",
    period: "Feb 2023 - Aug 2025 (Part Time)",
    description: [
      "Produced professional product, event, and promotional videos supporting marketing goals.",
      "Applied creative storytelling and advanced editing using Adobe Premiere Pro and After Effects.",
      "Handled professional camera systems including Sony A7 IV, Canon, and Nikon.",
      "Delivered visual content that boosted brand perception and social engagement."
    ]
  },
  {
    id: "4",
    role: "Social Media Marketing Specialist",
    company: "Dr. Jameel Memorial Hospital",
    location: "Colombo, Sri Lanka",
    period: "Oct 2020 - Dec 2022",
    description: [
      "Built and managed the hospital’s social media presence across Facebook, Instagram, LinkedIn, TikTok, and YouTube.",
      "Collaborated with influencers and executed paid ad campaigns to enhance audience reach.",
      "Monitored analytics to identify growth opportunities, increasing engagement by 35% within six months."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.Sc (Hons) in Software Engineering",
    institution: "University of Solent - UK",
    location: "UK",
    period: "2023 - 2024"
  },
  {
    id: "2",
    degree: "BTEC Higher National Diploma in Software Engineering",
    institution: "Pearson - UK",
    location: "UK",
    period: "2020 - 2022"
  },
  {
    id: "3",
    degree: "Diploma in Information Technology & English",
    institution: "BCAS Campus",
    location: "Sri Lanka",
    period: "2019 - 2020"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Marketing & Strategy",
    icon: Megaphone,
    skills: ["SEO & SEM", "Google Ads", "Meta Ads", "Brand Strategy", "Email Marketing", "Google Analytics", "CRM (Zoho)"]
  },
  {
    name: "Visual Design",
    icon: Palette,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Branding", "Print Design", "Product Photography"]
  },
  {
    name: "Photography & Video",
    icon: Camera,
    skills: ["Photography", "Premiere Pro", "After Effects", "Videography", "Storytelling", "Color Grading", "Sony A7 IV"]
  },
  {
    name: "Web & Tech",
    icon: Code,
    skills: ["WordPress", "HTML/CSS", "Web Design", "Azure Fundamentals", "Software Engineering"]
  }
];

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: "Studio Routes",
    description: "A modern creative agency portfolio showcasing professional photography and videography services.",
    tags: ["Portfolio", "Web Design", "Photography"],
    link: "https://studioroutes.vercel.app/"
  },
  {
    title: "Mushi Editz",
    description: "A dynamic video editing portfolio featuring high-quality visual content, motion graphics, and reels.",
    tags: ["React", "Motion Graphics", "Multimedia"],
    link: "https://mushieditz.vercel.app/"
  },
  {
    title: "Inkspire",
    description: "A creative digital space tailored for storytelling, blogging, and content inspiration.",
    tags: ["Next.js", "Blog", "UI/UX"],
    link: "https://inkspirekky.vercel.app/"
  },
  {
    title: "Smart Learning Hub",
    description: "An educational platform designed to streamline learning resources and management.",
    tags: ["Web Dev", "Education", "Platform"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marketing Director",
    role: "Director",
    company: "Al Khateeb Global Trading",
    quote: "Ahmath's photography and catalog designs significantly uplifted our brand perception. His ability to blend creativity with commercial value is outstanding."
  },
  {
    id: "2",
    name: "Head of Operations",
    role: "Operations Manager",
    company: "BCAS Campus",
    quote: "His digital marketing strategies were instrumental in increasing our lead generation by 40%. A true professional who understands both the technical and creative aspects of marketing."
  },
  {
    id: "3",
    name: "Creative Lead",
    role: "Senior Producer",
    company: "Studio Routes",
    quote: "An exceptional eye for detail in video production. Ahmath consistently delivered high-quality content that resonated with our audience and boosted engagement."
  },
  {
    id: "4",
    name: "Medical Administrator",
    role: "Hospital Administration",
    company: "Dr. Jameel Memorial Hospital",
    quote: "He completely transformed our social media presence. His engagement strategies significantly improved our patient outreach and online visibility."
  },
  {
    id: "5",
    name: "Sarah Jenkins",
    role: "Project Manager",
    company: "Freelance Client",
    quote: "A rare talent who excels in both design and development. The web platform he built for us was modern, fast, and exactly what we needed."
  },
  {
    id: "6",
    name: "John Davis",
    role: "CEO",
    company: "TechSolutions Inc.",
    quote: "Working with Ahmath was a pleasure. He delivered the project on time and exceeded our expectations."
  },
  {
    id: "7",
    name: "Emily Wilson",
    role: "Marketing Manager",
    company: "Growth Gurus",
    quote: "Ahmath's insights into SEO and social media marketing helped us achieve record-breaking engagement numbers."
  }
];

export const LANGUAGES = ["English (Fluent)", "Tamil (Fluent)", "Sinhala (Fluent)", "Malayalam (Intermediate)"];
export const CERTIFICATIONS = ["Google Ads Certified", "Meta Blueprint Certified", "Azure Fundamentals (AZ-900)"];