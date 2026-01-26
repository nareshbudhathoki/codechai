import React from "react";

const ProjectCard = ({ title, description, image, liveLink, codeLink }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-6 hover:border-yellow-400 transition duration-300 group">
      
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
      />

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-300 transition"
        >
          Live
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
