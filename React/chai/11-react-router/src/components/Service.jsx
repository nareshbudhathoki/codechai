import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using modern tools like React and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly Design",
    description:
      "Creating mobile-first interfaces that work seamlessly across all screen sizes and devices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description:
      "Designing clean, intuitive, and user-focused interfaces with attention to detail.",
  },
];

export default function Service() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I offer end-to-end development services focused on performance,
            usability, and modern design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
