import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Smartphone, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceMockup } from "@/components/ui/DeviceMockup";

export const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Glow Panels */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#4FC3F7]/10 blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#00E5FF]/10 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern overlay for SaaS tech product landing page appearance */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 Cols on large screen for premium visual dominance) */}
          <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
            
            {/* Elegant Tech Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border border-[#4FC3F7]/20">
              <Sparkles className="h-4 w-4 text-[#00E5FF] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                Premium Mobile Engineering
              </span>
            </div>

            {/* Headline Group */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Crafting World-Class <br />
                <span className="text-gradient font-extrabold block mt-2">
                  Flutter Mobile Apps
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl text-white/80 font-medium tracking-wide">
                Specialized Senior-Grade Solutions for iOS & Android
              </h2>
            </div>

            {/* Short Summary */}
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              I build high-performance, responsive, and gorgeously animated cross-platform mobile experiences with pixel-perfect accuracy. From robust clean architectures to complex state-management, your product runs flawlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={() => handleScrollTo("#projects")}
                size="lg" 
                className="bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] px-8 py-6 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-slate-900/50 hover:bg-[#0F172A] border-white/10 hover:border-[#4FC3F7]/50 text-white px-8 py-6 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center"
                onClick={() => handleScrollTo("#contact")}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-slate-900/30 hover:bg-[#0F172A] border-white/5 hover:border-[#00E5FF]/50 text-white/90 px-6 py-6 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center"
                asChild
              >
                <a href="/Rajoan_Tamjid_CV.pdf" download="Rajoan_Tamjid_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Trust Badges */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-extrabold">
                CONNECT & AUDIT CODE
              </p>
              <div className="flex space-x-3.5">
                <a 
                  href="https://github.com/21-rajoan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#0F172A]/80 hover:bg-[#4FC3F7] border border-white/5 rounded-full flex items-center justify-center group shadow-lg hover:shadow-[#4FC3F7]/20 hover:scale-105 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5 text-white/70 group-hover:text-[#050816] transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#0F172A]/80 hover:bg-[#00E5FF] border border-white/5 rounded-full flex items-center justify-center group shadow-lg hover:shadow-[#00E5FF]/20 hover:scale-105 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 text-white/70 group-hover:text-[#050816] transition-colors" />
                </a>
                <a 
                  href="mailto:rajoantamjid.21@gmail.com" 
                  className="w-11 h-11 bg-[#0F172A]/80 hover:bg-[#4FC3F7] border border-white/5 rounded-full flex items-center justify-center group shadow-lg hover:shadow-[#4FC3F7]/20 hover:scale-105 transition-all duration-300"
                  aria-label="Email Me"
                >
                  <Mail className="h-5 w-5 text-white/70 group-hover:text-[#050816] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Responsive Smartphone Mockups (5 Cols) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center items-center h-[520px] sm:h-[640px]">
            
            {/* Background Soft Glow Aura Behind Device Mockups */}
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-[#4FC3F7]/20 to-[#00E5FF]/20 rounded-full blur-[100px] opacity-60"></div>
            
            {/* Primary Overlapping Phone Mockup (Front Device) */}
            <div className="absolute z-20 left-1/2 transform -translate-x-[45%] md:-translate-x-[40%] scale-[0.85] sm:scale-[0.95] md:scale-100 transition-all duration-500 hover:z-30 hover:scale-[1.03]">
              <DeviceMockup themeColor="rgba(0, 229, 255, 0.4)">
                
                {/* Simulator Content: Ride Share App Simulation */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-center mt-3 bg-slate-900/60 p-2.5 rounded-2xl border border-white/5 backdrop-blur-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#00E5FF]/20 flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-[#00E5FF]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white leading-none">Rajoan Taxi</div>
                        <div className="text-[8px] text-[#00E5FF]/80 mt-0.5 font-semibold">ONLINE</div>
                      </div>
                    </div>
                    <div className="bg-[#00E5FF] text-[#050816] text-[8px] px-2 py-0.5 rounded-full font-bold">
                      B.Sc. CSE
                    </div>
                  </div>

                  {/* Simulate Active Map View */}
                  <div className="my-3 flex-1 bg-slate-950/90 rounded-2xl p-3 border border-white/5 relative overflow-hidden flex flex-col justify-end">
                    
                    {/* Simulated Path Line on Map */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4FC3F7_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100">
                      <path d="M 20,80 Q 50,20 80,40" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="20" cy="80" r="4" fill="#4FC3F7" />
                      <circle cx="80" cy="40" r="4" fill="#00E5FF" />
                    </svg>

                    {/* Floating Trip Info Panel */}
                    <div className="relative z-10 bg-[#0F172A]/95 p-2.5 rounded-xl border border-white/10 shadow-xl space-y-1.5">
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-white/40">PICKUP LOCATION</span>
                        <span className="text-[#4FC3F7] font-bold">ETA: 4 MIN</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        <span className="text-[9px] text-white font-bold truncate">Dhaka Sector 12</span>
                      </div>
                      <div className="h-px bg-white/5 my-1"></div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                          <span className="text-[12px] font-extrabold text-white">$24.75</span>
                        </div>
                        <span className="text-[8px] text-white/50">PLATINUM LEVEL</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Simulation Control Buttons */}
                  <div className="bg-slate-900/60 p-2.5 rounded-2xl border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-bold text-white">
                      <span>Ride Mode Active</span>
                      <span className="text-[#00E5FF]">98% Battery</span>
                    </div>
                    <div className="w-full bg-[#00E5FF] text-[#050816] text-center text-[10px] font-bold py-2 rounded-xl uppercase tracking-wider shadow-md">
                      Request Dispatch
                    </div>
                  </div>
                </div>
              </DeviceMockup>
            </div>

            {/* Secondary Overlapping Phone Mockup (Back Device, Offset for depth) */}
            <div className="absolute z-10 left-1/2 transform -translate-x-[78%] md:-translate-x-[75%] -translate-y-[2%] scale-[0.75] sm:scale-[0.85] md:scale-[0.9] opacity-40 blur-[1px] hover:blur-none hover:opacity-100 hover:z-30 hover:scale-[0.98] transition-all duration-500 pointer-events-none sm:pointer-events-auto">
              <DeviceMockup themeColor="rgba(79, 195, 247, 0.3)">
                
                {/* Simulator Content: Finance / Dashboard App Simulation */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="mt-3 flex justify-between items-center text-white">
                    <span className="text-[10px] font-bold">R-Invest Portfolio</span>
                    <ShieldCheck className="w-4 h-4 text-[#4FC3F7]" />
                  </div>

                  {/* Analytics card */}
                  <div className="bg-gradient-to-br from-[#0F172A] to-slate-950 p-3 rounded-2xl border border-white/5 space-y-1 my-3">
                    <span className="text-[8px] text-white/40 uppercase">Total Capital Value</span>
                    <div className="text-[16px] font-black text-white">$142,854.39</div>
                    <div className="text-[9px] text-[#00E5FF] font-bold flex items-center space-x-1">
                      <span>+14.3% this month</span>
                    </div>
                  </div>

                  {/* Mini Charts / Analytics Bar Visualizer */}
                  <div className="flex-1 my-2 bg-slate-900/40 p-2.5 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <span className="text-[8px] text-white/50 uppercase font-bold">Weekly Performance</span>
                    <div className="flex items-end justify-between h-14 px-2">
                      <div className="w-2.5 bg-slate-800 rounded-t-sm h-6"></div>
                      <div className="w-2.5 bg-slate-800 rounded-t-sm h-8"></div>
                      <div className="w-2.5 bg-[#4FC3F7] rounded-t-sm h-12"></div>
                      <div className="w-2.5 bg-[#00E5FF] rounded-t-sm h-10"></div>
                      <div className="w-2.5 bg-slate-800 rounded-t-sm h-7"></div>
                    </div>
                    <div className="flex justify-between text-[7px] text-white/30 px-1 font-bold">
                      <span>MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU</span>
                      <span>FRI</span>
                    </div>
                  </div>

                  {/* Action items */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-xl text-[8px] text-white/80">
                      <span>Flutter Node Client</span>
                      <span className="text-[#4FC3F7] font-bold">STABLE</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-xl text-[8px] text-white/80">
                      <span>Dart VM Optimizer</span>
                      <span className="text-[#00E5FF] font-bold">9.8ms</span>
                    </div>
                  </div>
                </div>
              </DeviceMockup>
            </div>

            {/* Visual element overlapping - floating tag */}
            <div className="absolute top-[80%] left-[5%] xl:left-[-5%] z-30 bg-slate-950/90 border border-[#00E5FF]/40 rounded-2xl p-3 shadow-2xl flex items-center space-x-2.5 backdrop-blur-md animate-float duration-300">
              <div className="w-3 h-3 rounded-full bg-[#00E5FF] animate-ping"></div>
              <div className="text-[10px] text-white">
                <span className="font-extrabold block">Cross-Platform Specialist</span>
                <span className="text-white/50 text-[8px]">Clean Code Certified</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
