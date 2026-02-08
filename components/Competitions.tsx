"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Medal } from "lucide-react";

const competitions = [
  {
    name: "Birmingham Bounty Challenge 2026",
    highlight: true,
    achievement: "Won",
  },
  { name: "AI Genesis Hackathon 2025", highlight: false, achievement: "" },
  { name: "NYU Vibe Coding Hackathon 2025", highlight: false, achievement: "" },
  {
    name: "Sharjah Travels and Tourism Hackathon 2025",
    highlight: false,
    achievement: "",
  },
  {
    name: "Finspire Hackathon, Bits Pilani",
    highlight: true,
    achievement: "First Place",
  },
  { name: "Gargash AI Hackathon 2025", highlight: false, achievement: "" },
  { name: "Camb AI Hackathon 2024", highlight: false, achievement: "" },
  {
    name: "Youth AI Hackathon 2024",
    highlight: true,
    achievement: "First Place",
  },
  { name: "Devslam Hackathon 2024", highlight: false, achievement: "" },
  {
    name: "RTA Self Driving Challenge 2023",
    highlight: true,
    achievement: "Top 6 Finalist in UAE",
  },
  { name: "Metaverse Mastery Hackathon 2022", highlight: false, achievement: "" },
  { name: "RTA Hackathon 2022", highlight: false, achievement: "" },
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Hackathons & Competitions"
          subtitle="Competing, collaborating, and building under pressure"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                comp.highlight
                  ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-400/50 shadow-lg shadow-blue-500/5"
                  : "bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30"
              }`}
            >
              {comp.highlight ? (
                <Trophy size={20} className="text-yellow-400 flex-shrink-0" />
              ) : (
                <Medal size={20} className="text-slate-500 flex-shrink-0" />
              )}
              <div>
                <h3
                  className={`font-semibold text-sm ${
                    comp.highlight ? "text-white" : "text-slate-300"
                  }`}
                >
                  {comp.name}
                </h3>
                {comp.achievement && (
                  <p className="text-blue-400 text-xs font-medium mt-0.5">
                    {comp.achievement}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
