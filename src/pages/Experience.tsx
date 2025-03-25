import AnimatedSection from "../components/AnimatedSection";

const experiences = [
  {
    role: "ML/AI Research Assistant",
    company: "Bocconi University",
    location: "Milan, Italy",
    date: "Jan 2025 – May 2025",
    bullets: [
      "researched impact of income inequality on economic growth using ml models like random forests and gradient boosting",
      "cleaned + normalized socioeconomic datasets using pandas + numpy",
      "collab’d on a paper with an interdisciplinary team exploring ethical ai use cases",
    ],
  },
  {
    role: "Full Stack Software Engineering Intern",
    company: "CoStar Group",
    location: "Richmond, VA",
    date: "Jun 2024 – Aug 2024",
    bullets: [
      "built modular micro frontends using react, typescript, express, docker",
      "developed backend apis and services using c#, .net core, and sql server",
      "designed an etl pipeline to process 1M+ property listings",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Citizens Financial Group",
    location: "Remote",
    date: "Jan 2024 – May 2024",
    bullets: [
      "built end-to-end data pipeline to automate ingestion + validation of 3k+ daily json entries",
      "integrated apache kafka for real-time streaming and improved data availability",
      "optimized postgres schema for 25% faster analytical queries",
    ],
  },
  {
    role: "Mobile Software Developer Intern",
    company: "J.B. Hunt",
    location: "Lowell, AR",
    date: "May 2023 – Dec 2023",
    bullets: [
      "shipped reusable components for logistics app used by 5k+ drivers",
      "developed cross-platform features w/ react native, typescript, javascript",
      "reduced app launch time by 0.4s by optimizing backend services",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-20">
      <AnimatedSection>
        <h2 className="text-4xl font-semibold text-center mb-12">experience</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;
