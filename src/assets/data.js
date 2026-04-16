import {
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaStore,
  FaTools,
  FaVolumeUp,
} from 'react-icons/fa';
import {
  SiFirebase,
  SiIntellijidea,
  SiJupyter,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from 'react-icons/si';

export const profile = {
  name: 'Abhay Singh',
  role: 'Full Stack Developer',
  location: 'Kanpur, Uttar Pradesh, India',
  email: '2k23.cs2313937@gmail.com',
  github: 'https://github.com/Abhayrajput29',
  linkedin: 'https://www.linkedin.com/in/abhayrajput29/',
  summary:
    'Results-driven Computer Science undergraduate (Expected 2027) with hands-on expertise in full-stack web development, artificial intelligence, and blockchain technologies. Proficient in Java, Spring Boot, and Python. Adept at building scalable back-end systems, optimizing database performance, and delivering user-centric applications that reduce system latency and automate complex workflows by up to 40%.',
  technicalQualities: [
    'Builds scalable backend systems with Java and Spring Boot.',
    'Optimizes data workflows and improves real-world performance.',
    'Designs user-centric interfaces with React and modern frontend practices.',
    'Automates complex processes using machine learning and AI integrations.',
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroWords = [
  'AI-powered web apps',
  'scalable backend systems',
  'automation-focused solutions',
  'real-time user experiences',
];

export const skills = [
  { name: 'Java', icon: FaJava, color: 'text-red-400', url: 'https://www.java.com/', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop' },
  { name: 'Python', icon: FaPython, color: 'text-sky-400', url: 'https://www.python.org/', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop' },
  { name: 'JavaScript', icon: FaJs, color: 'text-gold', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: 'https://images.unsplash.com/photo-1627398240411-8d132cb1e6bc?q=80&w=400&auto=format&fit=crop' },
  { name: 'SQL', icon: FaDatabase, color: 'text-blue-400', url: 'https://en.wikipedia.org/wiki/SQL', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-400', url: 'https://spring.io/projects/spring-boot', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-400', url: 'https://react.dev/', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-300', url: 'https://firebase.google.com/', image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop' },
  { name: 'REST APIs', icon: FaCode, color: 'text-mint', url: 'https://restfulapi.net/', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop' },
  { name: 'AI & Machine Learning', icon: FaTools, color: 'text-coral', url: 'https://en.wikipedia.org/wiki/Machine_learning', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=400&auto=format&fit=crop' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400', url: 'https://www.postgresql.org/', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', url: 'https://www.mongodb.com/', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', url: 'https://git-scm.com/', image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=400&auto=format&fit=crop' },
  { name: 'GitHub', icon: FaGithub, color: 'text-zinc-200', url: 'https://github.com/', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400&auto=format&fit=crop' },
  { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: 'text-pink-400', url: 'https://www.jetbrains.com/idea/', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop' },
  { name: 'VS Code', icon: FaCode, color: 'text-blue-400', url: 'https://code.visualstudio.com/', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop' },
  { name: 'Jupyter Notebook', icon: SiJupyter, color: 'text-orange-400', url: 'https://jupyter.org/', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-red-400', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=400&auto=format&fit=crop' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=400&auto=format&fit=crop' },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java (OOP, DSA)', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks & Technologies',
    items: ['Spring Boot', 'React.js', 'Firebase', 'AI & Machine Learning', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Jupyter Notebook'],
  },
];

export const projects = [
  {
    title: 'AI Expense Tracker',
    icon: FaChartLine,
    description:
      'Full stack expense tracker with JWT authentication, OCR + SMS parsing, and Spring AI insights. Reduced manual data entry by 85% and improved query resolution time by 30%.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Spring AI', 'Machine Learning'],
    github: 'https://github.com/Abhayrajput29',
    demo: '#',
  },
  {
    title: 'Decentralized Marketplace',
    icon: FaStore,
    description:
      'Web3.js + MetaMask marketplace with secure smart contracts for campus transactions. Processed 25+ transactions with zero security breaches and lowered failed transactions by 20%.',
    image:
      'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80',
    tech: ['Web3.js', 'MetaMask', 'Blockchain', 'Smart Contracts'],
    github: 'https://github.com/Abhayrajput29',
    demo: '#',
  },
  {
    title: 'AI Text-to-Speech with Emotion Detection',
    icon: FaVolumeUp,
    description:
      'Python NLP engine that classifies five emotion categories with 90% real-time accuracy. Built a document ingestion pipeline and reduced speech generation latency by 25%.',
    image:
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
    tech: ['Python', 'NLP', 'Machine Learning', 'Text-to-Speech'],
    github: 'https://github.com/Abhayrajput29',
    demo: '#',
  },
];

export const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    institution: 'Pranveer Singh Institute of Technology, Dr. A.P.J. Abdul Kalam Technical University',
    duration: '2023 - 2027',
    score: '72.38%',
  },
  {
    degree: 'Intermediate (CBSE)',
    institution: 'Archies Higher Secondary School',
    duration: '2022',
    score: '71.00%',
  },
  {
    degree: 'High School (CBSE)',
    institution: 'Archies Higher Secondary School',
    duration: '2020',
    score: '89.16%',
  },
];

export const certifications = [
  'CSS3 Fundamentals - Infosys Springboard',
  'HTML5 The Language - Infosys Springboard',
  'Programming Fundamentals Using Python Part 1 - Infosys Springboard',
];
