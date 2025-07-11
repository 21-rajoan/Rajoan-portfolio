
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-primary text-lg font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">Rajoan Tamjid</span>
                <br />
                <span className="text-gradient">Antor</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Flutter Mobile App Developer
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Passionate about creating cross-platform mobile applications that deliver 
                exceptional user experiences with clean code and modern design principles.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/rajoan-antor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/rajoan-antor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="text-6xl font-bold text-primary">
                RA
              </div>
              
              {/* Status */}
              <div className="absolute -top-2 -right-2 bg-card border border-border px-3 py-1 rounded-full shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
