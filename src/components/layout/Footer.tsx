import portfolioData from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020C1B] border-t border-[#233554] py-12 relative z-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left identity */}
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <span className="font-mono text-xs text-[#CCD6F6]">
            Designed &amp; Engineered by {portfolioData.personal.name}
          </span>
          <span className="font-mono text-[11px] text-[#8892B0]">
            {portfolioData.personal.role} · Dhaka, Bangladesh
          </span>
        </div>

        {/* Center socials */}
        <div className="flex items-center space-x-3">
          {portfolioData.social.map((social) => {
            let Icon = Github;
            if (social.platform === "LinkedIn") Icon = Linkedin;
            if (social.platform === "Email") Icon = Mail;

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#0A192F] border border-[#233554] flex items-center justify-center text-[#8892B0] hover:text-[#64FFDA] hover:border-[#64FFDA]/50 transition-colors"
                aria-label={social.platform}
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-[#8892B0]">
            © {new Date().getFullYear()}
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded bg-[#0A192F] border border-[#233554] flex items-center justify-center text-[#8892B0] hover:text-[#64FFDA] hover:border-[#64FFDA]/50 transition-colors"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
