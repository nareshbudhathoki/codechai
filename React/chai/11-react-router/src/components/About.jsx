import React from "react";
import { FaLaptopCode, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          I'm a passionate IT engineer with experience in building modern web applications, solving complex problems, and continuously learning new technologies. I love creating clean, efficient, and scalable solutions for real-world challenges.
        </p>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold mb-1">5+ Years Coding</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Experience with multiple programming languages and frameworks.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <FaProjectDiagram className="text-4xl text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold mb-1">20+ Projects</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Successfully delivered diverse web and mobile applications.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <FaUsers className="text-4xl text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-semibold mb-1">Collaborations</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Worked with cross-functional teams in agile environments.
            </p>
          </div>
        </div>

        {/* Personal paragraph / mission */}
        <div className="mt-16 max-w-3xl mx-auto text-left">
          <h3 className="text-3xl font-bold mb-4">My Mission</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I aim to build software that not only solves problems but also delights users.  
            My expertise lies in **React, Node.js, Tailwind CSS, Next.js**, and modern cloud technologies.  
            I enjoy learning new frameworks, contributing to open-source projects, and continuously improving my skills.
          </p>
        </div>
      </div>
      <Outlet/>
    </section>
  );
}
