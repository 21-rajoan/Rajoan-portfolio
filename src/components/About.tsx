
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="inline-block relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-teal-400/20 to-blue-500/20 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-700 flex items-center justify-center">
                  <div className="text-8xl font-bold text-teal-400">RA</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">💻</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Passionate Flutter Developer</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                As a passionate Flutter developer, I build cross-platform mobile applications 
                that are performant, elegant, and user-friendly. I love turning complex problems 
                into simple, beautiful solutions that provide exceptional user experiences.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Education</h4>
                  <p className="text-teal-400 font-medium">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-gray-300">Daffodil International University, Dhaka</p>
                  <div className="flex items-center mt-2 text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Experience</h4>
                  <p className="text-blue-400 font-medium">Intern Developer</p>
                  <p className="text-gray-300">Cityscape International Ltd</p>
                  <div className="flex items-center mt-2 text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Dec 2024 – Feb 2025</span>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Assisted in Flutter UI development and API integrations, 
                    gaining hands-on experience in mobile app development.
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
