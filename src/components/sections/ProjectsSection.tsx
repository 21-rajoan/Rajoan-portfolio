import { useState, useMemo } from "react";
import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { Search, Apple, PlayCircle, ExternalLink, List, LayoutGrid } from "lucide-react";

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(portfolioData.projects.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Filter projects
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter(project => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-16 relative bg-transparent">
      <div className="section-container relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center">
        
        <FadeIn>
          <div className="mb-8">
            <h2 className="font-mono text-white/80 text-sm md:text-base tracking-wide mb-2">
              work
            </h2>
            <div className="w-full h-px bg-secondary mb-8"></div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
              The Index
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl">
              12 Featured Case Studies — Selected production applications from 16+ live apps deployed (22+ apps built total).
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={100} direction="up">
          <div className="flex flex-col gap-6 mb-10">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                    activeCategory === cat 
                      ? "bg-card border-primary text-primary" 
                      : "bg-card border-border text-white/70 hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <div className="flex items-center gap-2 text-white/50 hidden sm:flex">
                <List size={20} className="text-white/80" />
                <LayoutGrid size={20} className="hover:text-white/80 cursor-pointer transition-colors" />
              </div>
              
              <div className="relative flex-grow">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                <input 
                  type="text" 
                  placeholder="Search apps..." 
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full bg-card border border-border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Results Counter */}
        <FadeIn delay={200} direction="up">
          <div className="text-white/60 text-sm font-mono mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
              Showing {filteredProjects.length} filtered apps (22+ built, 16+ deployed)
            </div>
          </div>
        </FadeIn>

        {/* Project List */}
        <div className="flex flex-col space-y-6">
          {filteredProjects.map((project, idx) => {
            const displayNumber = String(idx + 1).padStart(2, '0');
            
            // Derive generic letter for icon
            const letterIcon = project.title.charAt(0).toUpperCase();

            return (
              <FadeIn key={project.id || idx} delay={50} direction="up">
                <div className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors relative group">
                  
                  {/* Number tag */}
                  <span className="absolute top-6 right-6 font-mono text-white/30 text-xs">
                    {displayNumber}
                  </span>

                  <div className="flex items-start gap-6 mb-6">
                    {/* App Icon Placeholder */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#222F35] to-[#11181C] border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl font-bold text-white/80">{letterIcon}</span>
                      )}
                    </div>

                    <div className="flex-grow pt-1 sm:pt-2">
                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {project.title.split(" — ")[0]}
                      </h4>
                      <span className="text-[#F0803C] text-sm font-medium tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/70 text-base sm:text-lg mb-6 max-w-2xl">
                    {project.shortDescription}
                  </p>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.platform.map((plat, pIdx) => (
                      <span 
                        key={pIdx}
                        className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-white/80 text-xs font-medium"
                      >
                        {plat === 'ANDROID' ? 'Android' : plat === 'IOS' ? 'iOS' : plat === 'ANDROID TV' ? 'Android TV' : plat}
                      </span>
                    ))}
                  </div>

                  {/* Store Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.platform.includes('IOS') && (
                      <a href={project.appStoreUrl || project.liveUrl || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/30 border border-border text-white/90 text-sm font-medium hover:bg-secondary hover:text-white transition-colors group/btn">
                        <Apple size={16} className="opacity-70 group-hover/btn:opacity-100" />
                        App Store
                      </a>
                    )}
                    {(project.platform.includes('ANDROID') || project.platform.includes('ANDROID TV')) && (
                      <a href={project.playStoreUrl || project.liveUrl || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/30 border border-border text-white/90 text-sm font-medium hover:bg-secondary hover:text-white transition-colors group/btn">
                        <PlayCircle size={16} className="opacity-70 group-hover/btn:opacity-100 text-primary" />
                        Google Play
                      </a>
                    )}
                    {/* Fallback button if neither is explicitly defined */}
                    {!project.platform.includes('IOS') && !project.platform.includes('ANDROID') && !project.platform.includes('ANDROID TV') && (
                      <a href={project.liveUrl || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/30 border border-border text-white/90 text-sm font-medium hover:bg-secondary hover:text-white transition-colors group/btn">
                        <ExternalLink size={16} className="opacity-70 group-hover/btn:opacity-100" />
                        View Live
                      </a>
                    )}
                  </div>

                </div>
              </FadeIn>
            );
          })}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-white/50">
              No apps found matching your search.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
