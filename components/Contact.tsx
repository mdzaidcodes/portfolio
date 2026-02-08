"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zaid.codes@outlook.com",
    href: "mailto:zaid.codes@outlook.com",
  },
  {
    icon: Mail,
    label: "Alt Email",
    value: "zaidcodes31@gmail.com",
    href: "mailto:zaidcodes31@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 212 5530",
    href: "tel:+971502125530",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sharjah, UAE",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mdzaidcodes",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-zaid-221638331",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities and interesting projects"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">{item.label}</p>
                      <p className="text-white font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">{item.label}</p>
                      <p className="text-white font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-slate-400 text-center mb-8">
              Whether you have a project idea, a job opportunity, or just want to
              chat about AI — I&apos;d love to hear from you.
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-700/50 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 border border-transparent transition-all duration-300"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
            <a
              href="mailto:zaid.codes@outlook.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send size={18} />
              Send an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
