
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
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
              <Button variant="outline" size="lg" className="px-8 py-3 text-base font-medium">
                <Download className="mr-2 h-5 w-5" />
                Download CV
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
            {/* Main Profile Image */}
            <div className="relative z-10">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/af9cc730-9df3-4684-988b-2351ef1cbb55.png"
                  alt="Rajoan Tamjid - Professional Flutter Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl -z-10 blur-xl opacity-50"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-8 -right-8 -z-20 hidden lg:block">
              <div className="grid grid-cols-3 gap-4 opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-16 h-16 bg-card/50 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="w-6 h-6 bg-primary/30 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
