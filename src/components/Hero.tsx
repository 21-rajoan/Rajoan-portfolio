
import { ArrowDown, Download, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Profile Picture with Glassmorphism */}
          <div className="relative mx-auto w-64 h-64 mb-12 animate-scale-in">
            <div className="glass-card w-full h-full rounded-full p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl font-bold bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  RA
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Status */}
            <div className="absolute -top-2 -right-2 glass-card px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/90 font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <p className="text-cyan-400 text-lg font-semibold tracking-wide">Hello, I'm</p>
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
                  Rajoan Tamjid
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Antor
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-white/80 mb-6 font-light">
                Flutter Mobile App Developer
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                Passionate about creating <span className="text-cyan-300 font-medium">cross-platform mobile applications</span> that deliver 
                exceptional user experiences with clean code and modern design principles.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button 
                  onClick={() => scrollToSection("#portfolio")}
                  className="glass-button group bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-cyan-400/30 rounded-full"
                >
                  <span className="flex items-center gap-3">
                    View Portfolio
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="glass-button border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-full"
                >
                  <span className="flex items-center gap-3">
                    Contact Me
                    <Mail className="w-5 h-5" />
                  </span>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2+</div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </div>
                <div className="w-px h-16 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-white/60">Projects Completed</div>
                </div>
                <div className="w-px h-16 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Flutter</div>
                  <div className="text-sm text-white/60">Specialist</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://github.com/rajoan-antor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/rajoan-antor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection("#about")}
              className="glass-button group flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-300 p-4 rounded-full"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-white/30 group-hover:border-white/50 rounded-full flex justify-center transition-colors duration-300">
                <div className="w-1 h-3 bg-white/60 group-hover:bg-white/90 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
