"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "MLOps Engineer",
    company: "Kon Infotech",
    location: "Dubai, UAE",
    period: "April 2025 – Present",
    points: [
      "Fine-tune Large Language Models (LLMs) and other Generative AI models for production use",
      "Design and implement agentic AI workflows to automate complex decision-making tasks",
      "Containerize machine learning models using Docker for efficient deployment and scalability",
      "Develop workflows for training, evaluating, fine-tuning, and deploying ML models across environments",
      "Build and maintain APIs for secure and scalable access to deployed machine learning models",
      "Collaborate with cross-functional teams to create reliable and cost-effective ML deployment pipelines",
      "Optimize model serving for high availability, low latency, and seamless user experience",
    ],
  },
  {
    title: "AI Applications Developer",
    company: "Nexgen",
    location: "Sharjah, UAE",
    period: "July 2024 – April 2025",
    points: [
      "Developed and maintained AI-powered Ed-Tech platform using machine learning techniques",
      "Led AI chatbot development, including model training and fine-tuning using Generative AI algorithms",
      "Managed project life cycle for educational technology initiatives, from planning to execution",
      "Researched and integrated advanced AI algorithms for product enhancement",
      "Collaborated with cross-functional teams to design AI solutions and optimize backend systems",
      "Developed and maintained company website",
    ],
  },
  {
    title: "Data Backend Developer",
    company: "Raen AI",
    location: "Sharjah, UAE",
    period: "May 2024 – July 2024",
    points: [
      "Researched and implemented cutting-edge AI, ML, and related technologies for enhanced product development",
      "Gained proficiency in existing AI systems, tools, and company infrastructure",
      "Assisted in the full lifecycle of AI model and web development, from design to testing",
      "Executed integration of AI components into existing applications with seamless deployment",
    ],
  },
  {
    title: "Project Intern",
    company: "Corporate Lounge",
    location: "United States (Remote)",
    period: "June 2023 – April 2024",
    points: [
      "Assisted in project planning, progress monitoring, and risk management for business initiatives",
      "Designed UI/UX for mobile applications, enhancing user experience",
      "Captured and detailed 25 project requirements while collaborating with cross-functional teams",
      "Facilitated on-time delivery of three major business initiatives over a six-month period",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in AI and software development"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`mb-10 md:mb-14 pl-8 md:pl-0 ${
                i % 2 === 0
                  ? "md:w-[calc(50%-1.5rem)] md:max-w-[calc(50%-1.5rem)] md:pr-0 md:text-right"
                  : "md:pl-[calc(50%+1.5rem)]"
              }`}
            >
              {/* Timeline dot — positioned relative to timeline container so it sits on the line (mobile: left edge, desktop: center) */}
              <div className="absolute top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 left-0 md:left-1/2 -translate-x-1/2 z-10 shadow-lg shadow-blue-500/50" />

              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                <div
                  className={`flex flex-col gap-1 mb-4 ${
                    i % 2 === 0 ? "md:items-end" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                  <div
                    className={`flex items-center gap-4 text-slate-400 text-sm ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul
                  className={`space-y-2 ${i % 2 === 0 ? "md:text-left" : ""}`}
                >
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-slate-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1 flex-shrink-0">
                        &#9656;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
