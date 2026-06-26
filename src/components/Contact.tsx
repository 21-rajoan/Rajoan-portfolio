import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Inquiry Sent!",
      description: "Thank you, Rajoan will review your mobile app specifications shortly.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#050816] border-b border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#00E5FF]/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#4FC3F7] uppercase tracking-widest">
            INQUIRY CHANNELS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Interested in implementing an enterprise mobile ecosystem or hiring an expert? Complete the ledger below or contact directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Direct Channels Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A]/40 backdrop-blur-md border border-white/5 rounded-[32px] p-8 space-y-8 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-950 border border-white/10 flex items-center justify-center text-3xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Rajoan Tamjid</h3>
                    <p className="text-xs text-[#4FC3F7] font-bold uppercase tracking-wider">Flutter Architect Specialist</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed pt-2">
                  Currently open for strategic freelance commissions, architectural consultations, and full-time senior-grade opportunities with visionary startups.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <a 
                  href="mailto:rajoantamjid.21@gmail.com" 
                  className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4FC3F7]/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#4FC3F7]/10 rounded-xl flex items-center justify-center text-[#4FC3F7]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase font-bold block">DIRECT EMAIL</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">rajoantamjid.21@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/8801734341140" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center text-[#00E5FF]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase font-bold block">WHATSAPP CHAT</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">+8801734341140</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase font-bold block">BASE LOCATION</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Download Resume / Socials block */}
              <div className="pt-6 border-t border-white/5 space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#050816] font-bold uppercase tracking-wider text-xs py-5 rounded-xl transition-all"
                  asChild
                >
                  <a href="/Rajoan_Tamjid_CV.pdf" download="Rajoan_Tamjid_CV.pdf">
                    <Download className="w-4.5 h-4.5 mr-2" />
                    Download Resume CV
                  </a>
                </Button>

                <div className="flex justify-center space-x-4 pt-2">
                  <a 
                    href="https://github.com/21-rajoan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-[#4FC3F7]/50 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rajoan-tamjid-170b13249/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-[#00E5FF]/50 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F172A]/40 backdrop-blur-md border border-white/5 rounded-[32px] p-8 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Mobile App Project Architecture Design"
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Your Specifications
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your mobile product scope, timeline target, or technical requirements..."
                    className="w-full px-4 py-3 bg-slate-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-white/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-[#00E5FF]/50 text-white font-bold py-5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#00E5FF]" />
                  <span>Transmit Specifications</span>
                </Button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
