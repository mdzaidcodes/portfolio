"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BEng (Hons) Software Engineering",
    school: "University of Bolton",
    location: "Ras Al Khaimah, UAE",
    year: "2024",
  },
  {
    degree: "High School Diploma",
    school: "The Indian High School",
    location: "Dubai, UAE",
    year: "2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-blue-400 font-medium mb-1">{edu.school}</p>
              <p className="text-slate-400 text-sm">
                {edu.location} &middot; {edu.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
