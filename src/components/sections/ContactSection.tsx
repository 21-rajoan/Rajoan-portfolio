import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolioData";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll respond shortly.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-[#0d1f3c] border border-[#1a2e50] rounded-sm text-[13px] font-mono " +
    "text-[#CCD6F6] placeholder:text-[#4a5c78] focus:outline-none focus:border-[#64FFDA]/50 transition-colors duration-150";

  return (
    <section
      id="contact"
      className="mb-20 scroll-mt-16 md:mb-28 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <h2 className="section-label">Contact</h2>

      <p className="text-[14px] text-[#8892B0] leading-[1.8] mb-8 max-w-md">
        I'm open to new engineering roles, mobile architecture contracts, and consulting.
        If you have an interesting project or position, feel free to reach out.
      </p>

      {/* Contact info card */}
      <div className="p-5 rounded-md border border-[#1a2e50] bg-[#0d1f3c]/50 mb-8 space-y-3">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="flex items-center gap-3 text-[13px] font-mono text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-150"
        >
          <Mail size={13} strokeWidth={1.5} className="text-[#64FFDA] flex-shrink-0" />
          {portfolioData.personal.email}
        </a>

        <div className="flex items-center gap-3 text-[13px] font-mono text-[#4a5c78]">
          <Phone size={13} strokeWidth={1.5} className="text-[#64FFDA] flex-shrink-0" />
          {portfolioData.personal.phone}
        </div>

        <div className="flex items-center gap-3 text-[13px] font-mono text-[#4a5c78]">
          <MapPin size={13} strokeWidth={1.5} className="text-[#64FFDA] flex-shrink-0" />
          {portfolioData.personal.location} · Remote available
        </div>

        <div className="pt-3 border-t border-[#1a2e50] flex items-center gap-5">
          {[
            {
              href: portfolioData.social.find((s) => s.platform === "GitHub")?.url,
              Icon: Github,
              label: "GitHub",
            },
            {
              href: portfolioData.social.find((s) => s.platform === "LinkedIn")?.url,
              Icon: Linkedin,
              label: "LinkedIn",
            },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#4a5c78] hover:text-[#8892B0] transition-colors duration-150"
            >
              <Icon size={12} strokeWidth={1.5} />
              {label}
              <ArrowUpRight size={10} className="opacity-50" />
            </a>
          ))}
        </div>
      </div>

      {/* Minimal inquiry form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-[11px] font-mono text-[#4a5c78] uppercase tracking-wider mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono text-[#4a5c78] uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="jane@company.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-mono text-[#4a5c78] uppercase tracking-wider mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell me about your role or project..."
            className={inputClass + " resize-none"}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary mt-1"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={12} strokeWidth={1.8} />
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-[#1a2e50]/70">
        <p className="text-[11px] font-mono text-[#2d4060] leading-relaxed">
          Built with React, TypeScript &amp; Tailwind CSS · Set in Inter &amp; JetBrains Mono
        </p>
        <p className="text-[11px] font-mono text-[#2d4060] mt-0.5">
          © {new Date().getFullYear()} {portfolioData.personal.name}
        </p>
      </footer>
    </section>
  );
};
