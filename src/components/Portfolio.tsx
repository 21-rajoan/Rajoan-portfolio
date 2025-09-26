
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      category: "Flutter Mobile App",
      description: "Complete food delivery mobile application built with Flutter, featuring user authentication, restaurant browsing, cart management, and order tracking with real-time updates.",
      image: "🍔",
      githubUrl: "https://github.com/21-rajoan/Food-Delivery-App-Flutter-",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    },
    {
      id: 2,
      title: "Rapido User App", 
      category: "Ride Sharing App",
      description: "User-side mobile application for ride-sharing platform with features like ride booking, driver tracking, payment integration, and ride history management.",
      image: "🚗",
      githubUrl: "https://github.com/21-rajoan/Rapido_User-app",
      technologies: ["Flutter", "Dart", "Google Maps", "Payment Gateway"],
    },
    {
      id: 3,
      title: "Rapido Driver App",
      category: "Driver Management App", 
      description: "Comprehensive driver-side application for ride-sharing service with trip management, earnings tracking, navigation integration, and real-time passenger communication.",
      image: "👨‍✈️",
      githubUrl: "https://github.com/21-rajoan/Rapido-Driver-App-Flutter-",
      technologies: ["Flutter", "Dart", "GPS Navigation", "Real-time Updates"],
    },
    {
      id: 4,
      title: "Multivendor eCommerce Platform",
      category: "E-commerce Solution",
      description: "Full-featured multivendor e-commerce platform enabling multiple sellers to manage their stores, with advanced product management, order processing, and analytics dashboard.",
      image: "🛒",
      githubUrl: "https://github.com/21-rajoan/Multivendor-eCommerce",
      technologies: ["Flutter", "Laravel", "MySQL", "Payment Integration"],
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
