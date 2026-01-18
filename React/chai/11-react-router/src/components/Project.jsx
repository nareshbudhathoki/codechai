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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
