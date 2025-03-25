import { useState, useEffect, JSX } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaAws,
  FaPython,
  FaJava,
  FaCloud,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiDotnet,
  SiTailwindcss,
  SiKubernetes,
  SiJavascript,
  SiMysql,
  SiAngular,
  SiSpring,
  SiVuedotjs,
  SiExpress,
  SiGooglecloud,
  SiApachekafka,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

type Skill = {
  name: string;
  icon: JSX.Element;
  experience: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const skillData: Category[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "C#/.NET", icon: <SiDotnet />, experience: "3 years" },
      { name: "SQL", icon: <SiMysql />, experience: "4 years" },
      { name: "Python", icon: <FaPython />, experience: "2 years" },
      { name: "Java", icon: <FaJava />, experience: "6 years" },
      { name: "Angular.js", icon: <SiAngular />, experience: "3 years" },
      { name: "React", icon: <FaReact />, experience: "4 years" },
      { name: "Node.js", icon: <FaNodeJs />, experience: "3 years" },
      { name: "JavaScript", icon: <SiJavascript />, experience: "5 years" },
      { name: "TypeScript", icon: <SiTypescript />, experience: "2 years" },
      { name: "Spring", icon: <SiSpring />, experience: "3 years" },
      { name: "Vue.js", icon: <SiVuedotjs />, experience: "2 years" },
      { name: "RESTful API", icon: <FaCloud />, experience: "2 years" },
      { name: "Express", icon: <SiExpress />, experience: "1.5 years" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, experience: "3 years" },
      { name: "Docker", icon: <FaDocker />, experience: "2 years" },
      { name: "Git", icon: <FaGit />, experience: "5 years" },
      { name: "Kubernetes", icon: <SiKubernetes />, experience: "2 years" },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud />,
        experience: "1.5 years",
      },
      {
        name: "Apache Kafka",
        icon: <SiApachekafka />,
        experience: "1.5 years",
      },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, experience: "3 years" },
      { name: "MongoDB", icon: <SiMongodb />, experience: "2.5 years" },
      { name: "Pandas", icon: <SiPandas />, experience: "1.5 years" },
      { name: "NumPy", icon: <SiNumpy />, experience: "1.5 years" },
    ],
  },
  {
    title: "Design & UI",
    skills: [
      { name: "Figma", icon: <SiFigma />, experience: "3 year" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, experience: "5 years" },
    ],
  },
];

const Skills = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    Array(skillData.length).fill(0)
  );

  // manual scroll
  const handleScroll = (dir: "up" | "down", colIndex: number) => {
    setActiveIndexes((prev) => {
      const next = [...prev];
      const total = skillData[colIndex].skills.length;
      next[colIndex] =
        dir === "up"
          ? (next[colIndex] - 1 + total) % total
          : (next[colIndex] + 1) % total;
      return next;
    });
  };

  // auto scroll each column every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) => {
        return prev.map((current, i) => {
          const total = skillData[i].skills.length;
          return (current + 1) % total;
        });
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {skillData.map((category, colIndex) => {
          const active = activeIndexes[colIndex];
          const prev =
            (active - 1 + category.skills.length) % category.skills.length;
          const next = (active + 1) % category.skills.length;

          return (
            <div key={colIndex} className="flex flex-col items-center w-full">
              <h3 className="text-lg font-semibold text-text mb-4 text-center">
                {category.title}
              </h3>

              <button
                onClick={() => handleScroll("up", colIndex)}
                className="mb-2 hover:text-accent"
              >
                <MdKeyboardArrowUp size={24} />
              </button>

              <div className="flex flex-col items-center relative h-48 w-full">
                {[prev, active, next].map((index, i) => {
                  const skill = category.skills[index];
                  const isActive = index === active;
                  return (
                    <div
                      key={skill.name}
                      className={`absolute w-full flex flex-col items-center text-center transition-all duration-300 ${
                        i === 0
                          ? "top-0 opacity-40 scale-90"
                          : i === 1
                          ? "top-1/2 -translate-y-1/2 opacity-100 scale-100 z-10"
                          : "bottom-0 opacity-40 scale-90"
                      }`}
                    >
                      <div className="bg-surface border border-accent rounded-xl px-6 py-4 w-40 shadow-sm">
                        <div className="text-2xl text-accent mb-2">
                          {skill.icon}
                        </div>
                        <h4 className="text-text font-semibold text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Experience: {skill.experience}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => handleScroll("down", colIndex)}
                className="mt-2 hover:text-accent"
              >
                <MdKeyboardArrowDown size={24} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
