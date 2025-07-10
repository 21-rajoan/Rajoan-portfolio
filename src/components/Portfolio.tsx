
import { ExternalLink, Github, Smartphone, Sparkles, ArrowRight } from "lucide-react";
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
    <section id="portfolio" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in border border-blue-500/20">
            <Sparkles className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in delay-200">
            Portfolio
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg animate-fade-in delay-500">
            Showcase of my recent projects demonstrating expertise in Flutter development and modern mobile app architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              {/* Enhanced Project Header */}
              <div className="relative h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/30">
                  {project.category}
                </div>

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-500 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm hover:border-gray-400 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-5 w-5 text-teal-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-teal-400 text-xs font-medium rounded-full border border-gray-600/50 hover:border-teal-500/30 transition-colors duration-300 animate-fade-in"
                      style={{ animationDelay: `${800 + index * 100 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Learn More Link */}
                <div className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 cursor-pointer group/link">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Projects */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <Button 
            className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-0"
            onClick={() => window.open("#", '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
