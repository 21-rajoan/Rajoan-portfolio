import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 relative bg-transparent">
      <div className="section-container">
        
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <div className="inline-block border-b-2 border-primary mb-6">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase pb-1">
                CONTACT
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Let's Build Something
            </h3>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or looking to hire a dedicated mobile developer? Let's talk.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn direction="right" delay={200}>
              <div className="bg-[#111118] border border-border/50 rounded-2xl p-6 md:p-8">
                <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
                
                <div className="space-y-6">
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-medium break-all">{portfolioData.personal.email}</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-white font-medium">{portfolioData.personal.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white font-medium">{portfolioData.personal.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/50">
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Social Profiles</h4>
                  <div className="flex flex-wrap gap-4">
                    {portfolioData.social.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 bg-secondary/30 border border-border/50 rounded-xl flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all text-muted-foreground"
                        title={social.label}
                      >
                        {social.platform.toLowerCase() === 'github' && <Github className="h-5 w-5" />}
                        {social.platform.toLowerCase() === 'linkedin' && <Linkedin className="h-5 w-5" />}
                        {!['github', 'linkedin'].includes(social.platform.toLowerCase()) && <ExternalLink className="h-5 w-5" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <FadeIn direction="left" delay={400}>
              <div className="bg-[#111118] border border-border/50 rounded-2xl p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder:text-muted-foreground/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder:text-muted-foreground/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder:text-muted-foreground/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 text-white placeholder:text-muted-foreground/50 resize-none transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-xl transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};
