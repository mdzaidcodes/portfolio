"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Award, Code2, Rocket } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "3+ Years", description: "Professional Experience" },
  { icon: Award, label: "3 Companies", description: "Industry Experience" },
  { icon: Code2, label: "11+ Projects", description: "AI/ML Applications" },
  { icon: Rocket, label: "11+ Hackathons", description: "Competitions" },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am and what I do"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              AI Engineer specializing in{" "}
              <span className="text-blue-400 font-semibold">Deep Learning</span>,{" "}
              <span className="text-blue-400 font-semibold">Generative AI</span>,
              and{" "}
              <span className="text-blue-400 font-semibold">
                LLM-powered applications
              </span>
              , with experience across the full model lifecycle — research,
              fine-tuning, deployment, and monitoring.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Built and shipped deep learning models, AI agents, and scalable
              Machine Learning systems across three companies in under two years.
              Passionate about turning research-stage models into products that
              work at scale.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Based in Sharjah, UAE, I bring a blend of software engineering
              foundations and cutting-edge AI expertise to every project I work on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <item.icon
                  className="text-blue-400 mb-3 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="text-white font-bold text-xl">{item.label}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
