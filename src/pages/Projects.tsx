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
    stack: ["Java", "AssemblyAI", "Processing", "PeasyCam"],
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
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-50">
      <AnimatedSection>
        <h2 className="text-4xl font-semibold text-center mb-12">projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-red-400"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 rounded-md">
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
