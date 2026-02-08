"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    name: "CodeDocs-AI",
    description:
      "An intelligent code documentation generator that analyzes codebases and automatically creates comprehensive documentation. It includes security vulnerability detection, code improvement suggestions, and a RAG-powered chat assistant.",
    tags: ["RAG", "LangChain", "Python", "AI"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Ripple",
    description:
      "An application that analyses how oil price fluctuations and currency movements ripple through investment portfolios, helping investors understand who benefits and who doesn't. Combines real-time market data, interactive visualizations, and AI-powered portfolio analysis.",
    tags: ["AI", "Finance", "Data Viz", "Real-time"],
    color: "from-blue-600/20 to-indigo-500/20",
  },
  {
    name: "MediAssist-Pro",
    description:
      "Doctor assistant platform that converts voice consultations to text notes while providing symptom analysis and differential diagnosis suggestions. Offers analysis for medical reports and patient history support tools. Built with Next.js frontend, FastAPI backend, Ollama for local LLM inference.",
    tags: ["Next.js", "FastAPI", "Ollama", "Healthcare"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "MailAssist",
    description:
      "AI-powered personal assistant that connects to Gmail to automatically organize emails, detect scams, extract meeting details, track tasks, and provide voice/text commands. Features a dashboard with tasks, calendar meetings, and AI email summaries with automatic task resolution.",
    tags: ["Gmail API", "AI", "NLP", "Dashboard"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "EduAI-Companion",
    description:
      "Teacher assistant platform that automatically grades essays and assignments while providing detailed feedback and generating personalized lesson plans. Tracks student progress through analytics and creates interactive quizzes aligned with curriculum standards.",
    tags: ["Next.js", "FastAPI", "Ollama", "Education"],
    color: "from-blue-500/20 to-indigo-600/20",
  },
  {
    name: "StyleForge",
    description:
      "AI-powered male stylist application that transforms outfit selection into an engaging, personalized experience through intelligent recommendations and real-time styling conversations with AI-driven coordination suggestions.",
    tags: ["AI", "Fashion", "Recommendations", "Chat"],
    color: "from-cyan-600/20 to-blue-500/20",
  },
  {
    name: "WanderGuide-AI",
    description:
      "AI travel planning agent that creates personalized itineraries based on user interests with real-time booking assistance and location-aware recommendations. Offers weather-based activity suggestions and budget optimization.",
    tags: ["AI Agent", "Travel", "Real-time", "Planning"],
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    name: "ChefMate-AI",
    description:
      "AI-powered meal planning system that generates personalized recipes based on available ingredients and dietary preferences with nutritional analysis. Creates shopping lists and offers meal prep scheduling with batch cooking suggestions.",
    tags: ["AI", "NLP", "Meal Planning", "Health"],
    color: "from-indigo-600/20 to-blue-500/20",
  },
  {
    name: "DocuChat-AI",
    description:
      "Custom RAG chatbot that allows users to upload documents and chat with them using intelligent semantic search. Provides cited responses from uploaded documents. Built with Next.js, Flask, Ollama, Chroma vector database, and LangChain.",
    tags: ["RAG", "LangChain", "Chroma", "Next.js", "Flask"],
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    name: "CarConvo",
    description:
      "Conversational car recommendation system using natural language to gather user requirements and match them with suitable vehicles based on lifestyle and budget. Provides comparative analysis and helps estimate insurance and trade-in values.",
    tags: ["NLP", "Conversational AI", "Recommendations"],
    color: "from-cyan-500/20 to-indigo-500/20",
  },
  {
    name: "Nevra",
    description:
      "A speech-driven Q&A platform that keeps you connected in real time. As the speaker presents, Nevra instantly transcribes their words, giving live access to text. Features built-in AI for chatting, asking questions, and diving deeper into content as it unfolds.",
    tags: ["Speech-to-Text", "Real-time", "AI", "Q&A"],
    color: "from-blue-500/20 to-blue-600/20",
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A selection of AI-powered applications I've built"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                className="group relative cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col backdrop-blur-sm group-hover:shadow-xl group-hover:shadow-blue-500/5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400/50 font-mono text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  <p
                    className={`text-slate-400 text-sm leading-relaxed mb-4 flex-grow ${
                      expandedIndex === i ? "" : "line-clamp-3"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 font-medium cursor-pointer"
            >
              {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
