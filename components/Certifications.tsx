"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  {
    name: "Samsung Innovation Campus",
    issuer: "Samsung Gulf",
    description:
      "Comprehensive foundations in mathematics and statistics for ML and data science. Core concepts in supervised, unsupervised, and reinforcement learning. Deep learning architectures and generative AI fundamentals.",
  },
  {
    name: "An Intuitive Introduction to Probability",
    issuer: "University of Zurich | Coursera",
    description:
      "Fundamental principles of probability theory, including conditional probability, random variables, expected values, variances, and normal distributions.",
  },
  {
    name: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Imperial College London | Coursera",
    description:
      "Core concepts of linear algebra, including vectors, matrices, eigenvalues, and eigenvectors, applied using Python and NumPy.",
  },
  {
    name: "IBM Data Engineering Certificate",
    issuer: "IBM | Coursera",
    description:
      "11 courses on Databases, SQL, NoSQL, Python, Linux, Big Data and Machine Learning.",
  },
  {
    name: "Applied Data Science with Python",
    issuer: "University of Michigan | Coursera",
    description:
      "5-course specialization in Python, data visualization, machine learning, and text mining.",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "University of Washington | Coursera",
    description:
      "Comprehensive 4-course program covering ML foundations, regression, classification, and clustering.",
  },
  {
    name: "Advanced Machine Learning Specialization",
    issuer: "HSE University | Coursera",
    description:
      "7-course specialization by Kaggle Grandmasters covering Bayesian methods, deep learning, and reinforcement learning.",
  },
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM | Coursera",
    description:
      "6 courses on deep learning with PyTorch, Keras, TensorFlow, computer vision, and NLP.",
  },
  {
    name: "IBM Machine Learning Professional Certificate",
    issuer: "IBM | Coursera",
    description:
      "6-course certificate covering supervised/unsupervised learning, deep learning, and time series analysis.",
  },
  {
    name: "IBM Applied AI Professional Certificate",
    issuer: "IBM | Coursera",
    description:
      "Practical AI implementations including Watson AI services and chatbot development.",
  },
  {
    name: "IBM Generative AI Engineering Professional Certificate",
    issuer: "IBM | Coursera",
    description:
      "Specialized in LLMs, prompt engineering, and generative AI applications.",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google | Coursera",
    description:
      "Fundamentals of artificial intelligence, including AI tools, effective prompts, and responsible AI application.",
  },
  {
    name: "AI Developer Professional Certificate",
    issuer: "IBM",
    description:
      "Professional certification for AI development practices and methodologies.",
  },
  {
    name: "Mistral AI Development with LangChain & Ollama",
    issuer: "Udemy",
    description:
      "Specialized course on Mistral AI model development with LangChain and Ollama frameworks.",
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "IBM",
    description:
      "Comprehensive data science certification covering the full data science methodology.",
  },
  {
    name: "Agile Project Management",
    issuer: "Google",
    description:
      "Project management certification focused on Agile methodologies and best practices.",
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 8);

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning through industry-recognized programs"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {visibleCerts.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
              className="group p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-blue-400/70 text-xs mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              {showAll
                ? "Show Less"
                : `Show All ${certifications.length} Certifications`}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
