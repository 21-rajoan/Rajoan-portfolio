import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import portfolioData from "@/data/portfolioData";

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 overflow-hidden bg-transparent">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 w-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 animate-fade-in-up">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  {portfolioData.personal.role.toUpperCase()} • {portfolioData.personal.location.toUpperCase()}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Building apps <br />
                people <span className="text-primary">actually</span> love.
              </h1>
              
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
                {portfolioData.personal.subTagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-6 rounded-xl text-base font-bold transition-all"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See my work <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-border/50 hover:bg-secondary/50 text-white px-8 py-6 rounded-xl text-base font-medium transition-all"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch
              </Button>
            </div>

            {/* Stats Row */}
            <div className="w-full pt-10 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {portfolioData.personal.stats.map((stat, idx) => {
                const numValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
                const suffix = stat.value.replace(/[0-9]/g, '');
                
                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-white">
                      <AnimatedCounter value={numValue} suffix={suffix} />
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
              {/* Subtle top gradient */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              {/* Profile Image */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-[#00E59B]/40 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/60 bg-secondary shadow-xl">
                  <img 
                    src={portfolioData.personal.avatarUrl} 
                    alt={portfolioData.personal.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Active indicator */}
                <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-green-500 border-2 border-[#11181C] rounded-full flex items-center justify-center shadow-lg" title="Available for roles">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{portfolioData.personal.name}</h3>
              <p className="text-[11px] font-bold tracking-widest text-primary uppercase mb-8">
                MOBILE APP DEVELOPER • IOS & ANDROID
              </p>
              
              {/* Skills pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["Flutter", "Swift", "Kotlin", "Clean Architecture"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full bg-background/50 border border-border text-xs text-muted-foreground font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Social links */}
              <div className="flex items-center justify-center gap-3 mb-8 w-full">
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
                      className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
              
              {/* Remote availability */}
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-primary">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Available for remote roles
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
