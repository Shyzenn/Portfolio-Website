import { RiGraduationCapLine } from "react-icons/ri";

const educationTimeline = () => {
  return [
    {
      date: "2025 - Present",
      schoolYear: "4th Year BSIS - Data Science",
      description:
        "Focused on data analytics, machine learning fundamentals, and capstone research projects.",
    },
    {
      date: "2024 - 2025",
      schoolYear: "3rd Year BSIS - Data Science",
      description:
        "Studied data processing, visualization, and database-driven application development.",
    },
    {
      date: "2023 - 2024",
      schoolYear: "2nd Year BSIS",
      description:
        "Built a strong foundation in programming, databases, and systems analysis.",
    },
    {
      date: "2022 - 2023",
      schoolYear: "1st Year BSIS (Information System)",
      description:
        "Introduced to information systems concepts, basic programming, and IT fundamentals.",
    },
    {
      date: "2020 - 2021",
      schoolYear: "Grade 12 Computer System Servicing",
      description:
        "Hands-on experience with hardware troubleshooting, networking, and system maintenance.",
    },
    {
      date: "2018 - 2019",
      schoolYear: "Grade 11 Computer System Servicing (CSS)",
      description:
        "Learned computer assembly, basic networking, and technical support practices.",
    },
  ];
};

const Education = () => {
  const timeline = educationTimeline();

  return (
    <>
      <h3 className="text-xl flex items-center gap-2 font-semibold">
        <RiGraduationCapLine className="text-gray-500" /> Education
      </h3>
      <div className="flex flex-col gap-6 relative mt-6">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div key={index} className="relative flex gap-4 group">
              <div>
                <div
                  className={`w-3 h-3 rounded-full relative ${
                    index === 0
                      ? "bg-black dark:bg-white w-4 h-4"
                      : "border dark:border-gray-500 dark:group-hover:bg-white group-hover:bg-black"
                  }`}
                />

                {!isLast && (
                  <div
                    className={`h-full bg-gray-500 w-px absolute ${
                      index === 0 ? "left-1.75" : "left-1.5"
                    }`}
                  />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-xs border dark:border-white px-2 rounded-full py-1 font-mono [font-variant-numeric:slashed-zero] w-fit">
                  {item.date}
                </h6>
                <h3 className="text-sm font-semibold">{item.schoolYear}</h3>
                <h5 className="text-xs dark:text-gray-300">
                  {item.description}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
