"use client";

import { SlLayers } from "react-icons/sl";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiEslint,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

const techStack = {
  frontend: [
    {
      tech: "HTML",
      icon: <FaHtml5 />,
    },
    {
      tech: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      tech: "SASS",
      icon: <FaSass />,
    },
    {
      tech: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      tech: "ESLint",
      icon: <SiEslint />,
    },
    {
      tech: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      tech: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      tech: "React",
      icon: <FaReact />,
    },
    {
      tech: "Nextjs",
      icon: <RiNextjsFill />,
    },
  ],
  backend: [
    {
      tech: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      tech: "MySql",
      icon: <GrMysql />,
    },
    {
      tech: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      tech: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      tech: "Prisma",
      icon: <SiPrisma />,
    },
  ],
  tools: [
    {
      tech: "Git",
      icon: <FaGitAlt />,
    },
    {
      tech: "GitHub",
      icon: <SiGithub />,
    },
    {
      tech: "Docker",
      icon: <FaDocker />,
    },
    {
      tech: "VS Code",
      icon: <VscVscode />,
    },
    {
      tech: "Figma",
      icon: <FaFigma />,
    },
    {
      tech: "Postman",
      icon: <SiPostman />,
    },
  ],
};

const TechStack = () => {
  return (
    <>
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <SlLayers className="text-gray-500 text-base" />
        Tech Stack
      </h3>
      <div className="space-y-8 mt-6">
        {Object.entries(techStack).map(([category, stack]) => (
          <div key={category}>
            <h2 className="font-semibold capitalize mb-4">{category}</h2>
            <div className="flex flex-wrap gap-4">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-20"
                >
                  <div className="text-3xl text-gray-800 dark:text-gray-300">
                    {item.icon}
                  </div>
                  <span className="text-xs text-center">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
