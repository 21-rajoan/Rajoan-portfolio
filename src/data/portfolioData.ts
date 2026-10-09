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

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image?: string;
  images?: string[];
  imageLabels?: string[];
  bgColor?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
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
  achievements?: Achievement[];
  projects: Project[];
  featuredShowcase?: ShowcaseItem[];
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
    role: "Software Engineer — Mobile Application",
    tagline: "Engineering robust, high-performance mobile systems.",
    subTagline: "Software Engineer with 2+ years of experience specializing in cross-platform mobile and web application development using Flutter, Dart, and React.js. Experienced in Clean Architecture, reactive state management, and full release lifecycle management.",
    bio: [
      "Software Engineer with 2+ years of experience specializing in cross-platform mobile and web application development using Flutter, Dart, and React.js.",
      "Proven track record of architecting, building, and deploying 15+ production-grade iOS and Android applications across HealthTech, Fitness, Automotive, and Live Streaming domains.",
      "Experienced in end-to-end feature ownership, Clean Architecture, reactive state management, RESTful API integration, payments, and full release lifecycle management on App Store and Google Play.",
    ],
    email: "rajoantamjid.21@gmail.com",
    phone: "+880 1734-341140",
    location: "Dhaka, Bangladesh",
    yearsOfExperience: "2+",
    resumeUrl: "/resume",
    avatarUrl: "/workspace-developer.jpg",
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "15+", label: "Production Apps Deployed" },
      { value: "30%", label: "Runtime & Bundle Optimization" },
      { value: "99.9%", label: "Target Crash-Free Rate" },
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
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],

  skillCategories: [
    {
      title: "Mobile & Web",
      skills: ["Flutter", "Dart", "React.js", "Android", "iOS"],
    },
    {
      title: "Architecture",
      skills: ["Clean Architecture", "MVVM", "Layered Architecture", "SOLID"],
    },
    {
      title: "State Management",
      skills: ["GetX", "RxDart", "Provider"],
    },
    {
      title: "Networking & Backend",
      skills: ["REST APIs", "Dio", "Firebase (Auth, FCM)", "WebSockets", "WebView"],
    },
    {
      title: "Payments",
      skills: ["Stripe", "RevenueCat"],
    },
    {
      title: "Maps & Location",
      skills: ["Google Maps"],
    },
    {
      title: "Tools & IDEs",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Google Play", "App Store"],
    },
    {
      title: "Languages",
      skills: ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)"],
    },
  ],

  experience: [
    {
      company: "Softvence",
      role: "Mobile Application Developer",
      period: "Mar 2025 – Present",
      location: "Dhaka, Bangladesh",
      description: "Developing and maintaining production Flutter applications for iOS and Android using Clean Architecture, MVVM, and reactive state management.",
      responsibilities: [
        "Developed and maintained production Flutter applications for iOS and Android using Clean Architecture, MVVM, and reactive state management (GetX / RxDart).",
        "Owned end-to-end feature development including UI, REST API integration, authentication, push notifications, maps, payments, and subscriptions.",
        "Integrated Firebase services, Stripe payments, and real-time features across HealthTech, Fitness, Automotive, and business applications.",
        "Managed full release lifecycle and deployment to Google Play and App Store; collaborated with design, backend, and QA teams.",
      ],
      technologies: ["Flutter", "Dart", "Clean Architecture", "MVVM", "GetX", "RxDart", "Firebase", "Stripe", "REST APIs", "Google Play", "App Store"],
    },
    {
      company: "Cityscape International Ltd.",
      role: "Junior Flutter Developer (Intern)",
      period: "Dec 2024 – Feb 2025",
      location: "Dhaka, Bangladesh",
      description: "Built Flutter applications with responsive UI and Provider state management based on design specifications.",
      responsibilities: [
        "Built Flutter applications with responsive UI and Provider state management based on design specifications.",
        "Optimized application performance and reduced bundle size through code and asset optimization.",
        "Participated in Agile ceremonies, testing, and code reviews.",
      ],
      technologies: ["Flutter", "Dart", "Provider", "Performance Optimization", "Bundle Size Reduction", "Agile"],
    },
  ],

  education: [
    {
      institution: "Daffodil International University, Dhaka",
      degree: "B.Sc. in Computer Science & Engineering",
      field: "Computer Science & Engineering",
      period: "Aug 2019 – Oct 2024",
      location: "Dhaka, Bangladesh",
      description: "GPA: 3.05",
    },
    {
      institution: "Govt. Azizul Haque College, Bogura",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      period: "Jan 2017 – Apr 2018",
      location: "Bogura, Bangladesh",
      description: "GPA: 4.85",
    },
    {
      institution: "BIAM Model School & College, Bogura",
      degree: "Secondary School Certificate (SSC)",
      field: "Science",
      period: "Jan 2015 – Apr 2016",
      location: "Bogura, Bangladesh",
      description: "GPA: 5.00",
    },
  ],

  achievements: [
    {
      title: "16+ Production Releases",
      description: "Architected, published, and maintained 16+ production iOS & Android apps across Google Play and App Store.",
      icon: "rocket"
    },
    {
      title: "Performance & Bundle Optimization",
      description: "Reduced bundle sizes by 20% and improved frame-rendering metrics by 30% through memory profiling.",
      icon: "zap"
    },
    {
      title: "Architectural Consistency",
      description: "Standardized Clean Architecture, dependency injection, and reactive state management across multiple client products.",
      icon: "target"
    }
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

  featuredShowcase: [
    {
      id: "nutriprime-showcase",
      title: "Nutriprime",
      category: "Health & Wellness",
      subtitle: "Nutrition & Patient Care Platform",
      description: "A comprehensive health & wellness marketplace connecting nutritionists with patients. Features meal & recipe management, progress tracking, and dietary plan creation.",
      image: "/showcase/nutriprime/nutriprime-1.png",
      images: [
        "/showcase/nutriprime/nutriprime-1.png",
        "/showcase/nutriprime/nutriprime-2.png",
        "/showcase/nutriprime/nutriprime-3.png",
        "/showcase/nutriprime/nutriprime-4.png",
        "/showcase/nutriprime/nutriprime-5.png",
      ],
      imageLabels: [
        "Welcome Screen",
        "Home Dashboard",
        "Meal Plan",
        "Appointments",
        "Progress Photos",
      ],
      bgColor: "from-emerald-900/40 via-teal-950/60 to-[#0B1015]",
      appStoreUrl: "https://apps.apple.com/us/app/nutriprime/id6760328526",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.nutriprime.app",
    },
    {
      id: "bp-fitness-showcase",
      title: "BP Fitness",
      category: "Health & Fitness",
      subtitle: "Workouts & AI Meal Planning",
      description: "A results-driven fitness app with guided workouts, structured training plans, AI-powered meal planning, and in-app subscriptions.",
      image: "/bp-fitness-logo.png",
      images: [
        "/showcase/bp-fitness/bp-fitness-1.png",
        "/showcase/bp-fitness/bp-fitness-2.png",
        "/showcase/bp-fitness/bp-fitness-3.png",
        "/showcase/bp-fitness/bp-fitness-4.png",
        "/showcase/bp-fitness/bp-fitness-5.png",
      ],
      imageLabels: [
        "Your Fitness Hub",
        "Measure Your Progress",
        "Eat Smarter, Perform Better",
        "Join the Community",
        "Expert Workout Library",
      ],
      bgColor: "from-amber-900/40 via-slate-950/60 to-[#0B1015]",
      appStoreUrl: "https://apps.apple.com/us/app/bpfitnes/id6757735124",
    },
    {
      id: "castors-showcase",
      title: "CASTORS",
      category: "Food & Culinary AI",
      subtitle: "Smart AI Recipe & Meal Planner",
      description: "AI-driven culinary app that helps users cook with ingredients they have on hand, generating daily meal plans and step-by-step recipes.",
      image: "/castors-logo.png",
      images: [
        "/showcase/castors/castors-1.png",
        "/showcase/castors/castors-2.png",
        "/showcase/castors/castors-3.png",
        "/showcase/castors/castors-4.png",
        "/showcase/castors/castors-5.png",
      ],
      imageLabels: [
        "AI-Driven Smart Meal Planning",
        "Personalized Daily Recommendations",
        "AI-Powered Recipe Curator",
        "Cook Smarter with CASTORS",
        "Smart Meal Planning",
      ],
      bgColor: "from-amber-900/40 via-orange-950/60 to-[#0B1015]",
      appStoreUrl: "https://apps.apple.com/us/app/castors/id6760685124",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.victoria.castors",
    },
    {
      id: "registree-showcase",
      title: "Registree",
      category: "Lifestyle & Shopping",
      subtitle: "Baby Products & Registry App",
      description: "A trusted baby product registry & shopping platform featuring instant QR/barcode scanner, ingredient safety lookup, custom baby registries, and expert care guides.",
      image: "/registree-logo.png",
      images: [
        "/showcase/registree/registree-1.png",
        "/showcase/registree/registree-2.png",
        "/showcase/registree/registree-3.png",
        "/showcase/registree/registree-4.png",
        "/showcase/registree/registree-5.png",
      ],
      imageLabels: [
        "Search & Registry Products",
        "Item Safety & Ingredients Details",
        "Share Registry QR Code",
        "Ingredient Risk Analyzer",
        "Parenting Care Guides",
      ],
      bgColor: "from-teal-900/40 via-emerald-950/60 to-[#0B1015]",
      appStoreUrl: "https://apps.apple.com/us/app/registree-app/id6757942914",
    }
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

