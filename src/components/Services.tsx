
import { Palette, Database, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles and user-centered approach.",
      features: ["Material Design", "Custom Animations", "Responsive Layouts", "User Experience Optimization"],
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and real-time databases for dynamic mobile applications.",
      features: ["REST API Development", "Firebase Integration", "Real-time Data Sync", "Authentication Systems"],
    },
    {
      icon: TestTube,
      title: "Testing & Deployment",
      description: "Comprehensive testing strategies and deployment solutions to ensure app quality and performance.",
      features: ["Unit Testing", "Widget Testing", "CI/CD Pipeline", "Play Store Deployment"],
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Services</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Specializing in end-to-end Flutter mobile app development, from UI/UX design 
            and Firebase integration to performance optimization and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-2xl p-8 card-shadow hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how I can help bring your mobile app idea to life with modern Flutter development 
              and exceptional user experiences.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
