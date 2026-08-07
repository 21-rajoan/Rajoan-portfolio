// ============================================
// PORTFOLIO DATA — Single source of truth
// Edit this file to update all content across the site.
// Do NOT hardcode content in UI components.
// ============================================

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  platform: string[];
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  highlights: string[];
}

export interface Stats {
  label: string;
  value: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    subTagline: string;
    bio: string[];
    email: string;
    phone: string;
    location: string;
    yearsOfExperience: string;
    resumeUrl: string;
    avatarUrl: string;
    stats: Stats[];
  };
  social: SocialLink[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  services: Service[];
  navItems: { name: string; href: string }[];
}

// ============================================
// DATA
// ============================================

const portfolioData: PortfolioData = {
  personal: {
    name: "Rajoan Tamjid Antor",
    firstName: "Rajoan",
    lastName: "Tamjid Antor",
    role: "Senior Mobile Engineer",
    tagline: "Building apps people actually love.",
    subTagline: "Flutter • Swift • Kotlin — 2+ years crafting production mobile apps. From real-time WebRTC video calling to AI-powered platforms and live-streaming TV. 18+ live apps on Google Play & App Store.",
    bio: [
      "I'm a mobile application developer from Dhaka with a focused expertise in Flutter development. I design and build cross-platform applications that prioritize clean architecture, smooth user experience, and maintainable code.",
      "My approach centers on MVVM architecture, reactive state management with GetX and RxDart, and robust backend integration through REST APIs and Firebase.",
    ],
    email: "rajoantamjid.21@gmail.com",
    phone: "+8801734341140",
    location: "Dhaka, Bangladesh",
    yearsOfExperience: "2+",
    resumeUrl: "/Rajoan_Tamjid_CV.pdf",
    avatarUrl: "/lovable-uploads/af9cc730-9df3-4684-988b-2351ef1cbb55.png",
    stats: [
      { value: "25+", label: "APPS BUILT" },
      { value: "18+", label: "APPS DEPLOYED" },
      { value: "2+", label: "YEARS XP" },
      { value: "100%", label: "PAYMENT SUCCESS" },
    ]
  },

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/21-rajoan",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/rajoan-tamjid-170b13249/",
      label: "LinkedIn Profile",
    },
    {
      platform: "Email",
      url: "mailto:rajoantamjid.21@gmail.com",
      label: "Send Email",
    },
  ],

  navItems: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  skillCategories: [
    {
      title: "Languages",
      skills: ["Flutter", "Dart", "Swift", "Kotlin", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "C++"],
    },
    {
      title: "State Management",
      skills: ["BLoC / Cubit", "Provider", "Freezed", "GetX", "Riverpod"],
    },
    {
      title: "Architecture & Quality",
      skills: ["Clean Architecture", "SOLID", "OOP", "Offline-first", "TDD", "Unit Testing", "MVVM"],
    },
    {
      title: "Backend & APIs",
      skills: ["RESTful APIs", "GraphQL", "Firebase", "WebSockets", "Google Maps", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Hive"],
    },
    {
      title: "Realtime & Features",
      skills: ["Live Tracking", "Live Chat", "Push Notifications", "Payments", "Subscriptions", "Stripe Payment", "Apple Pay", "Google Pay", "WebRTC"],
    },
    {
      title: "Tooling & Design",
      skills: ["Git", "GitHub", "CI/CD", "Shorebird (Code Push OTA)", "Linear", "Trello", "Figma", "Postman"],
    },
    {
      title: "Craft",
      skills: ["Responsive UI", "Animations", "Localization / RTL", "AI Integration"],
    },
  ],

  experience: [
    {
      company: "Softvench",
      role: "Senior Mobile App Developer",
      period: "Oct 2025 – Present",
      location: "Dhaka, Bangladesh",
      description: "",
      responsibilities: [
        "Designed and developed enterprise-grade Flutter & native iOS applications using Clean Architecture.",
        "Implemented low-latency WebRTC 1:1 and group video calling with background mode support.",
        "Integrated Stripe, Apple Pay, and Google Pay — achieving 100% transaction success rate in production.",
        "Reduced app size by ~20% and cold start time by ~30% through profiling, asset compression, and code refactoring.",
        "Managed full deployment lifecycle: TestFlight beta testing → App Store & Google Play releases."
      ],
      technologies: ["Flutter", "Swift", "WebRTC", "Stripe", "Clean Architecture"],
    },
    {
      company: "Softvench",
      role: "Flutter Developer",
      period: "Mar 2025 – Oct 2025",
      location: "Dhaka, Bangladesh",
      description: "",
      responsibilities: [
        "Shipped multiple production Flutter apps across live-streaming, logistics, e-learning, and e-commerce domains.",
        "Built Flixoo and the Flixoo Smart TV App — live-streaming/VOD platforms with ExoPlayer adaptive-bitrate playback, multi-screen live TV, and voice search for Android TV.",
        "Developed the Delix Courier rider and merchant apps — a full last-mile delivery suite with real-time parcel tracking and financial reporting.",
        "Built the Faculty LMS Instructor App, integrating with a full LMS website and admin panel.",
        "Contributed to YOORI, a multi-vendor e-commerce app with a customizable home builder and multi-gateway payments."
      ],
      technologies: ["Flutter", "ExoPlayer", "Android TV", "E-commerce"],
    },
    {
      company: "Cityscape International Ltd",
      role: "Flutter Developer (Intern)",
      period: "Dec 2024 – Feb 2025",
      location: "Dhaka, Bangladesh",
      description: "",
      responsibilities: [
        "Developed scalable Flutter applications with Provider state management, collaborating with design and backend teams.",
        "Improved app performance by 30% and reduced bundle size by 20% via efficient coding practices and resource optimization."
      ],
      technologies: ["Flutter", "Provider", "Performance Optimization"],
    },
  ],

  education: [
    {
      institution: "Daffodil International University",
      degree: "B.Sc.",
      field: "Computer Science and Engineering",
      period: "Completed",
      location: "Dhaka, Bangladesh",
    },
  ],

  projects: [
    {
      id: "lightuptech",
      title: "Nutriprime",
      category: "Health & Wellness",
      shortDescription: "A comprehensive health and wellness marketplace connecting nutritionists with patients. Features secure auth, meal & recipe management, progress tracking, advanced scheduling, dietary plan creation, and Stripe/Culqi payments.",
      technologies: ["Flutter", "GetX", "Firebase", "Stripe", "Dio"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/nutriprime/id6760328526",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.nutriprime.app",
      image: "/nutriprime-logo.png",
    },
    {
      id: "yoori",
      title: "YOORI — Multi-vendor eCommerce",
      category: "E-Commerce",
      shortDescription: "Complete multi-vendor eCommerce solution with a customizable home builder, multiple payment gateways, a full admin control panel, multi-seller management, dynamic coupons, stock & invoice management, and multi-language/multi-currency support. 1K+ downloads.",
      technologies: ["Flutter", "E-Commerce", "Multi-vendor"],
      platform: ["ANDROID"],
      featured: true,
      liveUrl: "#",
    },
    {
      id: "flixoo",
      title: "Flixoo — Live Streaming & Movies",
      category: "Streaming",
      shortDescription: "Live streaming and entertainment platform with movies, TV shows, and live events. Multiple playback servers for faster, uninterrupted streaming, personalized recommendations, and save-to-watch-later. 5K+ downloads.",
      technologies: ["Flutter", "Video Streaming", "VOD"],
      platform: ["ANDROID"],
      featured: true,
      liveUrl: "#",
    },
    {
      id: "flixoo-tv",
      title: "Flixoo Smart TV App",
      category: "Streaming",
      shortDescription: "Companion Smart TV app bringing live TV, movies, and series to the big screen. Built with ExoPlayer for adaptive-bitrate playback with seamless reconnection on network drops, multi-screen mode (up to 4 live channels with individual audio control), voice search, Room-database-backed favorites/watch history, Google Sign-In, and a Material 3 UI optimized for remote-control navigation. 1K+ downloads.",
      technologies: ["Flutter", "Android TV", "ExoPlayer", "Material 3"],
      platform: ["ANDROID TV"],
      featured: true,
      liveUrl: "#",
    },
    {
      id: "delix-rider",
      title: "Delix Courier — Rider App",
      category: "Logistics",
      shortDescription: "Delivery-management app for riders: live delivery/pickup statistics with day/week filters, ongoing/delivered/canceled delivery tracking, merchant-group pickup management, and full rider profile & payment-log settings.",
      technologies: ["Flutter", "Maps", "Tracking"],
      platform: ["ANDROID"],
      liveUrl: "#",
    },
    {
      id: "delix-merchant",
      title: "Delix Courier — Merchant App",
      category: "Logistics",
      shortDescription: "Logistics management platform for merchants to track deliveries and manage orders.",
      technologies: ["Flutter", "Dashboard", "Logistics"],
      platform: ["ANDROID"],
      liveUrl: "#",
    },
    {
      id: "faculty-lms",
      title: "Faculty LMS — Instructor App",
      category: "Education",
      shortDescription: "Instructor companion app for managing courses, students, and curriculum directly from mobile.",
      technologies: ["Flutter", "LMS", "Education"],
      platform: ["ANDROID"],
      liveUrl: "#",
    },
    {
      id: "silent-whistle",
      title: "Silent Whistle — Anonymous Community Alerts",
      category: "Social",
      shortDescription: "Community alert platform for anonymous reporting and local safety notifications.",
      technologies: ["Flutter", "Push Notifications"],
      platform: ["IOS", "ANDROID"],
      liveUrl: "#",
    },
    {
      id: "ayni-wellness",
      title: "Ayni Wellness — AI Spiritual App",
      category: "Health & Wellness",
      shortDescription: "AI-powered mindfulness platform providing personalized meditation and spiritual guidance.",
      technologies: ["Flutter", "AI Integration"],
      platform: ["ANDROID"],
      liveUrl: "#",
    },
  ],

  services: [
    {
      title: "Flutter App Development",
      description: "End-to-end cross-platform mobile application development using Flutter and Dart with clean architecture.",
      highlights: ["Cross-platform iOS & Android", "Custom UI components", "MVVM architecture", "GetX state management"],
    },
    {
      title: "API & Backend Integration",
      description: "Seamless integration with REST APIs, Firebase services, and backend systems for dynamic mobile applications.",
      highlights: ["REST API integration", "Firebase Auth & Firestore", "Real-time data sync", "Secure authentication"],
    },
    {
      title: "UI/UX Implementation",
      description: "Translating design specifications into pixel-perfect, responsive mobile interfaces with smooth animations.",
      highlights: ["Material Design", "Custom animations", "Responsive layouts", "Platform-adaptive UI"],
    },
    {
      title: "App Maintenance & Optimization",
      description: "Performance optimization, bug fixing, and ongoing maintenance for existing Flutter applications.",
      highlights: ["Performance profiling", "Code refactoring", "Bug resolution", "Store deployment"],
    },
  ],
};

export default portfolioData;

