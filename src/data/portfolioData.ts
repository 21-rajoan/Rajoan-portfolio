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
    role: "Mobile Application Developer",
    tagline: "Building apps people actually love.",
    subTagline: "Flutter • Swift • Kotlin — 2+ years crafting production mobile apps. From real-time WebSockets & WebRTC to AI-powered platforms and live-streaming TV. 16+ live apps on Google Play & App Store.",
    bio: [
      "I'm a mobile application developer from Dhaka with a focused expertise in Flutter development. I design and build cross-platform applications that prioritize clean architecture, smooth user experience, and maintainable code.",
      "My approach centers on MVVM architecture, reactive state management with GetX and RxDart, and robust backend integration through REST APIs and Firebase.",
    ],
    email: "rajoantamjid.21@gmail.com",
    phone: "+8801734341140",
    location: "Dhaka, Bangladesh",
    yearsOfExperience: "2+",
    resumeUrl: "/Rajoan_Tamjid_CV.pdf",
    avatarUrl: "/workspace-developer.jpg",
    stats: [
      { value: "22+", label: "APPS BUILT" },
      { value: "16+", label: "APPS DEPLOYED" },
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
      role: "Mobile Application Developer",
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
      id: "bp-fitness",
      title: "BP Fitness — Workouts & AI Meal Plans",
      category: "Health & Fitness",
      shortDescription: "A results-driven fitness app with guided workouts, structured training plans, AI-powered meal planning, progress tracking, and BP Fitness Premium monthly & yearly in-app subscriptions.",
      fullDescription: "BP Fitness is a simple, results-driven fitness app designed to help users stay consistent with workouts, nutrition, and daily movement. The app includes guided workouts, structured training plans, AI-powered meal planning, and a supportive community to help users stay accountable. Features seamless Apple In-App Purchases (BP Fitness Premium) for monthly and yearly subscription options.",
      technologies: ["Flutter", "Swift", "AI Meal Planning", "In-App Subscriptions", "Firebase", "Health & Fitness"],
      platform: ["IOS"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/bpfitnes/id6757735124",
      image: "/bp-fitness-logo.png",
    },
    {
      id: "castors",
      title: "CASTORS — Smart AI Recipe & Meal Planner",
      category: "Food & Drink",
      shortDescription: "A smart, AI-driven recipe and meal-planning app that helps users cook with ingredients they already have on hand, with personalized daily meal recommendations and digital cookbook management.",
      fullDescription: "CASTORS is an AI-powered culinary companion built with Flutter, RxDart, GetX, and Provider. Users input available ingredients into 'My Kitchen' to generate complete, structured step-by-step recipes with AI. Features curated daily meal suggestions (Breakfast, Lunch, Dinner), saved favorites rotation, multi-auth (Google, Apple, Firebase), and responsive micro-interactions.",
      technologies: ["Flutter", "AI Recipe Engine", "GetX", "RxDart", "Firebase", "Dio"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/castors/id6760685124",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.victoria.castors",
      image: "/castors-logo.png",
    },
    {
      id: "my-wedding-music",
      title: "My Wedding Music — Event Soundtrack Planner",
      category: "Lifestyle & Events",
      shortDescription: "A stress-free wedding music planning app that helps couples organize key ceremony & reception song moments, link Spotify/YouTube tracks, generate professional PDF playlists, and share with vendors.",
      fullDescription: "My Wedding Music is a specialized event music planning app built with Flutter. Couples can structure ceremony and reception key moments (aisle walk, first dance, cake cutting, bouquet toss), attach direct streaming track links, export formatted PDF schedules for celebrants and DJs, and coordinate seamlessly with wedding planners.",
      technologies: ["Flutter", "PDF Generation", "YouTube/Spotify Integration", "GetX", "Firebase"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/my-wedding-music/id6747335876",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.my_weeding_music.app",
      image: "/my-wedding-music-logo.png",
    },
    {
      id: "my-carmate",
      title: "My CarMate — Automotive & Service Booking",
      category: "Automotive & Services",
      shortDescription: "A comprehensive automotive service-booking platform connecting vehicle owners with service providers via real-time WebSockets, interactive calendar scheduling, location search, and OTP authentication.",
      fullDescription: "My CarMate is a feature-rich mobile app facilitating a complete service-booking lifecycle. Built with Flutter using a feature-first architecture, real-time WebSockets (Pusher Channels), OTP phone authentication, interactive calendars, location-aware search, media upload management, and rating/review feedback systems.",
      technologies: ["Flutter", "WebSockets", "GetX", "Provider", "Firebase Auth", "Dio", "RxDart"],
      platform: ["IOS"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/my-carmate-app/id6759544455",
      image: "/carmate-logo.png",
    },
    {
      id: "lifresh",
      title: "Lifresh — Personalized Grocery & Fast Delivery",
      category: "E-Commerce & Grocery",
      shortDescription: "A personalized fresh grocery & daily essentials shopping app featuring preference-based product selection, fast checkout, instant order notifications, and secure payments.",
      fullDescription: "Lifresh is a tailored fresh product shopping platform built with Flutter. Users enjoy a personalized grocery shopping experience based on individual interests, instant order tracking notifications, saved profile details for one-tap checkout, and high-speed delivery of daily essentials.",
      technologies: ["Flutter", "Personalized E-Commerce", "Push Notifications", "Firebase", "REST API"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/lifresh/id6758229966",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.lifresh.app",
      image: "/lifresh-logo.png",
    },
    {
      id: "registree",
      title: "Registree — Baby Products & Registry App",
      category: "Lifestyle & Shopping",
      shortDescription: "A trusted baby product registry & shopping platform featuring instant QR/barcode scanner, ingredient/certification lookup, third-party store integration, custom baby registries, and expert care guides.",
      fullDescription: "Registree is an all-in-one baby product registry and shopping app built with Flutter. Parents can scan product barcodes to view detailed ingredient safety and certifications, curate custom baby registries, explore verified third-party products, and access expert parenting guides. Features barcode scanning (mobile_scanner), nested folder organization, location services, and Firebase Cloud Messaging.",
      technologies: ["Flutter", "Barcode/QR Scanner", "GetX", "Provider", "Firebase FCM", "Dio", "RxDart"],
      platform: ["IOS"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/registree-app/id6757942914",
      image: "/registree-logo.png",
    },
    {
      id: "theakktricks",
      title: "Theakktricks — Acting, Scene Recording & Live Talent Platform",
      category: "Entertainment & Social",
      shortDescription: "A social entertainment platform for movie lovers & aspiring actors to recreate iconic movie scenes, record performances, go live, receive 1-10 community ratings, and share photo/video stories.",
      fullDescription: "Theakktricks is an interactive acting and scene-recreation social platform built with Flutter. Aspiring actors can browse an iconic movie scene library, record performances using in-app camera controls, broadcast live streams with real-time comments/reactions, post photo & video stories, and earn community ratings.",
      technologies: ["Flutter", "Live Streaming", "Video Recording", "Camera API", "Firebase", "WebSockets"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/theakktricks/id6777671595",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jgate.theakktricksapplications",
      image: "/theakktricks-logo.png",
    },
    {
      id: "foodlab-hub",
      title: "FoodLab Hub — Local Homemade Food & Kitchen Marketplace",
      category: "Food & Marketplace",
      shortDescription: "A community food marketplace connecting local home cooks with food lovers. Features live interactive cook discovery map, instant meal ordering, pre-order scheduling, verified council-approved kitchens, and seller store management.",
      fullDescription: "FoodLab Hub is a mobile food marketplace connecting home chefs and local food lovers. Users can discover nearby authentic meals via interactive live maps, order ready dishes instantly or pre-order for future dates, and view transparent ratings and allergen information. Empowers home cooks to sell meals directly from their council-approved kitchens.",
      technologies: ["Flutter", "Live Maps", "Order Management", "Payment Gateway", "Firebase", "REST API"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/gb/app/foodlab-hub/id6757672979",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodlab.hub",
      image: "/foodlab-logo.png",
    },
    {
      id: "jjs-firewood",
      title: "JJ's Firewood Perth — On-Demand Firewood Delivery",
      category: "E-Commerce & Logistics",
      shortDescription: "A specialized local e-commerce & delivery app for ordering premium Jarrah hardwood across Perth. Features bulk firewood product browsing, transparent pricing, order tracking, and weekly in-app giveaways.",
      fullDescription: "JJ's Firewood Perth is a convenient mobile ordering and delivery application built with Flutter. Customers in Western Australia can easily order top-grade Jarrah firewood for fireplaces, pizza ovens, and BBQs, track real-time delivery status, and participate in exclusive weekly giveaways.",
      technologies: ["Flutter", "Order Management", "Live Tracking", "Firebase", "REST API"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/jjs-firewood-perth/id6756213648",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.firewood.perth",
      image: "/jjs-firewood-logo.png",
    },
    {
      id: "storybun",
      title: "StoryBun — Learn Chinese Through AI Stories",
      category: "Education & AI",
      shortDescription: "An interactive Chinese language learning app that generates custom stories with Chinese characters and Pinyin based on user topics, helping learners improve reading & vocabulary.",
      fullDescription: "StoryBun makes learning Chinese engaging and personalized. Built with Flutter and AI story generation, users enter any topic or prompt to receive custom stories formatted with Hanzi characters and Pinyin annotations. Features self-study reading modes, vocabulary building, and monthly premium subscriptions.",
      technologies: ["Flutter", "AI Story Generation", "Pinyin Parser", "In-App Subscriptions", "Firebase"],
      platform: ["IOS", "ANDROID"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/kz/app/storybun/id6749784590",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.storybun.app",
      image: "/storybun-logo.png",
    },
    {
      id: "bingeboss",
      title: "BingeBoss — Subscription & Expense Tracker",
      category: "Finance & Utility",
      shortDescription: "A personal finance & subscription tracker that aggregates monthly digital services, sends smart expiration reminders, tracks spending habits, and features RevenueCat tier upgrades.",
      fullDescription: "BingeBoss is an ultimate subscription management and expense tracking mobile application built with Flutter. Users can aggregate daily subscriptions (streaming, gym, software), receive smart push notification reminders before renewal dates, analyze monthly spending habits, upgrade to Silver/Gold/Platinum tiers via RevenueCat, and sync data seamlessly with Firebase.",
      technologies: ["Flutter", "RevenueCat", "Firebase Sync", "Push Notifications", "Expense Tracking"],
      platform: ["IOS"],
      featured: true,
      appStoreUrl: "https://apps.apple.com/us/app/bingeboss/id6758284339",
      image: "/bingeboss-logo.png",
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

