
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
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with task creation, categorization, reminders, and team collaboration features built with clean architecture.",
      technologies: ["Flutter", "SQLite", "BLoC Pattern", "Local Notifications"],
      image: "📋",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      technologies: ["Flutter", "REST API", "Geolocator", "Charts"],
      image: "🌤️",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and performance metrics.",
      technologies: ["Flutter", "Firebase", "Charts", "WebSocket"],
      image: "📊",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Showcase of my recent projects demonstrating expertise in Flutter development and modern mobile app architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-gray-800/80 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-6xl mb-4">{project.image}</div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Smartphone className="h-5 w-5 text-teal-400 mr-2" />
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-teal-400 text-xs font-medium rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
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
