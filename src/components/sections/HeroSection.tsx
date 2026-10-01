import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import portfolioData from "@/data/portfolioData";

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#0A192F]">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Main Info */}
          <div className="max-w-2xl">
            {/* Clean photo with subtle border only — zero glow */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#233554] bg-[#112240] mb-6">
              <img
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#CCD6F6] leading-none mb-3">
              {portfolioData.personal.name}
            </h1>

            <h2 className="text-base sm:text-xl font-mono font-medium text-[#64FFDA] mb-4">
              Software Engineer — Mobile Applications
            </h2>

            <p className="text-sm sm:text-base text-[#8892B0] leading-relaxed max-w-xl mb-8">
              I design and build production-grade mobile applications with a focus on clean architecture, real-time systems, and measurable performance.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-semibold text-[#0A192F] bg-[#64FFDA] hover:bg-[#7BFFE0] transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={13} />
              </button>

              <button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-mono font-medium text-[#CCD6F6] border border-[#233554] bg-[#112240] hover:border-[#64FFDA]/40 hover:text-[#64FFDA] transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Socials & Resume on right */}
          <div className="flex lg:flex-col items-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#233554]/60 lg:pl-8">
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
                  className="text-[#8892B0] hover:text-[#64FFDA] transition-colors p-1"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}

            <span className="h-4 lg:h-px w-px lg:w-4 bg-[#233554]" />

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#8892B0] hover:text-[#64FFDA] transition-colors inline-flex items-center gap-1.5"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
