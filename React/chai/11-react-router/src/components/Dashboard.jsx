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
    <section id="dashboard" className="bg-gray-100 dark:bg-gray-900 py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transform transition"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-bold text-2xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
