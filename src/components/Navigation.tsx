import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Published", href: "#published" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-nav shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          
          {/* Logo / Branding */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-gradient-to-tr from-[#4FC3F7] to-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg group">
                <Smartphone className="h-5.5 w-5.5 text-[#050816] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-wide leading-none">RAJOAN</span>
                <span className="text-[10px] text-[#00E5FF] tracking-wider uppercase font-semibold mt-1">Flutter Specialist</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block bg-slate-950/40 border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-md">
            <div className="flex items-center space-x-1">
              {navItems.map(item => (
                <button 
                  key={item.name} 
                  onClick={() => scrollToSection(item.href)} 
                  className="text-white/70 hover:text-[#00E5FF] hover:bg-white/5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Hire Me Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] hover:brightness-110 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl bg-slate-900 border border-white/5 text-white/80 hover:text-[#00E5FF] focus:outline-none transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/5 py-4 animate-scale-in">
          <div className="px-4 space-y-1">
            {navItems.map(item => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.href)} 
                className="text-white/80 hover:text-[#00E5FF] hover:bg-white/5 block px-4 py-3 text-sm font-semibold uppercase tracking-wider w-full text-left rounded-xl transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 px-2">
              <Button 
                className="bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
