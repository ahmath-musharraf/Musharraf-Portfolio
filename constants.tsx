import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial } from './types';
import { 
  Palette, 
  Megaphone, 
  Camera, 
  Code, 
  Linkedin, 
  Mail, 
  Phone, 
  Instagram,
  Github
} from 'lucide-react';

// Custom Behance Icon Component
const BehanceIcon = ({ size = 24, className, ...props }: any) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        fill="currentColor" 
        className={className}
        {...props}
    >
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
    </svg>
);

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
  resume: "/Ahmath_Musharraf_CV.pdf", // CHANGE THIS: Put your PDF in the public folder and update this name
  summary: "Creative and performance-driven Multimedia & Digital Marketing Specialist with over 5 years of experience delivering impactful campaigns and high-quality visual content across diverse industries in the Gulf region. Expertise in SEO, social media marketing, paid advertising (Google & Meta), and creative direction. Proven track record of boosting brand visibility, engagement, and lead generation through data-driven marketing strategies."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/ahmathmusharraf", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/ahmathmusharraf", icon: Github },
  { name: "Behance", url: "https://behance.net/ahmathmusharraf", icon: BehanceIcon as any },
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
    link: "https://studioroutes.vercel.app/",
    github: "https://github.com/ahmathmusharraf/studio-routes",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mushi Editz",
    description: "A dynamic video editing portfolio featuring high-quality visual content, motion graphics, and reels.",
    tags: ["React", "Motion Graphics", "Multimedia"],
    link: "https://mushieditz.vercel.app/",
    github: "https://github.com/ahmathmusharraf/mushi-editz",
    image: "https://images.unsplash.com/photo-1574717432724-43c2d4715509?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Inkspire",
    description: "A creative digital space tailored for storytelling, blogging, and content inspiration.",
    tags: ["Next.js", "Blog", "UI/UX"],
    link: "https://inkspirekky.vercel.app/",
    github: "https://github.com/ahmathmusharraf/inkspire",
    image: "https://images.unsplash.com/photo-1499750310159-57751c6e9f19?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Smart Learning Hub",
    description: "An educational platform designed to streamline learning resources and management.",
    tags: ["Web Dev", "Education", "Platform"],
    github: "https://github.com/ahmathmusharraf/smart-learning-hub",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Employee Monitoring Tool",
    description: "Visual Basic Windows Application for tracking employee activities and productivity.",
    tags: ["Visual Basic", "Desktop App", "Management"],
    github: "https://github.com/ahmathmusharraf/employee-monitoring-tool",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Income and Expenses Management System",
    description: "A financial management tool for tracking income and expenses efficiently.",
    tags: ["Software", "Finance", "Database"],
    github: "https://github.com/ahmathmusharraf/income-expenses-system",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
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