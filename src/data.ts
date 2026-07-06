import { Skill, Project, Experience, Certificate } from './types';

export const PERSONAL_INFO = {
  name: 'Klent Adrian Loyola',
  title: 'Full-Stack Developer & IoT Engineer',
  avatar: '/img/1.jpg', 
  shortIntro: 'Crafting responsive web solutions and bridging physical-digital worlds through intelligent IoT architectures. Dedicated to building reliable, high-performance applications with beautiful, modern interfaces.',
  aboutLong: 'I am a passionate Full-Stack Developer and IoT Engineer with a deep curiosity for connecting hardware with modern web systems. With a strong foundation in both software engineering and physical computing, I build software that matters—ranging from robust web applications with Laravel and React, to automation pipelines driven by Arduino and ESP32. My career objective is to develop secure, accessible, and scalable digital systems that simplify daily workflows and empower businesses.',
  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'State University of Science and Technology',
      period: '2022 - 2026',
      details: 'Specialized in Systems Development and Network Architectures. Graduated with Honors.'
    },
    {
      degree: 'Specialized Track in Embedded Systems',
      institution: 'IoT Innovation Labs',
      period: '2024 - 2025',
      details: 'In-depth focus on ESP32, RTOS, and cloud communication protocols (MQTT, HTTP, WebSockets).'
    }
  ],
  careerObjective: 'To leverage my skills in full-stack web technologies and physical computing to engineer smart, reliable, and user-centric systems that enhance operational efficiency and drive technological growth.',
  interests: ['Embedded Systems & Hardware Hacking', 'UI/UX Interactive Transitions', 'Open Source Contributing', '3D Printing & CAD Design', 'Cybersecurity & API Hardening'],
  email: 'loyolaklentadrian@gmail.com',
  phone: '+63 9094851563',
  location: 'Mahayag, Zamboanga del Sur, Philippines',
  socials: {
    github: 'https://github.com/klentloyola2003',
    linkedin: 'https://linkedin.com',
    facebook: 'https://www.facebook.com/klent.loyola/',
    instagram: 'https://instagram.com',
    email: 'mailto:loyolaklentadrian@gmail.com'
  }
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', percentage: 95 },
  { name: 'CSS', category: 'frontend', percentage: 90 },
  { name: 'JavaScript', category: 'frontend', percentage: 92 },
  { name: 'Tailwind CSS', category: 'frontend', percentage: 95 },
  { name: 'Bootstrap', category: 'frontend', percentage: 85 },
  
  // Backend & Databases
  { name: 'PHP', category: 'backend', percentage: 88 },
  { name: 'Laravel', category: 'backend', percentage: 70 },
  { name: 'MySQL', category: 'backend', percentage: 85 },
  { name: 'Python', category: 'backend', percentage: 80 },
  { name: 'Java', category: 'backend', percentage: 75 },
  { name: 'C#', category: 'backend', percentage: 78 },

  // Hardware & IoT
  { name: 'Arduino', category: 'iot', percentage: 92 },
  { name: 'ESP32', category: 'iot', percentage: 90 },
  { name: 'Raspberry Pi', category: 'iot', percentage: 85 },

  // Tools & Others
  { name: 'Git & GitHub', category: 'tools', percentage: 88 }
];

export const PROJECTS: Project[] = [
  {
    id: 'agro-tech',
    title: 'Smart Agro-Tech Monitoring System',
    description: 'An automated IoT soil and ambient atmosphere monitoring setup. It gathers real-time data using ESP32 nodes, publishes to a secure cloud server, and visualizes measurements via a high-performance web dashboard with alerts.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['ESP32', 'Arduino', 'Laravel', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/klentloyola2003/',
    liveUrl: 'https://example.com'
  },
  {
    id: 'lara-commerce',
    title: 'Premium Laravel E-Commerce Suite',
    description: 'A full-featured digital storefront built with Laravel. Features include secure Stripe integration, robust caching, a comprehensive admin dashboard, dynamic product filtering, and instant search queries with MySQL indexing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/klentloyola2003/',
    liveUrl: 'https://example.com'
  },
  {
    id: 'rfid-attendance',
    title: 'Automated RFID Attendance Terminal',
    description: 'A hardware-software solution built for state-university tracking. RFID scanners send scanned ID logs to a centralized C# desktop management panel and synchronizes with a MySQL remote instance.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['C#', 'Arduino', 'MySQL', 'Embedded C++'],
    githubUrl: 'https://github.com/klentloyola2003/',
    liveUrl: 'https://example.com'
  },
  {
    id: 'smart-home',
    title: 'Intelligent Voice-Command Home Server',
    description: 'A decentralized, light-weight home automation hub deployed on Raspberry Pi. Integrates speech recognition patterns in Python and toggles dynamic relais systems with real-time feedback using WebSockets.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Raspberry Pi', 'Python', 'Tailwind CSS', 'WebSockets'],
    githubUrl: 'https://github.com/klentloyola2003/',
    liveUrl: 'https://example.com'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'On-the-Job Training (OJT) - Software Dev',
    organization: 'NexTech Solutions Inc.',
    type: 'OJT',
    date: 'Nov 2025 - Apr 2026',
    description: 'Developed and optimized custom RESTful endpoints with Laravel. Connected backend services to high-performance SQL databases, improving query load times by 25%. Participated in agile stand-ups and code reviews.',
    location: 'Mahayag, Zamboanga del Sur, Philippines'
  },
  {
    id: 'exp-2',
    title: 'IoT & Firmware Engineering Intern',
    organization: 'CircuitCraft Labs',
    type: 'Internship',
    date: 'Jun 2025 - Oct 2025',
    description: 'Programmed ESP32 nodes using FreeRTOS and Arduino Core. Implemented low-power standby modes, saving 40% battery life on remote telemetry hardware. Created data schemas on local micro-databases.',
    location: 'Mahayag, Zamboanga del Sur, Philippines'
  },
  {
    id: 'exp-3',
    title: 'Freelance Web & Hardware Integrator',
    organization: 'Self-Employed',
    type: 'Freelance',
    date: 'Jan 2024 - Present',
    description: 'Engineered custom management portals, billing systems, and responsive website UI for local pharmacies and retail hubs. Installed and integrated custom physical tracking panels for automated warehouse counting.',
    location: 'Remote'
  },
  {
    id: 'exp-4',
    title: 'Lead Robotics Systems Coordinator',
    organization: 'University Innovation Club',
    type: 'Organization',
    date: 'Sep 2023 - Present',
    description: 'Mentored 50+ junior students on Arduino hardware basics, circuit safety, and state-machine programming. Led a team of 4 to design an automated navigation robot for regional exhibitions.',
    location: 'JHCSC Campus'
  },
  {
    id: 'exp-5',
    title: 'Advanced IoT & Laravel Integration Summit',
    organization: 'TechSummit Philippines',
    type: 'Seminar',
    date: 'Aug 2024',
    description: 'Attended a comprehensive 3-day deep dive seminar. Explored real-time event broadcasting using Laravel Reverb and connecting MQTT streams from physical microcontrollers to modern client views.',
    location: 'SMX Convention Center'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Laravel Advanced Backend Certification',
    issuer: 'Laravel Inc. / Laracasts',
    date: 'Jan 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=300',
    credentialUrl: '#'
  },
  {
    id: 'cert-2',
    title: 'Professional IoT Solutions Architect',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2024',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300',
    credentialUrl: '#'
  },
  {
    id: 'cert-3',
    title: 'Advanced Data Structures & Algorithms in Java',
    issuer: 'Google Career Certifications',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400&h=300',
    credentialUrl: '#'
  }
];
