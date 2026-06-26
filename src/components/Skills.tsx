import { Smartphone, Code2, Cloud, Network, Layers, GitFork, Server, Cpu, Database, BookOpen } from "lucide-react";

export const Skills = () => {
  const skillCards = [
    {
      title: "Flutter",
      category: "Mobile Engine",
      icon: Smartphone,
      points: ["Core engine optimization", "Declarative Widget rendering", "MethodChannels & Native wrappers", "60 FPS scroll performance"],
      color: "text-[#4FC3F7]",
      borderGlow: "group-hover:border-[#4FC3F7]/50 group-hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    },
    {
      title: "Dart",
      category: "Compiler & VM",
      icon: Code2,
      points: ["AOT/JIT Compilation pipelines", "Sound null safety & Type definitions", "Asynchronous Streams & Isolates", "Extension methods & Mixins"],
      color: "text-[#00E5FF]",
      borderGlow: "group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      title: "Firebase",
      category: "BaaS Integration",
      icon: Cloud,
      points: ["Firestore transactional query streams", "Cloud Messaging push protocols", "OAuth credentials & JWT verification", "Offline cache synchronizers"],
      color: "text-[#4FC3F7]",
      borderGlow: "group-hover:border-[#4FC3F7]/50 group-hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    },
    {
      title: "REST APIs",
      category: "Communications",
      icon: Network,
      points: ["Sleek Dio/Http interceptors", "JSON serializable converters", "Token refresh validation queues", "Request caching & retry layers"],
      color: "text-[#00E5FF]",
      borderGlow: "group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      title: "State Management",
      category: "Reactive Flows",
      icon: Cpu,
      points: ["Riverpod dependency providers", "BLoC event-driven states", "Provider reactivity mapping", "Atomic state synchronization"],
      color: "text-[#4FC3F7]",
      borderGlow: "group-hover:border-[#4FC3F7]/50 group-hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    },
    {
      title: "Clean Architecture",
      category: "System Patterns",
      icon: Layers,
      points: ["DDD (Domain-Driven Design) layers", "SOLID modular paradigms", "Sleek MVVM UI bindings", "Loose component coupling"],
      color: "text-[#00E5FF]",
      borderGlow: "group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      title: "Git & GitHub",
      category: "Source DevOps",
      icon: GitFork,
      points: ["GitHub Actions CI/CD workflows", "Rebase & Cherry-pick debugging", "Multi-branch feature isolation", "Code review pull protocols"],
      color: "text-[#4FC3F7]",
      borderGlow: "group-hover:border-[#4FC3F7]/50 group-hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    },
    {
      title: "Java & Backend",
      category: "Server Engines",
      icon: Server,
      points: ["Spring Boot microservice architectures", "Strong type object handling", "Thread-safe data compilers", "REST controller configurations"],
      color: "text-[#00E5FF]",
      borderGlow: "group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    },
    {
      title: "SQL Databases",
      category: "Data Integrity",
      icon: Database,
      points: ["PostgreSQL advanced schema design", "SQLite client-side relational storage", "Complex joins & query execution", "Normalized transactional indexes"],
      color: "text-[#4FC3F7]",
      borderGlow: "group-hover:border-[#4FC3F7]/50 group-hover:shadow-[0_0_20px_rgba(79,195,247,0.15)]"
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#050816]/90 border-b border-white/5">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#4FC3F7] uppercase tracking-widest">
            ENGINEERING CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills & Core Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Highly structured system engineering focused on writing responsive, thread-safe applications with maintainable architectural foundations.
          </p>
        </div>

        {/* High-End Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="group relative bg-[#0F172A]/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Glowing border outline on hover */}
                <div className={`absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 ${skill.borderGlow} pointer-events-none`}></div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center shrink-0">
                    <IconComponent className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block">
                      {skill.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-white leading-none mt-1">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {skill.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0"></span>
                      <span className="text-xs sm:text-sm text-white/60 leading-tight">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
