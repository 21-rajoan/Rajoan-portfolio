
import { Code, Database, Wrench, Lightbulb } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "Java", "Dart", "Python"],
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Flutter", "React", "Node.js", "Git"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Best Practices",
      icon: Lightbulb,
      skills: ["MVVM Architecture", "REST API Development", "Agile Methodologies"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive skill set focused on modern mobile development technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-gray-700/50 rounded-lg px-4 py-2 text-center transform transition-all duration-200 hover:scale-105"
                    style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                  >
                    <span className="text-gray-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
