import React from "react";

const SkillBar = ({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    { name: "Python", percentage: 90 },
    { name: "JavaScript/TypeScript", percentage: 85 },
    { name: "Java", percentage: 80 },
    { name: "C/C++", percentage: 75 },
    { name: "SQL", percentage: 90 },
    {name:"C#", percentage: 60},
  ];

  const toolsAndFrameworks = [
    "Git",
    "VS Code",
    "Postman",
    "Looker Studio",
    "PyTorch",
    "TensorFlow",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL"
  ];

  const certifications = [
    {
      name: "IBM Data Science",
      provider: "IBM",
      platform: "Coursera",
      date: "Dec 2023",
      link: "https://drive.google.com/file/d/1z0swqMhpq11fVJVfYum0DuafSOJuUdP9/view?usp=sharing",
    },
    {
      name: "Machine Learning",
      provider: "Stanford University",
      platform: "Coursera",
      date: "Jan 2024",
      link: "https://drive.google.com/file/d/1Y361HFxyFCX9Me1_pszTN0IyvWCZy9Wt/view?usp=sharing",
    },
    {
      name: "IBM Data Analyst",
      provider: "IBM",
      platform: "Coursera",
      date: "March 2024",
      link: "https://drive.google.com/file/d/1VTnobXQbheAzDeRHn463hzln6lkdUWwF/view?usp=sharing",
    },
    {
      name: "Deep Learning",
      provider: "DeepMind",
      platform: "Coursera",
      date: "July 2024",
      link: "https://drive.google.com/file/d/1MG4byPaxQsDGyRU4k9eawjRHpZjtMY5a/view?usp=sharing",
    },
    {
      name: "MLOps",
      provider: "DeepMind",
      platform: "Coursera",
      date: "August 2024",
      link: "https://drive.google.com/file/d/1-Zqwz5c3rhuKZX6KdCq7BTBT2ISOPDki/view?usp=sharing",
    },
    {
      name: "Machine Learning",
      provider: "Alpha Analyst",
      platform: "Online",
      date: "November 2024",
      link: "https://drive.google.com/file/d/1-kMhRdRplonvsYJxR9vTx8ZkrtTsmszI/view?usp=sharing",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Skills & Expertise
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {toolsAndFrameworks.map((tool) => (
                <div
                  key={tool}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-gray-700">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 align-center text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 ">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert) => (
              <a
                href={cert.link}
                key={cert.name}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-gray-600">
                    {cert.provider} | {cert.platform}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                  <div className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center mt-2">
                    View Certificate
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
