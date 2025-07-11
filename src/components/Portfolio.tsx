
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile App Landing Design & Services",
      category: "Mobile App",
      image: "📱",
    },
    {
      id: 2,
      title: "Mobile App Landing Design & Services", 
      category: "Mobile App",
      image: "📱",
    },
    {
      id: 3,
      title: "Mobile App Landing Design & Services",
      category: "Mobile App", 
      image: "📱",
    },
    {
      id: 4,
      title: "Mobile App Landing Design & Services",
      category: "Mobile App",
      image: "📱",
    },
    {
      id: 5,
      title: "Mobile App Landing Design & Services",
      category: "Mobile App",
      image: "📱",
    },
    {
      id: 6,
      title: "Mobile App Landing Design & Services",
      category: "Mobile App",
      image: "📱",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
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
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
