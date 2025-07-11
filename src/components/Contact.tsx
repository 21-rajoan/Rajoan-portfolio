
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you and bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 text-primary mr-3" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of the channels below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="mailto:rajoan.antor@example.com"
                  className="flex items-center p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">rajoan.antor@example.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+8801234567890"
                  className="flex items-center p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+880 123 456 7890</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/rajoan-antor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/rajoan-antor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Rajoan Tamjid Antor. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
