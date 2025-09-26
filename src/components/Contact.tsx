
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle } from "lucide-react";
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
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
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
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact With Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8">
              <img 
                src="/lovable-uploads/af9cc730-9df3-4684-988b-2351ef1cbb55.png"
                alt="Profile"
                className="w-20 h-20 rounded-lg object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Rajoan Tamjid</h3>
              <p className="text-muted-foreground mb-6">Flutter Developer</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I am available for freelance work. Connect with me via and call in to my account.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-4" />
                  <span className="text-muted-foreground">+880 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <span className="text-muted-foreground">rajoan.antor@example.com</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  FIND WITH ME
                </p>
                <div className="flex space-x-4">
                  <a className="w-12 h-12 bg-background hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a className="w-12 h-12 bg-background hover:bg-primary transition-colors duration-300 rounded-lg flex items-center justify-center group">
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-colors"
                />
              </div>

              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
