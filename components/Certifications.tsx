"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ChevronDown, ChevronUp, X } from "lucide-react";

type Certification = {
  name: string;
  issuer: string;
  description: string;
  credentialFile?: string;
  /** Skills and topics covered — shown in the modal (right column) */
  skillsLearned: string[];
};

function credentialHref(filename: string) {
  return `/certificates/${encodeURIComponent(filename)}`;
}

function isImageFile(name: string) {
  return /\.(png|jpe?g|webp|gif)$/i.test(name);
}

/** Static PNG (first page) for each PDF — generated via `npm run export:pdf-previews` */
function pdfPreviewHref(pdfFilename: string) {
  const pngName = pdfFilename.replace(/\.pdf$/i, ".png");
  return `/certificates/previews/${encodeURIComponent(pngName)}`;
}

const certifications: Certification[] = [
  {
    name: "Samsung Innovation Campus",
    issuer: "Samsung Gulf",
    description:
      "Comprehensive foundations in mathematics and statistics for ML and data science. Core concepts in supervised, unsupervised, and reinforcement learning. Deep learning architectures and generative AI fundamentals.",
    credentialFile: "samsung innovation campus.pdf",
    skillsLearned: [
      "Probability & statistics for ML",
      "Supervised, unsupervised & reinforcement learning",
      "Deep learning fundamentals",
      "Generative AI concepts",
      "Data preprocessing & evaluation",
      "Model intuition and architecture choices",
    ],
  },
  {
    name: "An Intuitive Introduction to Probability",
    issuer: "University of Zurich | Coursera",
    description:
      "Fundamental principles of probability theory, including conditional probability, random variables, expected values, variances, and normal distributions.",
    credentialFile: "An Intuative Introdution to Probability.pdf",
    skillsLearned: [
      "Conditional probability & Bayes thinking",
      "Random variables & distributions",
      "Expectation, variance & covariance",
      "Normal (Gaussian) models",
      "Applying probability to real data problems",
    ],
  },
  {
    name: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Imperial College London | Coursera",
    description:
      "Core concepts of linear algebra, including vectors, matrices, eigenvalues, and eigenvectors, applied using Python and NumPy.",
    credentialFile: "Mathematics for Machine Learning- Linear Algebra.pdf",
    skillsLearned: [
      "Vectors, matrices & tensor thinking",
      "Eigenvalues & eigenvectors",
      "Orthogonality & projections",
      "Implementing LA in Python / NumPy",
      "Linking linear algebra to ML algorithms",
    ],
  },
  {
    name: "Mathematics for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    description:
      "Foundations in algebra and calculus for machine learning and data science, including vectors, matrices, derivatives, and optimization.",
    credentialFile: "Mathematics for Machine Learning and Data Science.png",
    skillsLearned: [
      "Multivariate calculus for ML",
      "Gradients & optimization basics",
      "Linear systems & matrix methods",
      "Bridging math to data science workflows",
      "Numerical intuition for models",
    ],
  },
  {
    name: "IBM Data Engineering Certificate",
    issuer: "IBM | Coursera",
    description:
      "11 courses on Databases, SQL, NoSQL, Python, Linux, Big Data and Machine Learning.",
    credentialFile: "IBM Data Engineering.pdf",
    skillsLearned: [
      "SQL & relational databases",
      "NoSQL & document stores",
      "Python for data pipelines",
      "Linux & shell for engineering",
      "Big data tooling & concepts",
      "ETL / ELT patterns",
      "ML integration in data stacks",
    ],
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    description:
      "Neural networks, deep learning architectures, sequence models, and practical deep learning projects.",
    credentialFile: "Deep Learning Specialization.png",
    skillsLearned: [
      "Neural nets, activation & optimization",
      "CNNs for vision",
      "Sequence models & RNN/Transformer basics",
      "Structuring DL projects",
      "Hyperparameters & debugging deep models",
    ],
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    description:
      "ML foundations, regression, classification, clustering, and practical applications.",
    credentialFile: "Machine Learning Specialization.png",
    skillsLearned: [
      "Regression & regularization",
      "Classification metrics & models",
      "Clustering & similarity",
      "Recommender systems intuition",
      "ML foundations & practical application",
    ],
  },
  {
    name: "PyTorch for Deep Learning",
    issuer: "DeepLearning.AI",
    description:
      "Professional certificate covering PyTorch fundamentals, ecosystem tools and techniques, and advanced architectures through to deployment.",
    credentialFile: "PyTorch for Deep Learning.png",
    skillsLearned: [
      "PyTorch fundamentals & core APIs",
      "Training workflows, autograd & modules",
      "Ecosystem tools & production-minded patterns",
      "Advanced architectures & deployment",
    ],
  },
  {
    name: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    description:
      "Four-course specialization spanning classification and vector spaces, probabilistic models, sequence models, and attention-based NLP.",
    credentialFile: "Natural Language Processing Specialization.png",
    skillsLearned: [
      "Classification & vector-space NLP",
      "Probabilistic language models",
      "Sequence models for text",
      "Attention mechanisms & modern NLP",
    ],
  },
  {
    name: "TensorFlow Developer Professional Certificate",
    issuer: "DeepLearning.AI",
    description:
      "Professional certificate on building and deploying models with TensorFlow, from fundamentals through CNNs, NLP, and time-series prediction.",
    credentialFile: "TensorFlow Developer Professional Certificate.png",
    skillsLearned: [
      "TensorFlow fundamentals for ML & DL",
      "Convolutional models in TensorFlow",
      "NLP pipelines in TensorFlow",
      "Sequences, time series & forecasting",
    ],
  },
  {
    name: "Google AI Essentials",
    issuer: "Google | Coursera",
    description:
      "Fundamentals of artificial intelligence, including AI tools, effective prompts, and responsible AI application.",
    credentialFile: "Google AI Essentials.pdf",
    skillsLearned: [
      "Responsible AI & limitations",
      "Prompt design for productivity",
      "Choosing the right AI tools",
      "Bias, safety & transparency awareness",
      "Staying current with AI trends",
    ],
  },
  {
    name: "Google Prompting Essentials",
    issuer: "Google | Coursera",
    description:
      "Crafting effective prompts and using generative AI tools productively and responsibly.",
    credentialFile: "Google prompting essentials.pdf",
    skillsLearned: [
      "Clear, specific prompting patterns",
      "Iterative refinement of outputs",
      "Grounding models with context",
      "Productivity workflows with gen-AI",
      "Quality & safety in generated content",
    ],
  },
  {
    name: "Agile Project Management",
    issuer: "Google | Coursera",
    description:
      "Project management certification focused on Agile methodologies and best practices.",
    credentialFile: "Agile Project Management.pdf",
    skillsLearned: [
      "Agile principles & Scrum basics",
      "Sprints, backlogs & prioritization",
      "Stakeholder communication",
      "Risk & change in iterative delivery",
      "Team coordination & retrospectives",
    ],
  },
  {
    name: "Applying Project Management in Real Life",
    issuer: "Google | Coursera",
    description:
      "Applying project management concepts, tools, and communication in real workplace scenarios.",
    credentialFile: "Google Applying Project Management in Real Life.pdf",
    skillsLearned: [
      "Translating PM theory to day-to-day work",
      "Tooling for schedules & dependencies",
      "Cross-functional alignment",
      "Status reporting & escalation",
      "Real-world trade-offs & delivery",
    ],
  },
];

