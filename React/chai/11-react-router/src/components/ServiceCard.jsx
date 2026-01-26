import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400 transition duration-300 group">
      
      {/* Icon */}
      <div className="text-yellow-400 text-4xl mb-6 group-hover:scale-110 transition">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
