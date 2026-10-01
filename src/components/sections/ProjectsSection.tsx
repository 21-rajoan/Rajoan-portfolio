import { useState } from "react";
import {
  Apple,
  PlayCircle,
  ArrowUpRight,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import portfolioData, { ShowcaseItem } from "@/data/portfolioData";

const allProjects = [
  {
    id: "nutriprime",
    title: "Nutriprime",
    category: "Health & Wellness",
    tag: "Health & AI",
    description:
      "Healthcare marketplace connecting nutritionists with patients — custom meal plans, progress tracking, and Stripe payment processing.",
    technologies: ["Flutter", "Clean Architecture", "Stripe", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "lightuptech")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "lightuptech")?.playStoreUrl,
    image: "/nutriprime-logo.png",
    featured: true,
    showcaseId: "nutriprime-showcase",
  },
  {
    id: "bp-fitness",
    title: "BP Fitness",
    category: "Health & Fitness",
    tag: "Health & AI",
    description:
      "Fitness app with structured workout programs, AI-powered meal planning, and Apple In-App Purchases for auto-renewing subscriptions.",
    technologies: ["Flutter", "Swift", "In-App Purchases", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "bp-fitness")?.appStoreUrl,
    image: "/bp-fitness-logo.png",
    featured: true,
    showcaseId: "bp-fitness-showcase",
  },
  {
    id: "castors",
    title: "CASTORS",
    category: "Culinary AI",
    tag: "Health & AI",
    description:
      "AI-driven recipe assistant that generates structured, step-by-step culinary instructions from ingredients on hand.",
    technologies: ["Flutter", "AI Engine", "GetX", "Dio"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "castors")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "castors")?.playStoreUrl,
    image: "/castors-logo.png",
    featured: true,
    showcaseId: "castors-showcase",
  },
  {
    id: "my-carmate",
    title: "My CarMate",
    category: "Automotive & Services",
    tag: "Commerce",
    description:
      "Automotive service booking with real-time WebSockets sync, interactive scheduling calendars, and OTP authentication.",
    technologies: ["Flutter", "WebSockets", "Clean Architecture", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "my-carmate")?.appStoreUrl,
    image: "/carmate-logo.png",
    featured: true,
  },
  {
    id: "registree",
    title: "Registree",
    category: "Product Registry",
    tag: "Commerce",
    description:
      "Baby product registry with instant barcode/QR scanning for ingredient safety lookups, certifications, and push notifications.",
    technologies: ["Flutter", "Barcode Scanner", "Firebase FCM", "GetX"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "registree")?.appStoreUrl,
    image: "/registree-logo.png",
    featured: true,
    showcaseId: "registree-showcase",
  },
  {
    id: "theakktricks",
    title: "Theakktricks",
    category: "Entertainment & Media",
    tag: "Media & Lifestyle",
    description:
      "Social entertainment platform with custom in-app video recording, live streaming, and real-time community interactions via WebSockets.",
    technologies: ["Flutter", "Live Streaming", "WebSockets", "Camera API"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "theakktricks")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "theakktricks")?.playStoreUrl,
    image: "/theakktricks-logo.png",
    featured: true,
  },
  {
    id: "lifresh",
    title: "Lifresh",
    category: "E-Commerce & Delivery",
    tag: "Commerce",
    description:
      "Fresh grocery delivery app with personalized product filtering, one-tap checkout, and instant order tracking.",
    technologies: ["Flutter", "E-Commerce", "Push Notifications", "REST API"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "lifresh")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "lifresh")?.playStoreUrl,
    image: "/lifresh-logo.png",
    featured: true,
  },
  {
    id: "storybun",
    title: "StoryBun",
    category: "Education & AI",
    tag: "Health & AI",
    description:
      "Interactive language learning app generating custom stories with Hanzi characters, Pinyin annotations, and tier subscriptions.",
    technologies: ["Flutter", "AI Story Engine", "In-App Subscriptions", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "storybun")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "storybun")?.playStoreUrl,
    image: "/storybun-logo.png",
    featured: true,
  },
  {
    id: "my-wedding-music",
    title: "My Wedding Music",
    category: "Lifestyle & Events",
    tag: "Media & Lifestyle",
    description:
      "Ceremony soundtrack planner — structure key moments, link Spotify/YouTube tracks, and export formatted PDF playlists.",
    technologies: ["Flutter", "PDF Generation", "Spotify API", "GetX"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "my-wedding-music")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "my-wedding-music")?.playStoreUrl,
    image: "/my-wedding-music-logo.png",
    featured: false,
  },
  {
    id: "foodlab-hub",
    title: "FoodLab Hub",
    category: "Food Marketplace",
    tag: "Commerce",
    description:
      "Community food marketplace connecting home chefs with buyers via live discovery maps, meal pre-ordering, and store management.",
    technologies: ["Flutter", "Live Maps", "Order Management", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "foodlab-hub")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "foodlab-hub")?.playStoreUrl,
    image: "/foodlab-logo.png",
    featured: false,
  },
  {
    id: "jjs-firewood",
    title: "JJ's Firewood Perth",
    category: "Logistics & Delivery",
    tag: "Commerce",
    description:
      "On-demand ordering and delivery platform for premium firewood across Perth, with transparent pricing and live status tracking.",
    technologies: ["Flutter", "Live Tracking", "Order Management", "REST API"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "jjs-firewood")?.appStoreUrl,
    playStoreUrl: portfolioData.projects.find((p) => p.id === "jjs-firewood")?.playStoreUrl,
    image: "/jjs-firewood-logo.png",
    featured: false,
  },
  {
    id: "bingeboss",
    title: "BingeBoss",
    category: "Finance & Utility",
    tag: "Media & Lifestyle",
    description:
      "Subscription tracker that aggregates recurring digital memberships, sends smart expiration reminders, and manages RevenueCat tiers.",
    technologies: ["Flutter", "RevenueCat", "Push Notifications", "Firebase"],
    appStoreUrl: portfolioData.projects.find((p) => p.id === "bingeboss")?.appStoreUrl,
    image: "/bingeboss-logo.png",
    featured: false,
  },
];

