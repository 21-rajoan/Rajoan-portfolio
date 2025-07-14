
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                WELCOME TO MY WORLD
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Rajoan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                a Professional Flutter Developer.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I have been working since 2024. I am proficient in mobile app development, 
              user experience, Flutter, and always learning from my surroundings.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                FIND WITH ME
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/21-rajoan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="mailto:rajoantamjid.21@gmail.com" 
                  className="w-12 h-12 bg-card hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image and Portfolio Grid */}
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative z-10 w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/af9cc730-9df3-4684-988b-2351ef1cbb55.png"
                alt="Professional profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Portfolio Grid Background */}
            <div className="absolute -top-8 -right-8 grid grid-cols-3 gap-4 opacity-60">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-20 h-20 bg-card rounded-lg flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