/** Compact preview in grid card — border hugs the credential (no full-width empty frame) */
function CredentialThumb({ cert }: { cert: Certification }) {
  if (!cert.credentialFile) {
    return (
      <div className="flex w-full justify-center">
        <div className="inline-flex items-center justify-center rounded-lg border border-slate-600/40 bg-slate-900/40 p-4">
          <Award className="h-10 w-10 text-slate-600" aria-hidden />
        </div>
      </div>
    );
  }

  const href = credentialHref(cert.credentialFile);

  if (isImageFile(cert.credentialFile)) {
    return (
      <div className="flex w-full justify-center">
        <div className="inline-block max-w-full rounded-lg border border-slate-600/40 bg-slate-900/40 p-1.5 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={href}
            alt=""
            className="block max-h-40 w-auto max-w-full object-contain"
          />
        </div>
      </div>
    );
  }

  const previewSrc = pdfPreviewHref(cert.credentialFile);

  return (
    <div className="flex w-full justify-center">
      <div className="inline-block max-w-full overflow-hidden rounded-lg border border-slate-600/40 bg-slate-900/40 p-1.5 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewSrc}
          alt=""
          className="block max-h-40 w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

/** Left column: full credential scaled to fit viewport height — no scrolling */
function CredentialModalPreview({ cert }: { cert: Certification }) {
  if (!cert.credentialFile) {
    return (
      <div className="flex w-full justify-center">
        <div className="inline-flex min-h-[160px] min-w-[160px] items-center justify-center rounded-xl border border-dashed border-slate-600/60 bg-slate-950/40 p-6">
          <Award className="h-16 w-16 text-slate-600" aria-hidden />
        </div>
      </div>
    );
  }

  if (isImageFile(cert.credentialFile)) {
    const href = credentialHref(cert.credentialFile);
    return (
      <div className="flex w-full justify-center">
        <div className="inline-block max-w-[min(100%,42rem)] rounded-xl border border-slate-600/50 bg-slate-950/50 p-2 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={href}
            alt={`${cert.name} credential`}
            className="block max-h-[min(68vh,640px)] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    );
  }

  const previewSrc = pdfPreviewHref(cert.credentialFile);

  return (
    <div className="flex w-full justify-center">
      <div className="inline-block max-w-[min(100%,42rem)] overflow-hidden rounded-xl border border-slate-600/50 bg-slate-950/50 p-2 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewSrc}
          alt={`${cert.name} credential`}
          className="block max-h-[min(68vh,640px)] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

function SkillsLearnedPanel({ skills }: { skills: string[] }) {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-xl border border-slate-600/40 bg-slate-800/40 p-6 lg:border-l lg:border-t-0 lg:border-slate-700 lg:pl-9">
      <h3 className="text-center text-base font-bold uppercase tracking-wide text-blue-400 lg:text-left">
        Skills
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-slate-600/50 bg-slate-900/60 px-3.5 py-3.5 text-center shadow-sm"
          >
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const closeModal = useCallback(() => setSelectedCert(null), []);

  useEffect(() => {
    if (!selectedCert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedCert, closeModal]);

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
            >
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="group w-full cursor-pointer rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 text-center transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-blue-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <CredentialThumb cert={cert} />
                <div className="mt-4 flex flex-col items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Award size={18} aria-hidden />
                  </div>
                  <div className="w-full min-w-0 px-0.5">
                    <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-blue-400/70 text-xs mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 text-[11px] mt-2">
                      Tap for credential & skills
                    </p>
                  </div>
                </div>
              </button>
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
              type="button"
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

      <AnimatePresence>
        {selectedCert ? (
          <motion.div
            key="cert-modal"
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"
              onClick={closeModal}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="relative z-[201] w-[min(96vw,88rem)] max-w-none max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-600/50 bg-slate-900/95 p-6 pt-14 shadow-2xl shadow-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/60 bg-slate-800/90 text-slate-300 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
              >
                <X size={20} />
              </button>

              <div className="mx-auto max-w-3xl px-2 pr-10 text-center">
                <h2
                  id="cert-modal-title"
                  className="text-lg font-bold text-white sm:text-xl"
                >
                  {selectedCert.name}
                </h2>
                <p className="mt-1 text-sm text-blue-400/80">
                  {selectedCert.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {selectedCert.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
                <div className="min-w-0">
                  <CredentialModalPreview cert={selectedCert} />
                </div>
                <div className="min-w-0">
                  <SkillsLearnedPanel skills={selectedCert.skillsLearned} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
