"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Zaid. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mdzaidcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zaid-221638331"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:zaid.codes@outlook.com"
            className="text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
