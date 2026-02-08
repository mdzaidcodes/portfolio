"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 md:mb-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
