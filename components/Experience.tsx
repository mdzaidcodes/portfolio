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
      "Fine-tuned a diffusion-based model on 1,000+ hours of video data to generate real-time lip-sync for AI avatars, enabling natural and accurate speech-to-video alignment",
      "Architected a real-time WebRTC pipeline capturing user voice, converting it via STT, generating LLM responses, synthesising audio via TTS, and streaming chunks to the lip-sync endpoint to receive generated video frames in real time",
      "Reduced end-to-end latency of the WebRTC pipeline from 600ms to 200ms through systematic optimization of audio chunking, streaming, and frame delivery",
      "Self-hosted and deployed Qwen TTS, Qwen 3.5 LLM, Whisper STT, and Indica models on AWS for multilingual speech recognition across English, other major languages, and major Indian languages",
      "Engineered scalable REST endpoints on AWS to serve all hosted models with high availability and low latency under production traffic",
      "Built agentic AI workflows enabling AI avatars to autonomously send emails, Telegram, and WhatsApp messages based on real-time conversation context",
      "Containerized all model services using Docker and orchestrated deployments for consistent, reproducible production environments",
    ],
  },
  {
    title: "AI Applications Developer",
    company: "Nexgen",
    location: "Sharjah, UAE",
    period: "July 2024 – April 2025",
    points: [
      "Developed an AI conversational agent that tracks and stores individual student learning preferences, delivering personalised content recommendations that adapt to each student's progress",
      "Built an exam practice feature that generates personalised practice questions based on topic, difficulty level, and proximity to exam date, improving targeted student preparation",
      "Engineered an AI-powered study plan generator that creates structured revision schedules based on syllabus coverage and time remaining before exams",
      "Reduced LLM inference costs through token optimization strategies including prompt compression and dynamic context windowing to minimise unnecessary token usage",
      "Further reduced operational costs by implementing LLM response caching for frequently repeated queries, avoiding redundant API calls",
      "Led end-to-end project delivery for the Ed-Tech platform, managing timelines, sprint planning, and cross-functional coordination to ensure on-time execution of AI features",
    ],
  },
  {
    title: "Data Backend Developer",
    company: "Raen AI",
    location: "Sharjah, UAE",
    period: "May 2024 – July 2024",
    points: [
      "Built a RAG agent platform allowing users to upload documents or raw text and deploy a fully functional AI assistant on their own websites and applications",
      "Implemented Qdrant as the vector store for the knowledge base, enabling fast and accurate semantic search across user-uploaded content",
      "Integrated guardrails to ensure safe, on-topic AI responses and prevent hallucinations or out-of-scope outputs in deployed agents",
      "Applied token optimization on LLM calls within the RAG pipeline to control inference costs at scale",
      "Implemented user activity tracking across the platform for quality assurance, enabling monitoring of agent interactions and identifying areas for improvement",
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
