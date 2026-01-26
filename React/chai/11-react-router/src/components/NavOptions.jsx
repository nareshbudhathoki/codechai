import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavOptions() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md transition ${
      isActive
        ? "text-yellow-400 font-semibold"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <nav className="bg-gray-900 sticky top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://w7.pngwing.com/pngs/441/126/png-transparent-kablo-tv-kablonet-high-definition-television-turksat-channel-flaticon-angle-text-logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-white font-bold text-lg">Jenith</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-gray-800 rounded-lg mb-4 p-4 space-y-2">
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/"
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/about"
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/login"
                className="block text-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavOptions;
