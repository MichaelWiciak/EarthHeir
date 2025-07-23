"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import titleLogo from "../../../public/Logo_PACK-01.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", " ");
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Identity", href: "#whoweare" },
    { name: "Our Impact", href: "#impact" },
    { name: "Actions", href: "#whatwedo" },
    { name: "Venues", href: "#venues" },
    { name: "Stamp Rally", href: "#stampRally" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:opacity-80 transition-opacity cursor-pointer p-0 bg-transparent border-none "
          aria-label="Scroll to home section"
          style={{ lineHeight: 0 }}
        >
          <Image
            src={titleLogo.src}
            alt="Sustain;ed Logo"
            className=""
            width={120}
            height={120}
            style={{ display: "block" }}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollToSection(link.href.slice(1));
                setMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors hover:cursor-pointer"
              aria-label={`Scroll to ${link.name} section`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          aria-label="Toggle navigation menu"
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
              aria-label={`Scroll to ${link.name} section`}
              onClick={() => {
                scrollToSection(link.href.slice(1));
                setMenuOpen(false);
              }}
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
