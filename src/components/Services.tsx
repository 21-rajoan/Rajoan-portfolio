
import { Palette, Database, TestTube } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles and user-centered approach.",
      features: ["Material Design", "Custom Animations", "Responsive Layouts", "User Experience Optimization"]
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and real-time databases for dynamic mobile applications.",
      features: ["REST API Development", "Firebase Integration", "Real-time Data Sync", "Authentication Systems"]
    },
    {
      icon: TestTube,
      title: "Testing & Deployment",
      description: "Comprehensive testing strategies and deployment solutions to ensure app quality and performance.",
      features: ["Unit Testing", "Widget Testing", "CI/CD Pipeline", "Play Store Deployment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            Specializing in end-to-end Flutter mobile app development, from UI/UX design 
            and Firebase integration to performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-teal-400/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-200">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-teal-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your mobile app idea to life with modern Flutter development.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
