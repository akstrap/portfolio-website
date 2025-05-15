import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

// direct image imports (correct for Vite & Vercel)
import costarImage from "../assets/CoStarCampus.jpg";
import costarLogo from "../assets/CoStarLogo.png";
import jbhuntImage from "../assets/JBHuntCampus.jpg";
import jbhuntLogo from "../assets/JBHuntLogo.png";
import citizensImage from "../assets/CitizensCampus.jpg";
import citizensLogo from "../assets/CitizensLogo.png";
import bocconiImage from "../assets/Cam1.jpg";
import bocconiLogo from "../assets/BocconiLogo.webp";
import gitHubLogo from "../assets/GitHubLogo.png";
import gitHubImage from "../assets/GitHubCampus.jpg";

interface Experience {
  title: string;
  role: string;
  location: string;
  date: string;
  logo: string;
  image: string;
  scope: string;
  stack: string[];
  impact: string;
  learned: string;
  liked: string;
}

const experiences: Experience[] = [
  {
    title: "GitHub - Full Stack Engineer",
    role: "Full Stack Software Eng. Intern",
    location: "Remote",
    date: "Jun 2025 – Aug 2025",
    logo: gitHubLogo,
    image: gitHubImage,
    scope: "incoming summer 2025 on the Authentication team",
    stack: ["tbd..."],
    impact: "tbd...",
    learned: "tbd...",
    liked: "octocat!",
  },
  {
    title: "Bocconi University - ML/AI Research Assistant",
    role: "ML/AI Research Assistant",
    location: "Milan, Italy",
    date: "Jan 2025 – May 2025",
    logo: bocconiLogo,
    image: bocconiImage,
    scope:
      "researched effects of income inequality on GDP growth using machine learning",
    stack: ["Python", "Pandas", "NumPy", "Random Forest", "Gradient Boosting"],
    impact: "contributed to a multi-institutional research paper (in progress)",
    learned:
      "how to clean and model socio-economic data + work with interdisciplinary researchers",
    liked: "loved applying ml to global issues in a research setting",
  },
  {
    title: "CoStar Group - Full Stack Engineer",
    role: "Full Stack Software Eng. Intern",
    location: "Richmond, VA",
    date: "Jun 2024 – Aug 2024",
    logo: costarLogo,
    image: costarImage,
    scope:
      "developed micro frontends and backend apis to improve data flow + visualization for commercial real estate platform",
    stack: ["React", "TypeScript", "Express", "C#", ".NET Core", "SQL Server"],
    impact: "boosted internal reporting efficiency by 15% across product teams",
    learned:
      "how to build production-grade services + scale backend performance",
    liked:
      "working with smart folks and building tools that actually mattered to analysts",
  },
  {
    title: "Citizens Financial Group - Data Engineer",
    role: "Data Engineer Intern",
    location: "Remote",
    date: "Jan 2024 – May 2024",
    logo: citizensLogo,
    image: citizensImage,
    scope:
      "built automated pipelines to transform + stream 3k+ daily JSON entries using real-time infrastructure",
    stack: ["C#", "PostgreSQL", "Apache Kafka", "REST APIs"],
    impact:
      "reduced manual effort by 13% and improved data availability for downstream analytics",
    learned:
      "hands-on data streaming, schema design, and real-time ingestion best practices",
    liked: "lots of backend ownership and automation-focused dev work",
  },
  {
    title: "J.B. Hunt - Software Developer",
    role: "Mobile Software Dev Intern",
    location: "Lowell, AR",
    date: "May 2023 – Dec 2023",
    logo: jbhuntLogo,
    image: jbhuntImage,
    scope:
      "developed new cross-platform features and reusable mobile components for logistics app used by 5k+ daily drivers",
    stack: ["React Native", "JavaScript", "TypeScript", "Node.js", "Express"],
    impact:
      "cut mobile app launch time by 0.4s and sped up feature delivery for downstream teams",
    learned: "how to structure large-scale mobile codebases for performance",
    liked: "shipped real features fast + learned from experienced mobile devs",
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-primary text-text"
    >
      <AnimatedSection>
        <h2 className="text-4xl font-semibold mb-12 text-highlight text-center">
          experience
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* left-side tabs */}
          <div className="flex md:flex-col gap-4 md:w-1/3">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md border text-sm transition-all w-full
                  ${
                    selectedIndex === i
                      ? "bg-surface border-accent text-accent font-medium shadow"
                      : "border-gray-300 hover:bg-surface/50"
                  }
                `}
              >
                <img
                  src={exp.logo}
                  alt={exp.title}
                  className="w-6 h-6 object-contain rounded"
                />
                <span>{exp.title}</span>
              </button>
            ))}
          </div>

          {/* right-side detail panel */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-surface p-6 rounded-xl border border-accent shadow-sm space-y-6"
              >
                {/* banner image */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-lg w-full h-48 object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {selected.role}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {selected.title} — {selected.location}
                  </p>
                  <p className="text-sm text-gray-500">{selected.date}</p>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-text">Project Scope</h4>
                    <p>{selected.scope}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Tech Stack</h4>
                    <p>{selected.stack.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Impact</h4>
                    <p>{selected.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">What I Learned</h4>
                    <p>{selected.learned}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">What I Liked</h4>
                    <p>{selected.liked}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
