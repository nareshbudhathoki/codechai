import React from "react";
import ProjectCard from "./ProjectCard";

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400x300",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "E-commerce App",
    description: "A simple e-commerce app with cart functionality.",
    image: "https://via.placeholder.com/400x300",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Todo App",
    description: "A React Todo app with local storage.",
    image: "https://via.placeholder.com/400x300",
    liveLink: "#",
    codeLink: "#",
  },
];

export default function Project() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of projects I’ve built using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
