"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiFiverr, SiUpwork, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/heyshahmeer", label: "GitHub", color: "hover:text-[#D1D1D1]" },
    { icon: SiX, href: "https://x.com/heyshahmeer", label: "X", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/shahmeershahid", label: "LinkedIn", color: "hover:text-[#4A0E0E]" },
    { icon: FaEnvelope, href: "mailto:shahmeer.dev786@gmail.com", label: "Email", color: "hover:text-[#4A0E0E]" },
    { icon: FaInstagram, href: "https://instagram.com/heyshahmeer_", label: "Instagram", color: "hover:text-[#4A0E0E]" },
    { icon: SiFiverr, href: "https://www.fiverr.com/sellers/theshahmeer", label: "Fiverr", color: "hover:text-[#4A0E0E]" },
    { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01cf0ddf9b8b985b15", label: "Upwork", color: "hover:text-[#4A0E0E]" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "DevSecOps", href: "/devsecops" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-black overflow-hidden min-h-[500px]">
      {/* Background Image - Precisely Positioned & Fixed */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-no-repeat"
          style={{
            backgroundImage: "url('/footer_ultra_clear.png')",
            backgroundPosition: 'right bottom'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D1D1D1]">Shahmeer Shahid</h3>
            <p className="text-[#8E8E93] text-sm leading-relaxed mb-4">
              Frontend Developer & DevSecOps Advocate. Building secure, scalable web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-[#505052] ${social.color} transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D1D1D1]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[#8E8E93] hover:text-[#4A0E0E] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D1D1D1]">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-[#8E8E93]">
              <li>
                <a
                  href="mailto:theshahmeer786@gmail.com"
                  className="hover:text-[#8E8E93] transition-colors"
                >
                  theshahmeer786@gmail.com
                </a>
              </li>
              <li className="text-[#505052]">Islamabad, Pakistan</li>
              <li>
                <a
                  href="/resume-devsecops.pdf"
                  download
                  className="text-[#4A0E0E] hover:text-[#5F0A0A] transition-colors inline-flex items-center gap-2"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#505052] text-sm">
            © {currentYear} Shahmeer Shahid. All rights reserved.
          </p>
          <p className="text-[#505052] text-sm">
            Built with <span className="text-[#D1D1D1]">Next.js</span> & <span className="text-[#4A0E0E]">Security</span> in mind
          </p>
        </div>
      </div>
    </footer>
  );
}

