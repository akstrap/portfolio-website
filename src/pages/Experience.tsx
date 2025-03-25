import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const experiences = [
  {
    title: "Bocconi University",
    role: "ML/AI Research Assistant",
    location: "Milan, Italy",
    date: "Jan 2025 – May 2025",
    description: [
      "researched income inequality + economic growth using ml models",
      "processed + cleaned socio-economic datasets with pandas & numpy",
      "worked w/ cross-disciplinary teams on ethical ai frameworks",
    ],
  },
  {
    title: "CoStar Group",
    role: "Full Stack Software Eng. Intern",
    location: "Richmond, VA",
    date: "Jun 2024 – Aug 2024",
    description: [
      "built micro frontends + apis using react, express, docker, .net",
      "created etl pipelines to handle 1M+ property listings",
      "improved reporting pipeline for 15% faster internal data access",
    ],
  },
  {
    title: "Citizens Financial Group",
    role: "Data Engineer Intern",
    location: "Remote",
    date: "Jan 2024 – May 2024",
    description: [
      "built scalable data pipeline using c#, kafka, and postgresql",
      "automated 3k+ json records daily, saving manual hours",
      "optimized analytics workload performance by ~25%",
    ],
  },
  {
    title: "J.B. Hunt",
    role: "Mobile Software Dev Intern",
    location: "Lowell, AR",
    date: "May 2023 – Dec 2023",
    description: [
      "developed cross-platform features w/ react native",
      "shipped reusable components to support 5k+ daily drivers",
      "cut launch time by 0.4s by improving legacy code",
    ],
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-primary">
      <AnimatedSection>
        <h2 className="text-4xl font-semibold mb-12 text-center text-highlight">
          experience
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* left-side tabs */}
          <div className="flex md:flex-col gap-4 md:w-1/3">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`text-left px-4 py-3 rounded-md border text-sm transition-all
                  ${
                    selectedIndex === i
                      ? "bg-accent/10 border-accent text-accent font-medium shadow"
                      : "border-gray-300 hover:bg-surface"
                  }
                `}
              >
                {exp.title}
              </button>
            ))}
          </div>

          {/* right-side animated content */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-surface p-6 rounded-xl border border-accent shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-1">{selected.role}</h3>
                <p className="text-gray-600 mb-1">
                  {selected.title} — {selected.location}
                </p>
                <p className="text-sm text-gray-500 mb-4">{selected.date}</p>

                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  {selected.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
