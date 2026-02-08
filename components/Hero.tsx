"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Phone } from "lucide-react";

const titles = [
  "AI Engineer",
  "Full Stack Developer",
  "MLOps Engineer",
  "Data Engineer",
];

const particles = [
  { w: 4, h: 4, x: 10, y: 20, dy: -80, dx: 10, dur: 7, delay: 0 },
  { w: 6, h: 6, x: 20, y: 60, dy: -120, dx: -15, dur: 9, delay: 1 },
  { w: 3, h: 3, x: 35, y: 80, dy: -90, dx: 20, dur: 6, delay: 2 },
  { w: 8, h: 8, x: 50, y: 30, dy: -100, dx: -10, dur: 8, delay: 0.5 },
  { w: 5, h: 5, x: 65, y: 70, dy: -110, dx: 15, dur: 10, delay: 3 },
  { w: 4, h: 4, x: 75, y: 40, dy: -70, dx: -20, dur: 7, delay: 1.5 },
  { w: 7, h: 7, x: 85, y: 85, dy: -130, dx: 5, dur: 9, delay: 2.5 },
  { w: 3, h: 3, x: 15, y: 45, dy: -60, dx: 25, dur: 6, delay: 4 },
  { w: 5, h: 5, x: 40, y: 15, dy: -90, dx: -5, dur: 8, delay: 0.8 },
  { w: 6, h: 6, x: 55, y: 55, dy: -100, dx: 10, dur: 7, delay: 3.5 },
  { w: 4, h: 4, x: 90, y: 25, dy: -80, dx: -15, dur: 9, delay: 1.2 },
  { w: 5, h: 5, x: 5, y: 75, dy: -110, dx: 20, dur: 10, delay: 2.8 },
  { w: 3, h: 3, x: 30, y: 50, dy: -70, dx: -10, dur: 6, delay: 4.5 },
  { w: 7, h: 7, x: 70, y: 10, dy: -120, dx: 15, dur: 8, delay: 0.3 },
  { w: 4, h: 4, x: 45, y: 90, dy: -60, dx: -20, dur: 7, delay: 3.2 },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setText(currentTitle.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentTitle.slice(0, text.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#020617]">
        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: p.w,
              height: p.h,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, p.dy],
              x: [0, p.dx],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-400 text-lg md:text-xl mb-6 font-mono tracking-wide"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Muhammad{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Zaid
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8 h-12 md:h-14"
        >
          <span>{text}</span>
          <span className="animate-pulse text-blue-400 ml-1">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Specializing in Deep Learning, Generative AI, and LLM-powered
          applications. Turning research-stage models into products that work at
          scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-5 justify-center items-center mb-16"
        >
          <a
            href="https://github.com/mdzaidcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zaid-221638331"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:zaid.codes@outlook.com"
            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Mail size={22} />
          </a>
          <a
            href="tel:+971502125530"
            className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Phone size={22} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
