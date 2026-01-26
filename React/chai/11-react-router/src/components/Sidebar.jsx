import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaProjectDiagram, FaUsers, FaCode, FaServer } from "react-icons/fa";

const links = [
  { name: "Overview", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Projects", path: "/dashboard/projects", icon: <FaProjectDiagram /> },
  { name: "Clients", path: "/dashboard/clients", icon: <FaUsers /> },
  { name: "Code Stats", path: "/dashboard/code", icon: <FaCode /> },
  { name: "Servers", path: "/dashboard/servers", icon: <FaServer /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen hidden md:flex flex-col p-6 sticky top-16">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Dashboard</h2>

      <nav className="flex flex-col gap-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-gray-800 ${
                isActive ? "bg-yellow-400 text-gray-900 font-semibold" : "text-white"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
