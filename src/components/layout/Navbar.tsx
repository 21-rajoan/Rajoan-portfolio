import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import portfolioData from "@/data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navIds = portfolioData.navItems.map((item) => item.href);
  const activeSection = useScrollSpy(navIds, 120);

  // Handle navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Small offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight tracking-tight">
                {portfolioData.personal.firstName}{" "}
                <span className="text-primary">{portfolioData.personal.lastName}</span>
              </span>
              <span className="text-mono-label text-[10px] hidden sm:block">
                // {portfolioData.personal.role.toLowerCase()}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {portfolioData.navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 border-r border-border pr-4 mr-1">
              <a
                href={portfolioData.social.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.social.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="btn-outline h-9"
              asChild
            >
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} className="mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <div className="space-y-1">
            {portfolioData.navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.href
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary border-l-2 border-transparent"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-border flex flex-col space-y-4">
            <div className="flex justify-center space-x-6">
              <a
                href={portfolioData.social.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-full"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <Button className="btn-primary w-full" asChild>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="mr-2" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
