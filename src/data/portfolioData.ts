export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  features: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
    icon: string;
  }[];
}

export interface Capability {
  title: string;
  level: 'Intermediate';
  summary: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ameer Hamza',
    title: 'Junior Web Developer',
    location: 'Pakistan',
    status: 'Available for freelance & full-time roles',
    intro:
      "I build modern, responsive, user-friendly web applications and am actively learning Full Stack Web Development with modern JavaScript, React, and Node.js.",
    bio:
      "Hi, I'm Ameer Hamza, a passionate Junior Web Developer currently learning Full Stack Web Development. I enjoy building modern, responsive, and user-friendly web applications while continuously improving my programming and problem-solving skills.",
    fullBio:
      "My journey is driven by curiosity and dedication to engineering quality web interfaces. I am interested in both frontend and backend development with the ultimate goal of becoming a skilled Full Stack Developer. Every day I work on practical projects to turn complex concepts into clean, accessible digital products.",
    learningJourney: [
      'Backend',
      'Deployment',
      'AI',
      'Next.js',
      'Node.js & Express.js',
      'Database Management',
      'GitHub',
      'Responsive Web Design',
    ],
  },

  contact: {
    email: 'arainumarfarooq40@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mian-ameer-hamza/',
    github: 'https://github.com/DevelporsTech',
    availabilityNote: 'Open for remote opportunities, freelance work & collaborations',
  },

  capabilities: [
    {
      title: 'Web Development',
      level: 'Intermediate' as const,
      summary:
        'Building responsive, fast, and accessible web experiences from scratch with semantic HTML, modern styling, and clean architecture.',
      highlights: [
        'Semantic HTML5 & modern CSS3 layouts',
        'Mobile-first responsive architecture across all breakpoints',
        'Cross-browser compatibility & clean typography',
      ],
    },
    {
      title: 'Web Application Development',
      level: 'Intermediate' as const,
      summary:
        'Engineering dynamic, state-driven single-page and server-rendered web applications with interactive client-side logic.',
      highlights: [
        'Component lifecycle & modern React hooks architecture',
        'RESTful API integration & asynchronous data fetching',
        'State management, client routing & form validation',
      ],
    },
    {
      title: 'Frontend Development',
      level: 'Intermediate' as const,
      summary:
        'Crafting pixel-perfect user interfaces with Tailwind CSS, micro-interactions, accessible UI patterns, and optimized performance.',
      highlights: [
        'Tailwind CSS & utility-first design systems',
        'Performance optimization & Core Web Vitals discipline',
        'Accessible navigation & WCAG-compliant contrast',
      ],
    },
  ],

  skillCategories: [
    {
      title: 'Frontend',
      description: 'Building interactive, accessible, and responsive user interfaces',
      skills: [
        { name: 'HTML5', level: 'Intermediate', focus: 'Semantic structure & SEO markup', icon: 'Code' },
        { name: 'CSS3', level: 'Intermediate', focus: 'Flexbox, Grid, animations & variables', icon: 'Palette' },
        { name: 'JavaScript ES6+', level: 'Intermediate', focus: 'Async/await, DOM manipulation & modern syntax', icon: 'FileCode' },
        { name: 'React.js', level: 'Intermediate', focus: 'Hooks, component tree, SPA state', icon: 'Atom' },
        { name: 'Next.js', level: 'Intermediate', focus: 'Routing, Server Components & SEO rendering', icon: 'Globe' },
        { name: 'Responsive Web Design', level: 'Intermediate', focus: 'Mobile-first fluid layouts & touch-friendly UX', icon: 'Smartphone' },
      ],
    },
    {
      title: 'Tools & Workflow',
      description: 'Development tooling, repository management, and modern deployment',
      skills: [
        { name: 'GitHub', level: 'Intermediate', focus: 'Repository management & collaborative development', icon: 'Github' },
        { name: 'Vite & Modern Tooling', level: 'Intermediate', focus: 'Fast build setups, npm & TypeScript configuration', icon: 'Zap' },
      ],
    },
    {
      title: 'Learning & Growth',
      description: 'Actively expanding skill set across full stack and modern development',
      skills: [
        { name: 'Backend', level: 'Active Learning', focus: 'Server architecture, RESTful APIs & database operations', icon: 'Server' },
        { name: 'Deployment', level: 'Active Learning', focus: 'Cloud hosting, Vercel deployments & production builds', icon: 'Cloud' },
        { name: 'AI', level: 'Active Learning', focus: 'AI APIs, LLM integrations & smart developer workflows', icon: 'Bot' },
      ],
    },
  ],

  projects: [
    {
      id: 'aurapk',
      name: 'AuraPK',
      category: 'E-commerce Website',
      tagline: 'Modern, high-performance online shopping platform',
      description:
        'AuraPK is a modern, responsive e-commerce platform designed to provide customers with a seamless online shopping experience. The website focuses on attractive UI, fast performance, product discovery, user experience, scalability, and conversion optimization.',
      url: 'https://aurapk.vercel.app/',
      image: '/src/assets/images/project_aurapk_ui_1790181082242.jpg',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'E-commerce UX', 'Vercel'],
      features: [
        'Curated product discovery grid with responsive image rendering',
        'Intuitive navigation, shopping cart drawer & order flow',
        'Mobile-optimized touch targets and conversion-focused checkout layout',
        'Fast page loads with Core Web Vitals optimization',
      ],
    },
    {
      id: 'master-grocery',
      name: 'Master Grocery Store',
      category: 'E-commerce Website',
      tagline: 'Seamless fresh produce and grocery ordering experience',
      description:
        'Master Grocery Shop is a modern e-commerce experience where customers can browse products easily, place orders, and enjoy a seamless shopping experience across devices. The project focuses on convenience, inventory management, and efficient order processing.',
      url: 'https://master-grocery-shop.vercel.app/',
      image: '/src/assets/images/project_grocery_ui_1790181095701.jpg',
      technologies: ['React', 'JavaScript ES6+', 'Tailwind CSS', 'Cart UX', 'Vercel'],
      features: [
        'Category-based navigation for rapid grocery item discovery',
        'Real-time cart quantity controls and dynamic total calculations',
        'Clean card-based product layout with stock availability indicators',
        'Optimized for mobile shoppers on cellular connections',
      ],
    },
    {
      id: 'roast-route',
      name: 'Roast Route',
      category: 'Coffee & Route Platform',
      tagline: 'Artisanal roastery discovery and delivery route tracking platform',
      description:
        'Roast Route is a specialty coffee discovery and ordering web application designed for coffee lovers to explore artisanal roasters, customize brew preferences, and track delivery routes with a sleek, responsive interface.',
      url: 'https://roast-route-mnt638pb0-ahmadbasit.vercel.app/',
      image: '/src/assets/images/project_roastroute_ui_1790183087663.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Vercel'],
      features: [
        'Specialty coffee bean catalog with roast profile filtering',
        'Interactive route planning and delivery tracker interface',
        'Mobile-first responsive design with accessible touch controls',
        'Deployed on Vercel with high-speed performance optimization',
      ],
    },
  ],
};
