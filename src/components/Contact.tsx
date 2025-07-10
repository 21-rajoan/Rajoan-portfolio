
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Sparkles, MessageCircle } from "lucide-react";
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
    
    // Simulate form submission
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
    <section id="contact" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in border border-teal-500/20">
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent animate-fade-in delay-200">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto mb-6 animate-scale-in delay-300"></div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg animate-fade-in delay-500">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you and bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-500 animate-fade-in delay-700">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Send className="h-6 w-6 text-teal-400" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 text-white py-4 font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 border-0"
              >
                Send Message
                <Send className="ml-3 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in delay-900">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-teal-400" />
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of the channels below.
              </p>

              {/* Enhanced Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:rajoan.antor@example.com"
                  className="flex items-center p-6 bg-gradient-to-r from-gray-700/50 to-gray-600/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-teal-500/50 transition-all duration-500 group hover:shadow-lg hover:shadow-teal-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-400/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Email</p>
                    <p className="text-gray-400">rajoan.antor@example.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+8801234567890"
                  className="flex items-center p-6 bg-gradient-to-r from-gray-700/50 to-gray-600/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-500 group hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Phone</p>
                    <p className="text-gray-400">+880 123 456 7890</p>
                  </div>
                </a>

                <div className="flex items-center p-6 bg-gradient-to-r from-gray-700/50 to-gray-600/30 backdrop-blur-sm rounded-2xl border border-gray-600/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-2xl flex items-center justify-center mr-6">
                    <MapPin className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Location</p>
                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-white mb-6">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/rajoan-antor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl flex items-center justify-center hover:from-blue-600/30 hover:to-blue-500/20 transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/20 hover:border-blue-500/40"
                  >
                    <Linkedin className="h-8 w-8 text-blue-400" />
                  </a>
                  <a 
                    href="https://github.com/rajoan-antor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-gray-600/20 to-gray-500/10 rounded-2xl flex items-center justify-center hover:from-gray-600/30 hover:to-gray-500/20 transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20 border border-gray-500/20 hover:border-gray-500/40"
                  >
                    <Github className="h-8 w-8 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-20 pt-10 border-t border-gray-700/50 text-center animate-fade-in delay-1100">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span>Always ready for new challenges</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>
          <p className="text-gray-500">
            © 2024 Rajoan Tamjid Antor. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
