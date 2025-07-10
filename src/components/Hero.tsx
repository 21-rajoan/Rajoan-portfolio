
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
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
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-teal-300/60 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Profile Picture Section */}
          <div className="mb-8 lg:mb-0 lg:mr-16 relative">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-teal-400 p-1.5 animate-fade-in">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center relative">
                  <div className="text-7xl font-bold bg-gradient-to-br from-teal-300 to-blue-300 bg-clip-text text-transparent">RA</div>
                  
                  {/* Decorative ring inside */}
                  <div className="absolute inset-4 rounded-full border border-teal-400/30"></div>
                </div>
              </div>
              
              {/* Enhanced floating emoji */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-teal-500/25">
                <span className="text-3xl">👋</span>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-300 font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Enhanced greeting section */}
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                <p className="text-teal-400 text-lg font-semibold tracking-wide uppercase">Hello, I'm</p>
                <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Rajoan Tamjid
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-teal-300 bg-clip-text text-transparent">
                  Antor
                </span>
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                  Flutter Mobile App Developer
                </h2>
                <div className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Passionate about creating <span className="text-teal-300 font-medium">cross-platform mobile applications</span> that deliver 
                exceptional user experiences with clean code and modern design principles.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in delay-200">
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-10 py-7 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Portfolio
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="group border-2 border-gray-600 hover:border-teal-400 text-gray-300 hover:text-white hover:bg-teal-500/10 px-10 py-7 text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  Contact Me
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* New Stats Section */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in delay-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Flutter</div>
                <div className="text-sm text-gray-400">Specialist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#about")}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-teal-400 rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-600 group-hover:bg-teal-400 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
