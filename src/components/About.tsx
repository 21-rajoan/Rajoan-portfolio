
import { GraduationCap, Briefcase, MapPin, Calendar, Award, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Code2 className="h-4 w-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fade-in delay-200">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in delay-500">
            Passionate about creating exceptional mobile experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Section */}
          <div className="text-center lg:text-left animate-fade-in delay-700">
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-teal-400/20 via-blue-500/20 to-purple-500/10 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-800 flex items-center justify-center relative">
                  <div className="text-8xl font-bold bg-gradient-to-br from-teal-400 to-blue-500 bg-clip-text text-transparent">RA</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600">
                <Award className="h-8 w-8 text-teal-400" />
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8 animate-fade-in delay-900">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Passionate Flutter Developer
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                As a passionate Flutter developer, I build cross-platform mobile applications 
                that are performant, elegant, and user-friendly. I love turning complex problems 
                into simple, beautiful solutions that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Mobile Apps", "Cross-Platform", "UI/UX Design", "Performance"].map((tag, index) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm font-medium border border-teal-500/20 animate-fade-in"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Education Card */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Education</h4>
                  <p className="text-blue-400 font-semibold text-lg mb-1">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-gray-300 mb-3">Daffodil International University, Dhaka</p>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Experience Card */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 transform hover:-translate-y-1 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-teal-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Experience</h4>
                  <p className="text-teal-400 font-semibold text-lg mb-1">Intern Developer</p>
                  <p className="text-gray-300 mb-3">Cityscape International Ltd</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Dec 2024 – Feb 2025</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
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
