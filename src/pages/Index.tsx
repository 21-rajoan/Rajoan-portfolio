import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Apple,
  PlayCircle,
  Download,
  Send,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
  Smartphone,
  Layers,
  Cpu,
  Rocket,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import portfolioData, { ShowcaseItem } from "@/data/portfolioData";

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="font-serif text-lg font-semibold text-[#f0f0f0] tracking-tight hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Rajoan<span className="text-[#e8a317]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#d4d4d4] hover:text-[#f0f0f0] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="nav-link text-base py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-28 pb-16"
    >
      {/* Eyebrow label */}
      <div className="eyebrow">
        <span className="eyebrow-line" />
        <span className="eyebrow-text">Software Engineer — Mobile Applications</span>
      </div>

      {/* Big headline */}
      <h1 className="display-heading text-4xl sm:text-6xl md:text-7xl mb-6 max-w-3xl font-normal leading-[1.12]">
        I build mobile apps that{" "}
        <span className="amber-italic">real businesses</span>{" "}
        rely on.
      </h1>

      {/* Subtext */}
      <p className="text-[#d4d4d4] text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal">
        Flutter, Swift &amp; Kotlin engineer specialized in Clean Architecture,
        real-time systems, and production-grade delivery across iOS and Android.
      </p>

      {/* Buttons + socials */}
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <a href="#projects" onClick={scrollToProjects} className="btn-amber">
          View Projects <ArrowDown size={15} />
        </a>
        <a
          href={portfolioData.personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <Download size={15} />
          Resume
        </a>

        <div className="flex items-center gap-3 ml-2">
          <a
            href="https://github.com/21-rajoan"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#a3a3a3] hover:text-[#f0f0f0] border border-[#202020] hover:border-[#333] hover:bg-[#141414] transition-all"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#a3a3a3] hover:text-[#f0f0f0] border border-[#202020] hover:border-[#333] hover:bg-[#141414] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-[#1a1a1a] pt-8 max-w-3xl">
        {[
          { value: "2+", label: "Years Experience" },
          { value: "12+", label: "Production Apps" },
          { value: "iOS & Android", label: "Platforms Supported" },
          { value: "Dhaka / Remote", label: "Availability" },
        ].map((stat) => (
          <div key={stat.label}>
            <p
              className="text-2xl md:text-3xl font-bold text-[#f0f0f0]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {stat.value}
            </p>
            <p className="text-[11px] uppercase tracking-wider text-[#a3a3a3] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────── */
const featureCards = [
  {
    icon: <Smartphone size={20} className="text-[#e8a317]" />,
    title: "Flutter & Native",
    desc: "Deep expertise in Flutter for high-performance cross-platform apps, plus native Swift & Kotlin bridges for hardware-level capabilities and platform excellence.",
  },
  {
    icon: <Layers size={20} className="text-[#e8a317]" />,
    title: "Clean Architecture",
    desc: "Scalable, testable codebases built with MVVM, SOLID principles, and clear layer boundaries. Maintainable systems engineered to scale.",
  },
  {
    icon: <Cpu size={20} className="text-[#e8a317]" />,
    title: "Real-Time & Systems",
    desc: "Production-tested WebSockets, WebRTC streaming, offline synchronization, and resilient payment gateway integrations.",
  },
  {
    icon: <Rocket size={20} className="text-[#e8a317]" />,
    title: "Ship to Production",
    desc: "End-to-end ownership from concept to App Store & Google Play delivery, automated CI/CD pipelines, and Shorebird OTA binary updates.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">About Me</span>
        </div>

        <h2 className="display-heading text-4xl md:text-5xl mb-6">
          Building apps that <span className="amber-italic">matter.</span>
        </h2>

        <p className="text-[#d4d4d4] text-base md:text-lg leading-relaxed max-w-3xl mb-14 font-normal">
          I'm Rajoan Tamjid Antor — a Software Engineer specializing in cross-platform mobile
          applications for iOS and Android. With a B.Sc. in Computer Science &amp; Engineering,
          I focus on delivering production-ready apps using Flutter, Swift, and Kotlin.
          I've shipped 12+ apps across healthtech, automotive, e-commerce, entertainment,
          and AI-driven platforms — apps that real businesses and real users depend on every day.
        </p>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((card) => (
            <div key={card.title} className="card p-6 flex flex-col justify-between">
              <div>
                {/* Icon square */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(232,163,23,0.1)", border: "1px solid rgba(232,163,23,0.18)" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[#f0f0f0] font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-[#d4d4d4] text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROJECTS SECTION
───────────────────────────────────────────── */
const projects = [
  {
    id: "nutriprime",
    category: "Health & Wellness",
    title: "Nutriprime",
    desc: "Healthcare marketplace connecting nutritionists with patients — custom meal plans, progress tracking, and Stripe payment processing.",
    tech: ["Flutter", "Firebase", "Stripe", "GetX"],
    appStore: "https://apps.apple.com/us/app/nutriprime/id6760328526",
    playStore: "https://play.google.com/store/apps/details?id=com.nutriprime.app",
    image: "/nutriprime-logo.png",
    showcaseId: "nutriprime-showcase",
  },
  {
    id: "bp-fitness",
    category: "Health & Fitness",
    title: "BP Fitness — Workouts & AI Meal Plans",
    desc: "Fitness app with guided workouts, AI-powered meal planning, and auto-renewing Apple In-App Subscriptions.",
    tech: ["Flutter", "Swift", "In-App Purchases", "Firebase"],
    appStore: "https://apps.apple.com/us/app/bpfitnes/id6757735124",
    image: "/bp-fitness-logo.png",
    showcaseId: "bp-fitness-showcase",
  },
  {
    id: "castors",
    category: "Culinary AI",
    title: "CASTORS — Smart AI Recipe & Meal Planner",
    desc: "AI-driven culinary app that generates step-by-step recipes from ingredients on hand, with personalized daily meal recommendations.",
    tech: ["Flutter", "AI Engine", "GetX", "RxDart"],
    appStore: "https://apps.apple.com/us/app/castors/id6760685124",
    playStore: "https://play.google.com/store/apps/details?id=com.victoria.castors",
    image: "/castors-logo.png",
    showcaseId: "castors-showcase",
  },
  {
    id: "registree",
    category: "Lifestyle & Shopping",
    title: "Registree — Baby Products & Registry",
    desc: "Baby product registry with instant barcode/QR scanning for ingredient safety lookups, certifications, and push notifications.",
    tech: ["Flutter", "Barcode Scanner", "Firebase FCM", "GetX"],
    appStore: "https://apps.apple.com/us/app/registree-app/id6757942914",
    image: "/registree-logo.png",
    showcaseId: "registree-showcase",
  },
  {
    id: "my-carmate",
    category: "Automotive & Services",
    title: "My CarMate — Service Booking",
    desc: "Automotive service booking with real-time WebSockets sync, interactive scheduling calendars, and OTP authentication.",
    tech: ["Flutter", "WebSockets", "Clean Architecture", "Firebase"],
    appStore: "https://apps.apple.com/us/app/my-carmate-app/id6759544455",
    image: "/carmate-logo.png",
  },
  {
    id: "theakktricks",
    category: "Entertainment & Social",
    title: "Theakktricks — Live Acting Platform",
    desc: "Social entertainment platform for recreating movie scenes, live video streaming, and real-time community interactions.",
    tech: ["Flutter", "Live Streaming", "WebSockets", "Camera API"],
    appStore: "https://apps.apple.com/us/app/theakktricks/id6777671595",
    playStore: "https://play.google.com/store/apps/details?id=com.jgate.theakktricksapplications",
    image: "/theakktricks-logo.png",
  },
  {
    id: "lifresh",
    category: "E-Commerce & Delivery",
    title: "Lifresh — Fresh Grocery Delivery",
    desc: "Personalized grocery delivery app with preference-based filtering, one-tap checkout, and instant order tracking.",
    tech: ["Flutter", "Push Notifications", "Firebase", "REST API"],
    appStore: "https://apps.apple.com/us/app/lifresh/id6758229966",
    playStore: "https://play.google.com/store/apps/details?id=com.lifresh.app",
    image: "/lifresh-logo.png",
  },
  {
    id: "storybun",
    category: "Education & AI",
    title: "StoryBun — Learn Chinese with AI",
    desc: "Language learning app generating custom stories with Hanzi characters and Pinyin annotations, plus tier subscriptions.",
    tech: ["Flutter", "AI Story Engine", "Subscriptions", "Firebase"],
    appStore: "https://apps.apple.com/kz/app/storybun/id6749784590",
    playStore: "https://play.google.com/store/apps/details?id=com.storybun.app",
    image: "/storybun-logo.png",
  },
  {
    id: "foodlab-hub",
    category: "Food Marketplace",
    title: "FoodLab Hub — Local Food Marketplace",
    desc: "Community marketplace connecting home chefs with buyers via live discovery maps, meal ordering, and seller store management.",
    tech: ["Flutter", "Live Maps", "Order Management", "Firebase"],
    appStore: "https://apps.apple.com/gb/app/foodlab-hub/id6757672979",
    playStore: "https://play.google.com/store/apps/details?id=com.foodlab.hub",
    image: "/foodlab-logo.png",
  },
  {
    id: "my-wedding-music",
    category: "Lifestyle & Events",
    title: "My Wedding Music — Soundtrack Planner",
    desc: "Ceremony soundtrack planner — structure key moments, link Spotify/YouTube tracks, and export formatted PDF playlists.",
    tech: ["Flutter", "PDF Generation", "Spotify API", "GetX"],
    appStore: "https://apps.apple.com/us/app/my-wedding-music/id6747335876",
    playStore: "https://play.google.com/store/apps/details?id=com.my_weeding_music.app",
    image: "/my-wedding-music-logo.png",
  },
  {
    id: "jjs-firewood",
    category: "Logistics & Delivery",
    title: "JJ's Firewood Perth",
    desc: "On-demand firewood ordering and delivery across Perth with transparent pricing, live tracking, and weekly giveaways.",
    tech: ["Flutter", "Live Tracking", "Order Management", "REST API"],
    appStore: "https://apps.apple.com/us/app/jjs-firewood-perth/id6756213648",
    playStore: "https://play.google.com/store/apps/details?id=com.firewood.perth",
    image: "/jjs-firewood-logo.png",
  },
  {
    id: "bingeboss",
    category: "Finance & Utility",
    title: "BingeBoss — Subscription Tracker",
    desc: "Subscription and expense tracker that aggregates recurring memberships, sends smart reminders, and manages RevenueCat tiers.",
    tech: ["Flutter", "RevenueCat", "Firebase", "Push Notifications"],
    appStore: "https://apps.apple.com/us/app/bingeboss/id6758284339",
    image: "/bingeboss-logo.png",
  },
];

function ProjectsSection() {
  const [showcaseItem, setShowcaseItem] = useState<ShowcaseItem | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Health & AI", "Commerce", "Entertainment", "Education"];

  const filterMap: Record<string, string[]> = {
    "Health & AI": ["nutriprime", "bp-fitness", "castors", "storybun"],
    "Commerce": ["registree", "my-carmate", "lifresh", "foodlab-hub", "jjs-firewood", "my-wedding-music", "bingeboss"],
    "Entertainment": ["theakktricks"],
    "Education": ["storybun"],
  };

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => filterMap[activeFilter]?.includes(p.id));

  const openShowcase = (showcaseId?: string) => {
    if (!showcaseId) return;
    const item = (portfolioData.featuredShowcase || []).find((s) => s.id === showcaseId);
    if (item) { setShowcaseItem(item); setImgIndex(0); }
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Case Studies</span>
            </div>
            <h2 className="display-heading text-4xl md:text-5xl">
              Production apps, <span className="amber-italic">real impact.</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 pb-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="text-[11px] font-semibold tracking-wide px-4 py-1.5 rounded-full transition-all duration-200"
                style={{
                  background: activeFilter === f ? "#e8a317" : "transparent",
                  color: activeFilter === f ? "#0a0a0a" : "#606060",
                  border: activeFilter === f ? "1px solid #e8a317" : "1px solid #202020",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Column headers (Desktop) ── */}
        <div className="hidden md:grid grid-cols-[28px_48px_1fr_auto] gap-5 md:gap-7 px-5 mb-2 pb-3 border-b border-[#181818]">
          <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest">#</span>
          <span />
          <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest">Project</span>
          <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest pr-2">Links</span>
        </div>

        {/* ── Project rows ── */}
        <div className="divide-y divide-[#161616]">
          {filtered.map((project, idx) => {
            const primaryLink = project.appStore || project.playStore || "#";
            return (
              <div
                key={project.id}
                className="group relative flex items-start gap-4 md:gap-7 px-4 md:px-5 py-5 -mx-4 md:-mx-5 transition-all duration-200 cursor-default rounded-xl hover:bg-[#121212] border border-transparent hover:border-[#1e1e1e]"
              >
                {/* Amber accent left bar on hover */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ background: "linear-gradient(to bottom, #e8a317, transparent)" }}
                />

                {/* Index */}
                <span className="hidden md:block w-7 flex-shrink-0 text-[11px] font-mono text-[#333] group-hover:text-[#a3a3a3] transition-colors duration-200 pt-1 select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* App icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden transition-all duration-200 group-hover:scale-105"
                  style={{ background: "#161616", border: "1px solid #222" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category + title row */}
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase flex-shrink-0" style={{ color: "#e8a317" }}>
                      {project.category}
                    </span>
                    <span className="text-[#333] text-xs">·</span>
                    <h3 className="text-[15px] font-semibold text-[#e0e0e0] group-hover:text-[#ffffff] transition-colors duration-150 leading-snug">
                      <a href={primaryLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        {project.title}
                      </a>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-[#cccccc] group-hover:text-[#d4d4d4] leading-relaxed mb-3 max-w-2xl transition-colors duration-200 font-normal">
                    {project.desc}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-[3px] rounded-full font-medium"
                        style={{
                          background: "#161616",
                          border: "1px solid #222222",
                          color: "#606060",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Action buttons ── */}
                <div className="flex-shrink-0 flex flex-col sm:flex-row items-end sm:items-center gap-1.5 self-start pt-0.5 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                  {project.showcaseId && (
                    <button
                      onClick={() => openShowcase(project.showcaseId)}
                      title="View Screenshots"
                      className="flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150"
                      style={{ background: "rgba(232,163,23,0.1)", color: "#e8a317", border: "1px solid rgba(232,163,23,0.22)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                      Preview
                    </button>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150 hover:text-[#e8a317]"
                      style={{ background: "#161616", color: "#d4d4d4", border: "1px solid #242424" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,163,23,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#242424"; }}
                    >
                      <Apple size={11} strokeWidth={1.8} /> App Store
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-150 hover:text-[#e8a317]"
                      style={{ background: "#161616", color: "#d4d4d4", border: "1px solid #242424" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,163,23,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#242424"; }}
                    >
                      <PlayCircle size={11} strokeWidth={1.8} /> Play
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Count */}
        <p className="text-[11px] font-mono text-[#383838] mt-8 text-right tracking-wider">
          {filtered.length} / {projects.length} apps shown
        </p>
      </div>

      {/* ── Screenshot Showcase Modal ── */}
      {showcaseItem?.images && showcaseItem.images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setShowcaseItem(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#101010", border: "1px solid #222222" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1c1c1c]">
              <div className="flex items-center gap-3">
                <img
                  src={projects.find((p) => `${p.id}-showcase` === showcaseItem.id)?.image || ""}
                  alt=""
                  className="w-8 h-8 rounded-lg object-cover"
                  style={{ border: "1px solid #282828" }}
                />
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] uppercase" style={{ color: "#e8a317" }}>
                    {showcaseItem.category}
                  </p>
                  <p className="text-[#f0f0f0] font-semibold text-sm mt-0.5">
                    {showcaseItem.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowcaseItem(null)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#a3a3a3] hover:text-[#eee] hover:bg-[#1a1a1a] transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Image viewer */}
            <div className="relative bg-[#060606] h-[460px] flex items-center justify-center">
              <img
                src={showcaseItem.images[imgIndex]}
                alt={`${showcaseItem.title} — screen ${imgIndex + 1}`}
                className="h-full w-full object-contain"
              />
              {showcaseItem.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIndex((imgIndex - 1 + showcaseItem.images!.length) % showcaseItem.images!.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#141414] border border-[#2a2a2a] text-[#d4d4d4] hover:text-[#f0f0f0] hover:border-[#8a8a8a]"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setImgIndex((imgIndex + 1) % showcaseItem.images!.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#141414] border border-[#2a2a2a] text-[#d4d4d4] hover:text-[#f0f0f0] hover:border-[#8a8a8a]"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
              {/* Pill dots */}
              {showcaseItem.images.length > 1 && (
                <div className="absolute bottom-4 flex gap-1.5 left-0 right-0 justify-center">
                  {showcaseItem.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: i === imgIndex ? 20 : 6,
                        height: 6,
                        background: i === imgIndex ? "#e8a317" : "#2d2d2d",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#1c1c1c]">
              <span className="text-[11px] text-[#8a8a8a]">
                {showcaseItem.imageLabels?.[imgIndex] ?? ""}
              </span>
              <span className="text-[11px] font-mono" style={{ color: "#e8a317" }}>
                {imgIndex + 1} / {showcaseItem.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPERIENCE SECTION
───────────────────────────────────────────── */
const experiences = [
  {
    company: "Softvence",
    role: "Mobile Application Developer",
    period: "Mar 2025 — Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Architect and maintain production-grade cross-platform mobile apps for iOS and Android using Clean Architecture, MVVM, and reactive state management (GetX, RxDart, Provider).",
      "Engineered real-time features — low-latency WebSockets, WebRTC audio/video streaming, push notifications, and full payment integration (Stripe, Apple Pay, Google Pay).",
      "Manage end-to-end App Store and Google Play releases with CI/CD pipelines and Shorebird OTA binary updates.",
    ],
    tech: ["Flutter", "Dart", "Swift", "Kotlin", "WebRTC", "Stripe", "Shorebird"],
  },
  {
    company: "Cityscape International Ltd.",
    role: "Jr. Flutter Developer (Intern)",
    period: "Dec 2024 — Feb 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Built responsive mobile UI with Provider state management following modular design specifications.",
      "Improved runtime performance by 30% and reduced bundle sizes by 20% through memory profiling and asset optimization.",
      "Participated in Agile stand-ups, sprint planning, and peer code reviews with backend and design teams.",
    ],
    tech: ["Flutter", "Provider", "Dart", "Performance Optimization"],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Work History</span>
        </div>
        <h2 className="display-heading text-4xl md:text-5xl mb-14">
          Where I've <span className="amber-italic">built.</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-[#f0f0f0] font-semibold text-lg">{exp.role}</h3>
                  <p className="text-[#e8a317] text-sm font-medium mt-0.5">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-xs text-[#606060]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {exp.period}
                  </div>
                  <p className="text-xs text-[#8a8a8a]">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[#d4d4d4] leading-relaxed">
                    <span className="text-[#e8a317] mt-1 flex-shrink-0 text-[9px]">●</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="mt-8 card p-6 md:p-7">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#e8a317] mb-3">Education</p>
          <div className="flex flex-col gap-3">
            {portfolioData.education.map((edu) => (
              <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <p className="text-[#f0f0f0] font-medium text-sm">{edu.degree}</p>
                  <p className="text-[#a3a3a3] text-xs">{edu.institution}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs text-[#a3a3a3] font-mono">{edu.period}</p>
                  {edu.description && <p className="text-xs text-[#e8a317] mt-0.5">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SKILLS SECTION
───────────────────────────────────────────── */
const skillColumns = [
  {
    title: "Core Engineering",
    items: [
      "Flutter & Dart (production cross-platform apps)",
      "Swift & Kotlin (native iOS/Android bridges)",
      "State Management: GetX, Riverpod, BLoC, Provider",
      "API Integration with interceptors, retries & caching",
      "Firebase (Auth, Firestore, FCM, Cloud Storage)",
    ],
  },
  {
    title: "Systems & Architecture",
    items: [
      "Clean Architecture with modular, scalable codebases",
      "MVVM & SOLID design principles",
      "Feature-first project structure",
      "Offline-first design with local caching strategies",
      "Dependency injection & testable code",
    ],
  },
  {
    title: "Integrations & Real-World Systems",
    items: [
      "Payment Gateways: Stripe, Apple Pay, Google Pay",
      "In-App Purchases & RevenueCat subscriptions",
      "WebSockets & WebRTC for real-time communication",
      "Barcode/QR scanning & device hardware APIs",
      "Live maps, GPS tracking & geofencing",
    ],
  },
  {
    title: "Deployment & Ownership",
    items: [
      "App Store & Google Play publishing (end-to-end)",
      "Shorebird OTA binary updates",
      "CI/CD pipeline setup & release management",
      "Performance profiling & bundle optimization",
      "Full lifecycle ownership (spec → production)",
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Technical Depth</span>
        </div>
        <h2 className="display-heading text-4xl md:text-5xl mb-14">
          Not skill bars — <span className="amber-italic">real capabilities.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillColumns.map((col) => (
            <div key={col.title} className="card p-6 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#e8a317] mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#d4d4d4] leading-relaxed font-normal">
                      <span className="text-[#e8a317] mt-1.5 flex-shrink-0 text-[7px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────── */
function ContactSection() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent", description: "I'll get back to you shortly." });
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg text-sm text-[#f0f0f0] placeholder:text-[#8a8a8a] bg-[#141414] border border-[#222222] focus:outline-none focus:border-[#e8a317] transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#181818] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Let's Talk</span>
            </div>
            <h2 className="display-heading text-4xl md:text-5xl mb-5">
              Got a project?<br />
              <span className="amber-italic">Let's build it.</span>
            </h2>
            <p className="text-[#d4d4d4] text-base leading-relaxed mb-8 max-w-sm font-normal">
              I'm open to full-time engineering roles, mobile architecture contracts,
              and high-impact collaborations. If you're building something real — let's connect.
            </p>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline mb-8 w-fit"
            >
              <Download size={14} /> Download Resume
            </a>

            <div className="space-y-3 mt-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-3 text-sm text-[#d4d4d4] hover:text-[#e8a317] transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                {portfolioData.personal.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <Phone size={15} strokeWidth={1.5} />
                {portfolioData.personal.phone}
              </div>
              <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <MapPin size={15} strokeWidth={1.5} />
                {portfolioData.personal.location} · Remote available
              </div>
            </div>

            <div className="flex items-center gap-4 mt-7">
              <a
                href="https://github.com/21-rajoan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#a3a3a3] hover:text-[#e0e0e0] border border-[#202020] hover:border-[#333] px-3 py-1.5 rounded-lg bg-[#141414] transition-all"
              >
                <Github size={14} strokeWidth={1.5} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#a3a3a3] hover:text-[#e0e0e0] border border-[#202020] hover:border-[#333] px-3 py-1.5 rounded-lg bg-[#141414] transition-all"
              >
                <Linkedin size={14} strokeWidth={1.5} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
            <div>
              <label className="block text-[11px] text-[#606060] mb-1.5 uppercase tracking-widest font-semibold">Name</label>
              <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label className="block text-[11px] text-[#606060] mb-1.5 uppercase tracking-widest font-semibold">Email</label>
              <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" className={inputCls} />
            </div>
            <div>
              <label className="block text-[11px] text-[#606060] mb-1.5 uppercase tracking-widest font-semibold">Message</label>
              <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder="Tell me about your project..." className={inputCls + " resize-none"} />
            </div>
            <button type="submit" disabled={sending} className="btn-amber w-full justify-center mt-2">
              <Send size={14} strokeWidth={1.6} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-10 border-t border-[#181818] bg-[#070707]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#8a8a8a]">
          © {new Date().getFullYear()} Rajoan Tamjid Antor. All rights reserved.
        </p>
        <p className="text-xs text-[#303030]">
          Crafted with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────── */
const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#909090] relative selection:bg-[#e8a317]/25 selection:text-[#e8a317] overflow-x-hidden">
      {/* Master ambient warm amber glow top right */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[600px] md:w-[900px] h-[600px] md:h-[900px] -z-10 opacity-70"
        style={{
          background: "radial-gradient(circle 800px at 85% 15%, rgba(232, 163, 23, 0.08) 0%, rgba(200, 130, 10, 0.02) 50%, transparent 70%)",
        }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