const filterTabs = [
  { label: "All", value: "All" },
  { label: "Featured", value: "Featured" },
  { label: "Health & AI", value: "Health & AI" },
  { label: "Commerce", value: "Commerce" },
  { label: "Media & Lifestyle", value: "Media & Lifestyle" },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedShowcase, setSelectedShowcase] = useState<ShowcaseItem | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const filtered = allProjects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.tag === activeFilter;
  });

  const openShowcase = (showcaseId?: string) => {
    if (!showcaseId) return;
    const item = (portfolioData.featuredShowcase || []).find((s) => s.id === showcaseId);
    if (item) {
      setSelectedShowcase(item);
      setActiveScreenIndex(0);
    }
  };

  return (
    <section
      id="projects"
      className="mb-20 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="Projects"
    >
      {/* Section header row */}
      <div className="flex items-baseline justify-between mb-7">
        <h2 className="section-label !mb-0">Projects</h2>
        <span className="hidden sm:block text-[11px] font-mono text-[#4a5c78]">
          {filtered.length} of {allProjects.length}
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-3.5 py-1.5 rounded-sm text-[11px] font-mono tracking-wide transition-all duration-150 ${
              activeFilter === tab.value
                ? "text-[#0A192F] bg-[#64FFDA] font-semibold"
                : "text-[#4a5c78] bg-transparent border border-[#1a2e50] hover:text-[#8892B0] hover:border-[#233554]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="space-y-4">
        {filtered.map((project) => {
          const primaryLink = project.appStoreUrl || project.playStoreUrl || "#";

          return (
            <div key={project.id} className="project-card group">
              <div className="flex items-start justify-between gap-4">

                {/* Left: icon + meta */}
                <div className="flex items-start gap-4">
                  {/* App icon */}
                  <div className="w-[46px] h-[46px] rounded-xl overflow-hidden border border-[#1a2e50] bg-[#091829] flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title + category */}
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono tracking-[0.12em] text-[#4a5c78] uppercase mb-0.5">
                      {project.category}
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#CCD6F6] leading-snug">
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[#64FFDA] transition-colors duration-150"
                      >
                        {project.title}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 group-hover:opacity-60 -translate-y-0.5 translate-x-0.5 transition-all duration-150"
                        />
                      </a>
                    </h3>
                  </div>
                </div>

                {/* Right: store links */}
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                  {project.showcaseId && (
                    <button
                      onClick={() => openShowcase(project.showcaseId)}
                      title="View Screenshots"
                      className="p-1.5 rounded text-[#4a5c78] hover:text-[#64FFDA] hover:bg-[#64FFDA]/8 transition-all duration-150"
                    >
                      <ImageIcon size={14} strokeWidth={1.6} />
                    </button>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="App Store"
                      className="p-1.5 rounded text-[#4a5c78] hover:text-[#8892B0] hover:bg-[#1a2e50] transition-all duration-150"
                    >
                      <Apple size={14} strokeWidth={1.6} />
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Google Play"
                      className="p-1.5 rounded text-[#4a5c78] hover:text-[#8892B0] hover:bg-[#1a2e50] transition-all duration-150"
                    >
                      <PlayCircle size={14} strokeWidth={1.6} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-[13px] text-[#8892B0] leading-[1.7] pl-[62px]">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 pl-[62px] flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-[3px] rounded-sm text-[11px] font-mono
                               text-[#4a5c78] bg-[#091829] border border-[#1a2e50]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Showcase Modal ── */}
      {selectedShowcase?.images && selectedShowcase.images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-[#0A192F]/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedShowcase(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#0d1f3c] border border-[#1e3358] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2e50]">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono tracking-widest text-[#64FFDA] uppercase">
                  Showcase
                </span>
                <span className="text-[#1e3358]">·</span>
                <span className="text-[13px] font-semibold text-[#CCD6F6]">
                  {selectedShowcase.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedShowcase(null)}
                aria-label="Close"
                className="p-1 rounded text-[#4a5c78] hover:text-[#8892B0] transition-colors"
              >
                <X size={16} strokeWidth={1.6} />
              </button>
            </div>

            {/* Image */}
            <div className="relative bg-[#091829] h-[380px] sm:h-[460px] flex items-center justify-center">
              <img
                src={selectedShowcase.images[activeScreenIndex]}
                alt={`${selectedShowcase.title} screen ${activeScreenIndex + 1}`}
                className="h-full w-full object-contain"
              />

              {selectedShowcase.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveScreenIndex(
                        (activeScreenIndex - 1 + selectedShowcase.images!.length) %
                          selectedShowcase.images!.length
                      )
                    }
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d1f3c]/80 border border-[#1e3358] text-[#8892B0] hover:text-[#CCD6F6] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveScreenIndex(
                        (activeScreenIndex + 1) % selectedShowcase.images!.length
                      )
                    }
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d1f3c]/80 border border-[#1e3358] text-[#8892B0] hover:text-[#CCD6F6] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-[#1a2e50]">
              <span className="text-[11px] font-mono text-[#4a5c78]">
                {selectedShowcase.imageLabels?.[activeScreenIndex]}
              </span>
              <span className="text-[11px] font-mono text-[#64FFDA]">
                {activeScreenIndex + 1} / {selectedShowcase.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
