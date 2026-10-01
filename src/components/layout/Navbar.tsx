import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import portfolioData from "@/data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navIds = portfolioData.navItems.map((item) => item.href);
  const activeSection = useScrollSpy(navIds, 100);

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
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/90 backdrop-blur-md border-b border-[#233554]/70 py-4 shadow-lg shadow-[#020C1B]/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <div
            className="cursor-pointer group flex items-center gap-3"
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-9 h-9 rounded border border-[#64FFDA]/50 flex items-center justify-center font-mono font-bold text-sm text-[#64FFDA] bg-[#112240] group-hover:border-[#64FFDA] transition-colors">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#CCD6F6] tracking-tight group-hover:text-[#64FFDA] transition-colors">
                {portfolioData.personal.firstName}{" "}
                <span className="text-[#8892B0] font-medium">{portfolioData.personal.lastName}</span>
              </span>
              <span className="font-mono text-[11px] text-[#64FFDA]/90 tracking-wider">
                // software engineer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {portfolioData.navItems.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-xs font-mono tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-[#64FFDA]"
                      : "text-[#CCD6F6] hover:text-[#64FFDA]"
                  }`}
                >
                  <span className="text-[#64FFDA] mr-1.5">{num}.</span>
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-r border-[#233554] pr-4">
              <a
                href={portfolioData.social.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors p-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.social.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors font-mono text-xs font-medium"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#64FFDA] hover:bg-[#112240] rounded focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#112240] border-b border-[#233554] px-6 py-6 shadow-2xl">
          <div className="space-y-4">
            {portfolioData.navItems.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-mono text-sm py-2 transition-colors ${
                    isActive ? "text-[#64FFDA]" : "text-[#CCD6F6] hover:text-[#64FFDA]"
                  }`}
                >
                  <span className="text-[#64FFDA] mr-2">{num}.</span>
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-[#233554] flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href={portfolioData.social.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors font-mono text-xs font-medium"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
