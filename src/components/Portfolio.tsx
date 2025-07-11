
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Flutter App",
      description: "A complete e-commerce mobile application with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Flutter", "Firebase", "Stripe API", "Provider"],
      image: "🛒",
      category: "Mobile App",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with task creation, categorization, reminders, and team collaboration features built with clean architecture.",
      technologies: ["Flutter", "SQLite", "BLoC Pattern", "Local Notifications"],
      image: "📋",
      category: "Productivity",
      status: "In Progress",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      technologies: ["Flutter", "REST API", "Geolocator", "Charts"],
      image: "🌤️",
      category: "Utility",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and performance metrics.",
      technologies: ["Flutter", "Firebase", "Charts", "WebSocket"],
      image: "📊",
      category: "Analytics",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Showcase of my recent projects demonstrating expertise in Flutter development and modern mobile app architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Smartphone className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            onClick={() => window.open("#", '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
