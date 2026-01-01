import { FiInfo } from "react-icons/fi";

const About = () => {
  return (
    <>
      <h1 className="text-xl font-semibold flex gap-2 items-center">
        <FiInfo className="text-[17px] text-gray-500" />
        About
      </h1>
      <div className="text-sm flex flex-col gap-y-6 mt-4 ">
        <p>
          I’m a full-stack developer working primarily with JavaScript and
          TypeScript, building modern web applications using frameworks like
          Next.js and React. I focus on writing efficient, maintainable code and
          optimizing applications through proper state management, database
          queries, and API design to ensure smooth performance and scalability.
        </p>

        <p>
          I approach development by clearly understanding the problem, breaking
          it down into manageable parts, and choosing solutions based on
          practical trade-offs rather than over-engineering. I value clean
          architecture, clear data flow, and writing code that remains
          understandable and easy to maintain as systems grow.
        </p>

        <p>
          Currently, I’m improving my skills in system design, performance
          optimization, and real-time features by building and refining
          full-stack project. I’m also exploring how AI-powered tools and
          workflows can be integrated into web applications to improve
          productivity, automation, and user experience.
        </p>
      </div>
    </>
  );
};

export default About;
