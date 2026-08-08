import portfolioData from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0F11] border-t border-[#222F35] py-12 relative z-10">
      <div className="section-container max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-white font-bold text-lg tracking-tight">
            {portfolioData.personal.name}
          </span>
          <span className="text-white/50 text-xs font-mono">
            {portfolioData.personal.role} • {portfolioData.personal.location}
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center space-x-4">
          <a
            href={portfolioData.social.find((s) => s.platform === "GitHub")?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#11181C] border border-[#222F35] flex items-center justify-center text-white/70 hover:text-[#00E59B] hover:border-[#00E59B]/50 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioData.social.find((s) => s.platform === "LinkedIn")?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#11181C] border border-[#222F35] flex items-center justify-center text-white/70 hover:text-[#00E59B] hover:border-[#00E59B]/50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-10 h-10 rounded-xl bg-[#11181C] border border-[#222F35] flex items-center justify-center text-white/70 hover:text-[#00E59B] hover:border-[#00E59B]/50 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right side: Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-white/40 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-[#11181C] border border-[#222F35] flex items-center justify-center text-white/70 hover:text-[#00E59B] hover:border-[#00E59B]/50 transition-colors group"
            title="Back to Top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
