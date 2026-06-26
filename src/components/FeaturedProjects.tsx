import { Smartphone, Github, ExternalLink, ShieldCheck, CheckCircle2, Play, AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceMockup } from "@/components/ui/DeviceMockup";

export const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      category: "Flutter Mobile App",
      description: "A comprehensive dual-platform mobile solution for local food ordering. Implements dynamic cart caching, lazy-loaded item feeds, real-time location mapping, and secure checkout architectures.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "BLoC State"],
      keyFeatures: [
        "Real-time food vendor tracking",
        "Encrypted Stripe and PayPal processing",
        "Multi-criteria filter and search options",
        "Offline cart cache restoration"
      ],
      githubUrl: "https://github.com/21-rajoan/Food-Delivery-App-Flutter-",
      demoUrl: "https://github.com/21-rajoan/Food-Delivery-App-Flutter-",
      playStoreUrl: "#",
      appStoreUrl: "#",
      glowColor: "rgba(0, 229, 255, 0.35)",
      // Customized simulated UI for the screen
      mockupRenderer: () => (
        <div className="p-4 flex-1 flex flex-col justify-between text-white bg-slate-950">
          <div className="flex justify-between items-center mt-3">
            <span className="text-[9px] font-bold tracking-wider text-[#00E5FF]">FASTFOOD CO</span>
            <span className="text-[7px] text-white/50 bg-white/5 px-2 py-0.5 rounded-full">OPEN</span>
          </div>

          <div className="my-3 space-y-2">
            <div className="relative rounded-xl overflow-hidden h-24 bg-gradient-to-tr from-[#0F172A] to-slate-900 border border-white/5 flex flex-col justify-end p-2">
              <span className="text-[12px] font-black leading-none text-white">Crispy Truffle Burger</span>
              <span className="text-[8px] text-[#4FC3F7] mt-0.5 font-bold">$12.50</span>
              <div className="absolute top-2 right-2 bg-[#00E5FF] text-[#050816] font-bold text-[7px] px-1.5 py-0.5 rounded-md">
                BEST SELLER
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-white/5">
                <span className="text-[7px] text-white/40 uppercase block">Delivery</span>
                <span className="text-[8px] font-bold text-white">15 - 20 mins</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-white/5">
                <span className="text-[7px] text-white/40 uppercase block">Rating</span>
                <span className="text-[8px] font-bold text-[#00E5FF]">★ 4.9 (1.2k)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-xl border border-white/5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-white/70">1 Item Selected</span>
              <span className="text-[10px] font-extrabold text-white">$12.50</span>
            </div>
            <div className="w-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] text-center text-[8px] font-extrabold py-2 rounded-lg uppercase tracking-wider">
              Place Order
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Rapido Rider/User App",
      category: "Ride Sharing Platform",
      description: "Full-scale ride reservation ecosystem simulating live driver dispatch, dynamic fare calculation, Google Directions polyline integration, and bi-directional websocket sync.",
      technologies: ["Flutter", "Dart", "Node.js", "WebSockets", "Google Maps"],
      keyFeatures: [
        "Live driver navigation & ETA updates",
        "Geofence-triggered ride completion",
        "Passenger-Driver chat system",
        "Digital wallet deposit & split payments"
      ],
      githubUrl: "https://github.com/21-rajoan/Rapido_User-app",
      demoUrl: "https://github.com/21-rajoan/Rapido_User-app",
      playStoreUrl: "#",
      appStoreUrl: "#",
      glowColor: "rgba(79, 195, 247, 0.35)",
      mockupRenderer: () => (
        <div className="p-4 flex-1 flex flex-col justify-between text-white bg-slate-950">
          <div className="flex justify-between items-center mt-3">
            <span className="text-[9px] font-extrabold text-[#4FC3F7]">RAPIDO CLIENT</span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping"></div>
          </div>

          <div className="my-2 bg-slate-900/60 border border-white/5 p-2 rounded-xl text-[8px] space-y-1">
            <div className="text-white/40">PICKUP</div>
            <div className="font-bold text-white truncate">Banani Block C, Dhaka</div>
            <div className="text-white/40 mt-1">DESTINATION</div>
            <div className="font-bold text-[#00E5FF] truncate">Dhanmondi Lake, Road 27</div>
          </div>

          {/* Ride Options */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center bg-[#4FC3F7]/10 border border-[#4FC3F7]/25 p-2 rounded-xl">
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px]">🚗</span>
                <div>
                  <div className="text-[8px] font-bold text-white leading-none">Rapido Prime</div>
                  <div className="text-[6px] text-white/50 mt-0.5">3 min away</div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-white">$14.50</span>
            </div>

            <div className="flex justify-between items-center bg-white/5 p-2 rounded-xl">
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px]">🏍</span>
                <div>
                  <div className="text-[8px] font-bold text-white/80 leading-none">Rapido Bike</div>
                  <div className="text-[6px] text-white/40 mt-0.5">1 min away</div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-white/80">$6.20</span>
            </div>
          </div>

          <div className="bg-slate-900/80 p-2 rounded-xl border border-white/5 flex items-center justify-between text-[8px]">
            <span className="text-white/40">Payment: Visa *9842</span>
            <span className="text-[#00E5FF] font-bold uppercase tracking-wider">Confirm Ride</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Rapido Driver App",
      category: "Driver Management System",
      description: "Dedicated driver portal matching the Rapido user network. Manages real-time location streaming via background OS hooks, instant push request dispatching, and dynamic payout ledgers.",
      technologies: ["Flutter", "Dart", "Background Geolocation", "SQLite"],
      keyFeatures: [
        "Interactive dispatch acceptance slide",
        "Comprehensive income analytics ledger",
        "In-app background route calculation",
        "Document authentication gateway"
      ],
      githubUrl: "https://github.com/21-rajoan/Rapido-Driver-App-Flutter-",
      demoUrl: "https://github.com/21-rajoan/Rapido-Driver-App-Flutter-",
      playStoreUrl: "#",
      appStoreUrl: "#",
      glowColor: "rgba(0, 229, 255, 0.35)",
      mockupRenderer: () => (
        <div className="p-4 flex-1 flex flex-col justify-between text-white bg-slate-950">
          <div className="flex justify-between items-center mt-3">
            <span className="text-[9px] font-extrabold text-[#00E5FF]">RAPIDO DRIVER</span>
            <span className="text-[8px] text-white bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">ONLINE</span>
          </div>

          <div className="bg-gradient-to-br from-[#0F172A] to-slate-950 p-2.5 rounded-xl border border-white/5 text-center my-3">
            <span className="text-[7px] text-white/40 uppercase tracking-widest block">Today's Revenue</span>
            <span className="text-[14px] font-black text-white">$182.40</span>
            <span className="text-[6px] text-emerald-400 block mt-0.5">8 completed trips</span>
          </div>

          {/* New Ride Alert Modal overlay in mock */}
          <div className="bg-slate-900 border-2 border-[#00E5FF] p-2.5 rounded-xl space-y-1.5 shadow-2xl relative">
            <div className="flex justify-between items-center">
              <span className="text-[7px] text-[#00E5FF] font-bold uppercase tracking-wider">NEW TRIP REQUEST</span>
              <span className="text-[6px] text-white/50">15s remaining</span>
            </div>
            <div className="text-[8px] text-white font-extrabold leading-tight">Pickup: Gulshan Circle 1</div>
            <div className="text-[7px] text-white/40">Fare Estimate: <strong className="text-white">$18.90</strong></div>
            <div className="w-full bg-[#00E5FF] text-[#050816] text-center text-[8px] font-bold py-1.5 rounded-lg uppercase">
              Accept Dispatch
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Multivendor eCommerce",
      category: "Fullstack E-Commerce Suite",
      description: "High-grade multivendor commercial suite linking vendors to clients. Utilizes a Laravel REST API for product catalogs, custom shipping matrices, and secure payment handling.",
      technologies: ["Flutter", "Dart", "Laravel Backend", "MySQL", "REST Engine"],
      keyFeatures: [
        "Distinct seller and customer dashboards",
        "Live stock and inventory synchronization",
        "Promo coupon campaign compiler",
        "Inter-vendor shopping cart split"
      ],
      githubUrl: "https://github.com/21-rajoan/Multivendor-eCommerce",
      demoUrl: "https://github.com/21-rajoan/Multivendor-eCommerce",
      playStoreUrl: "#",
      appStoreUrl: "#",
      glowColor: "rgba(79, 195, 247, 0.35)",
      mockupRenderer: () => (
        <div className="p-4 flex-1 flex flex-col justify-between text-white bg-slate-950">
          <div className="flex justify-between items-center mt-3">
            <span className="text-[9px] font-black text-[#4FC3F7]">MEGASTORE</span>
            <span className="text-[7px] text-[#00E5FF] font-bold">CART (3)</span>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-slate-900 p-2 rounded-xl border border-white/5 space-y-1">
              <div className="h-12 rounded-lg bg-white/5 flex items-center justify-center text-xs">🎧</div>
              <div className="text-[7px] font-bold truncate">Wireless ANC Headset</div>
              <div className="text-[7px] text-[#00E5FF] font-bold">$89.00</div>
            </div>

            <div className="bg-slate-900 p-2 rounded-xl border border-white/5 space-y-1">
              <div className="h-12 rounded-lg bg-white/5 flex items-center justify-center text-xs">⌚️</div>
              <div className="text-[7px] font-bold truncate">S-Series Smartwatch</div>
              <div className="text-[7px] text-[#00E5FF] font-bold">$120.00</div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2 rounded-xl border border-white/5 space-y-1">
            <div className="flex justify-between items-center text-[7px]">
              <span>Subtotal</span>
              <span>$209.00</span>
            </div>
            <div className="w-full bg-[#4FC3F7] text-[#050816] text-center text-[8px] font-black py-1.5 rounded-lg uppercase">
              Secure Checkout
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-[#050816]/90 border-b border-white/5">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,195,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#00E5FF] uppercase tracking-widest">
            Visually Impressive Production Models
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Featured Flutter Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            A selective showcase of production-ready, fully architected mobile systems featuring clean structural design and premium interfaces.
          </p>
        </div>

        {/* Alternate Layout Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Project Screen Showcase Column (Alternating Left/Right) */}
                <div className={`lg:col-span-5 flex justify-center ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                  <div className="relative group/mockup">
                    {/* Abstract tech elements floating behind mockup */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#4FC3F7]/10 to-[#00E5FF]/10 rounded-full blur-2xl opacity-70 group-hover/mockup:scale-105 transition-transform duration-500"></div>
                    
                    <DeviceMockup themeColor={project.glowColor}>
                      {project.mockupRenderer()}
                    </DeviceMockup>
                  </div>
                </div>

                {/* Project Details Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-widest">
                      Engineering Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4.5 w-4.5 text-[#4FC3F7] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-white/70">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Chips */}
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-[11px] font-semibold rounded-full bg-white/5 border border-white/5 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Group */}
                  <div className="flex flex-wrap gap-3.5 pt-4">
                    <Button 
                      variant="outline" 
                      className="bg-slate-900/60 border-white/10 hover:border-[#4FC3F7]/50 text-white font-bold text-xs uppercase tracking-wider rounded-full px-5 py-5 transition-all"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Explore Repo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-slate-900/60 border-white/10 hover:border-[#00E5FF]/50 text-white font-bold text-xs uppercase tracking-wider rounded-full px-5 py-5 transition-all"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Blueprint
                      </a>
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
