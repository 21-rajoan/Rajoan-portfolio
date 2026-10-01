import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolioData";

interface LeftHeaderProps {
  activeSection: string;
}

export const LeftHeader = ({ activeSection }: LeftHeaderProps) => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24 py-14 pr-0 lg:pr-8">

      {/* ── Identity Block ── */}
      <div>
        {/* Avatar — clean, no glow */}
        <div className="w-[72px] h-[72px] rounded-xl overflow-hidden border border-[#1e3358] mb-8 flex-shrink-0">
          <img
            src={portfolioData.personal.avatarUrl}
            alt={portfolioData.personal.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[2.1rem] sm:text-[2.5rem] font-bold tracking-[-0.04em] text-[#E2E8F0] leading-[1.1]">
          <a href="/" className="hover:text-white transition-colors duration-200">
            {portfolioData.personal.name}
          </a>
        </h1>

        {/* Title — single teal accent */}
        <p className="mt-3 text-[14px] sm:text-[15px] font-mono font-medium text-[#64FFDA] tracking-[0.01em]">
          Software Engineer — Mobile Applications
        </p>

        {/* Intro — calm, confident */}
        <p className="mt-5 text-[14px] text-[#8892B0] leading-[1.75] max-w-[340px]">
          I build production-grade mobile applications for iOS and Android — clean architecture,
          real-time systems, and ship-ready quality.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, "#projects")}
            className="btn-primary"
          >
            View Projects
            <ArrowUpRight size={13} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="btn-ghost"
          >
            Get in touch
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-16" aria-label="Page navigation">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`group flex items-center gap-4 py-1.5 transition-all duration-200 ${
                      isActive ? "text-[#CCD6F6]" : "text-[#4a5c78] hover:text-[#8892B0]"
                    }`}
                  >
                    {/* Animated indicator line */}
                    <span
                      className={`h-px flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-[#64FFDA]"
                          : "w-5 bg-[#1e3358] group-hover:w-8 group-hover:bg-[#2d4a72]"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-200 ${
                        isActive ? "text-[#64FFDA] font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Social row ── */}
      <div className="mt-10 lg:mt-0 flex items-center gap-5">
        {portfolioData.social.map((social) => {
          let Icon = Github;
          if (social.platform === "LinkedIn") Icon = Linkedin;
          if (social.platform === "Email") Icon = Mail;

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#4a5c78] hover:text-[#8892B0] transition-colors duration-200"
              aria-label={social.platform}
              title={social.platform}
            >
              <Icon size={17} strokeWidth={1.6} />
            </a>
          );
        })}

        <span className="h-3.5 w-px bg-[#1e3358]" />

        <a
          href={portfolioData.personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-mono text-[#4a5c78] hover:text-[#8892B0] transition-colors duration-200 inline-flex items-center gap-1.5 tracking-widest uppercase"
        >
          <FileText size={13} strokeWidth={1.6} />
          Resume
        </a>
      </div>
    </header>
  );
};
