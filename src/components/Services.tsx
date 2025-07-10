
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-green-500/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="glass-card inline-flex items-center gap-2 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-green-100 bg-clip-text text-transparent animate-fade-in delay-200">
            Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-blue-500 to-green-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-white/70 max-w-4xl mx-auto leading-relaxed text-lg animate-fade-in delay-500">
            Specializing in end-to-end Flutter mobile app development, from UI/UX design 
            and Firebase integration to performance optimization and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card group rounded-3xl p-10 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className={`glass-card w-24 h-24 mx-auto rounded-2xl p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-r ${service.color}`}>
                  <div className="w-full h-full backdrop-blur-md bg-white/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <p className="text-white/80 mb-8 leading-relaxed text-center">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={feature} 
                    className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${800 + index * 100 + featureIndex * 100}ms` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer group/link">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in delay-1000">
          <div className="glass-card rounded-3xl p-12 hover:scale-105 transition-all duration-500 relative overflow-hidden max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
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
              className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 border border-cyan-400/30 inline-flex items-center gap-3"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
