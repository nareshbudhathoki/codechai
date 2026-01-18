import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building responsive and modern web applications using React and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    description: "Creating mobile-friendly UI that works seamlessly on all devices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces with attention to details.",
  },
];

export default function Service() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
