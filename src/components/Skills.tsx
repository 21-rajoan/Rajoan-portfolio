
import { Code, Database, Wrench, Lightbulb, Sparkles } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "Java", "Dart", "Python"],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Flutter", "React", "Node.js", "Git"],
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Best Practices",
      icon: Lightbulb,
      skills: ["MVVM Architecture", "REST API Development", "Agile Methodologies"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/3 to-blue-500/3"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in border border-teal-500/20">
            <Sparkles className="h-4 w-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent animate-fade-in delay-200">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg animate-fade-in delay-500">
            A comprehensive skill set focused on modern mobile development technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              {/* Enhanced Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Enhanced Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${category.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                      <category.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="bg-gray-700/30 backdrop-blur-sm rounded-xl px-4 py-3 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/50 group-hover:border-teal-500/20"
                      style={{ animationDelay: `${800 + index * 100 + skillIndex * 50}ms` }}
                    >
                      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span>Always learning and growing</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
