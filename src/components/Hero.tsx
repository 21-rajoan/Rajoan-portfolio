
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                WELCOME TO MY WORLD
              </p>
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm{" "}
                  <span className="text-primary">Rajoan</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                  a Professional Flutter Developer.
                </h2>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I have been working since 2024. I am proficient in mobile app development, 
              user experience, Flutter, and always learning from my surroundings.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="px-8 py-3 text-base font-medium">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-base font-medium" 
                asChild
              >
                <a 
                  href="/Rajoan_Tamjid_CV.pdf" 
                  download="Rajoan_Tamjid_CV.pdf"
                  aria-label="Download Rajoan Tamjid's CV"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                FIND WITH ME
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/21-rajoan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-card hover:bg-primary transition-all duration-300 rounded-xl flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-card hover:bg-primary transition-all duration-300 rounded-xl flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="mailto:rajoantamjid.21@gmail.com" 
                  className="w-14 h-14 bg-card hover:bg-primary transition-all duration-300 rounded-xl flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Main Profile Image with Beautiful Frame */}
            <div className="relative z-10">
              <div className="w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 relative">
                {/* Decorative frame layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-2xl transform rotate-3 shadow-2xl"></div>
                <div className="absolute inset-1 bg-gradient-to-tr from-card to-card/80 rounded-2xl transform -rotate-1 shadow-xl"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-card/50 backdrop-blur-sm">
                  <img 
                    src="/workspace-developer.jpg"
                    alt="Rajoan Tamjid - Professional Flutter Developer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80 blur-sm animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/50 rounded-full opacity-60 blur-md"></div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl -z-10 blur-2xl opacity-70"></div>
            </div>

            {/* Background pattern - subtle and professional */}
            <div className="absolute -top-12 -right-12 -z-20 hidden lg:block opacity-10">
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-primary/30 rounded-sm transform rotate-45"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animation: 'pulse 3s infinite'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
