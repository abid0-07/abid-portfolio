import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tools,
  image,
  github,
  demo,
}: {
  title: string;
  description: string;
  tools: (string | undefined)[];
  image: string;
  github?: string;
  demo?: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fade-in">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <Github className="h-6 w-6 text-gray-900" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <ExternalLink className="h-6 w-6 text-gray-900" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Online Accessories Store",
      description:
        "An e-commerce platform streamlining client work distribution, task assignment, and secure payment processing with a user-friendly interface and efficient workflow management.",
      tools: ["Node.js", , "Express.js", "HTML", "CSS", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/abid0-07/online-shop",
      demo: "#",
    },
    {
      title: "Heart Disease Prediction",
      description:
        "Using machine learning model to predict heart disease and deploy it as a web application.",
      tools: ["HTML", "CSS", "JavaScript", "FastAPI", "Python"],
      image: "diseases.jpg",
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Winning Space with Data Science",
      description:
        "Collected data from websites and APIs to analyze and predict the safety landing of the spacecraft.",
      tools: ["Python", "Folium", "Ploty", "BeautifulSoup"],
      image: "spacecraft.jpg",
      github:
        "https://github.com/abid0-07/Applied-Data-Science-Capston-Project/tree/main/Week%205",
      demo: "#",
    },
    {
      title: "Trends of Programming Languages",
      description:
        "Analyzed data from the 2019 Stack Overflow survey and GitHub job postings, performing EDA to identify programming language trends and associated salary ranges.",
      tools: ["React", "TypeScript", "Node.js"],
      image: "dashboard.jpg",
      github: "https://github.com/abid0-07/IBM-data-analyst",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
