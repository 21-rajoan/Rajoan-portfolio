
import { GraduationCap, Briefcase, MapPin, Calendar, Award, Code2, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="glass-card inline-flex items-center gap-2 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Code2 className="h-4 w-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent animate-fade-in delay-200">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in delay-500">
            Passionate about creating exceptional mobile experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left animate-fade-in delay-700">
            <div className="glass-card rounded-3xl p-8 mb-8">
              <div className="relative inline-block">
                <div className="w-80 h-80 glass-card rounded-3xl p-4 shadow-2xl mx-auto">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">RA</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 glass-card w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute -top-4 -left-4 glass-card w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in delay-900">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-400" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Passionate Flutter Developer
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                As a passionate Flutter developer, I build cross-platform mobile applications 
                that are performant, elegant, and user-friendly. I love turning complex problems 
                into simple, beautiful solutions that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Mobile Apps", "Cross-Platform", "UI/UX Design", "Performance"].map((tag, index) => (
                  <span 
                    key={tag}
                    className="glass-button px-4 py-2 text-cyan-400 rounded-full text-sm font-medium animate-fade-in"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-3xl p-8 group hover:scale-105 transition-all duration-500">
              <div className="flex items-start space-x-6">
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3">Education</h4>
                  <p className="text-blue-400 font-semibold text-lg mb-1">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-white/80 mb-3">Daffodil International University, Dhaka</p>
                  <div className="flex items-center text-white/60">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="glass-card rounded-3xl p-8 group hover:scale-105 transition-all duration-500">
              <div className="flex items-start space-x-6">
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3">Experience</h4>
                  <p className="text-cyan-400 font-semibold text-lg mb-1">Intern Developer</p>
                  <p className="text-white/80 mb-3">Cityscape International Ltd</p>
                  <div className="flex items-center text-white/60 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Dec 2024 – Feb 2025</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Assisted in Flutter UI development and API integrations, 
                    gaining hands-on experience in mobile app development and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
