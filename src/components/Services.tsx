
import { Palette, Database, TestTube, Sparkles, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles and user-centered approach.",
      features: ["Material Design", "Custom Animations", "Responsive Layouts", "User Experience Optimization"],
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10"
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and real-time databases for dynamic mobile applications.",
      features: ["REST API Development", "Firebase Integration", "Real-time Data Sync", "Authentication Systems"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: TestTube,
      title: "Testing & Deployment",
      description: "Comprehensive testing strategies and deployment solutions to ensure app quality and performance.",
      features: ["Unit Testing", "Widget Testing", "CI/CD Pipeline", "Play Store Deployment"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/3 via-blue-500/3 to-green-500/3"></div>
      <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-500/10 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in border border-pink-500/20">
            <Sparkles className="h-4 w-4" />
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-green-100 bg-clip-text text-transparent animate-fade-in delay-200">
            Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-blue-500 to-green-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed text-lg animate-fade-in delay-500">
            Specializing in end-to-end Flutter mobile app development, from UI/UX design 
            and Firebase integration to performance optimization and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-700 transform hover:-translate-y-6 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              {/* Enhanced Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Enhanced Service Icon */}
                <div className="text-center mb-8">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                      <service.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Enhanced Service Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Enhanced Service Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300 animate-fade-in"
                      style={{ animationDelay: `${800 + index * 100 + featureIndex * 100}ms` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Learn More Link */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-center text-teal-400 hover:text-teal-300 transition-colors duration-300 cursor-pointer group/link">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Let's discuss how I can help bring your mobile app idea to life with modern Flutter development 
                and exceptional user experiences.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 inline-flex items-center gap-3"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
