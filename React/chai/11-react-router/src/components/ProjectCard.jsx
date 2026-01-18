import React from "react";

export default function ProjectCard({ title, description, image, liveLink, codeLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={liveLink}
            target="_blank"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
