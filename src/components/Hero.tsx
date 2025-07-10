
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Picture */}
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 animate-fade-in">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  <div className="text-6xl font-bold text-teal-400">RA</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <p className="text-teal-400 text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Rajoan Tamjid Antor
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                Flutter Mobile App Developer
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating cross-platform mobile applications that deliver 
                exceptional user experiences with clean code and modern design principles.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-200">
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#about")}
            className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
