"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Identity", href: "#whoweare" },
    { name: "Our Impact", href: "#impact" },
    { name: "Actions", href: "#whatwedo" },
    { name: "Stamp Rally", href: "#stampRally" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold cursor-pointer">
          Sustain;ed
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
