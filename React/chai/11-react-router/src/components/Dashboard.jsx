import React from "react";
import { FaProjectDiagram, FaUsers, FaCode, FaServer } from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    { icon: <FaProjectDiagram />, title: "Projects Completed", value: 12 },
    { icon: <FaUsers />, title: "Clients", value: 8 },
    { icon: <FaCode />, title: "Lines of Code", value: "50k+" },
    { icon: <FaServer />, title: "Servers Deployed", value: 4 },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transform transition duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{stat.title}</h3>
              <p className="text-gray-400 font-bold text-2xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
