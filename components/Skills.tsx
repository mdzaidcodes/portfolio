"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Brain, Cpu, Cloud, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C#", "JavaScript"],
  },
  {
    title: "Deep Learning & Neural Networks",
    icon: Brain,
    skills: [
      "PyTorch",
      "TensorFlow/Keras",
      "CNNs",
      "RNNs",
      "LSTMs",
      "Transformers",
      "Transfer Learning",
      "Model Optimization",
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Cpu,
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Databases",
      "HuggingFace",
      "Fine Tuning",
      "LoRA",
      "QLoRA",
      "Agentic AI",
    ],
  },
  {
    title: "MLOps & Deployment",
    icon: Cloud,
    skills: ["Docker", "MLflow", "GitHub Actions", "AWS", "GCP"],
  },
  {
    title: "Web & Backend",
    icon: Globe,
    skills: ["React", "Next.js", "Node.js", "Flask", "FastAPI"],
  },
  {
    title: "Tools & Project Management",
    icon: Wrench,
    skills: ["Git", "Jira", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with daily"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <category.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + j * 0.03 }}
                    className="px-3 py-1.5 text-sm bg-slate-700/50 text-slate-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
