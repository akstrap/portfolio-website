import AnimatedSection from "../components/AnimatedSection";

const projects = [
  {
    title: "Navigrade",
    link: "https://devpost.com/software/navigrade",
    description:
      "a web app that uses face + geolocation data to rate driver awareness. detects exhaustion + routes to the nearest rest stop.",
    stack: ["React.js", "Face.js", "Google Cloud API", "Geolocation API"],
  },
  {
    title: "Interactive Vocal Rubik's Cube",
    link: "https://devpost.com/software/interactive-rubik-s-cube",
    description:
      "voice-controlled rubik’s cube built with matrices and 3D camera manipulation. hands-free, just say the move.",
    stack: ["AssemblyAI", "Processing", "PeasyCam"],
  },
  {
    title: "SquatDown",
    link: "https://devpost.com/software/squatmap",
    description:
      "helps users locate foreclosed properties with low bid activity via interactive maps. designed to highlight potential housing opportunities in underutilized spaces.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Google Maps API",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-primary">
      <AnimatedSection>
        <h2 className="text-4xl font-semibold text-center mb-12 text-highlight">
          projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-accent hover:border-highlight"
            >
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary border border-gray-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
