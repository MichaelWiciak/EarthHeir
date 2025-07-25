"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import FocusLock from "react-focus-lock";

const Navbar: React.FC = () => {
  const [randomLogo, setRandomLogo] = useState<string>("");

  const logos = React.useMemo(
    () => [
      "/LogosToAlternate/Logo_PACK-01.png",
      "/LogosToAlternate/Logo_PACK-02.png",
      "/LogosToAlternate/Logo_PACK-03.png",
      "/LogosToAlternate/Logo_PACK-04.png",
      "/LogosToAlternate/Logo_PACK-05.png",
      "/LogosToAlternate/Logo_PACK-06.png",
      "/LogosToAlternate/Logo_PACK-07.png",
      "/LogosToAlternate/Logo_PACK-08.png",
      "/LogosToAlternate/Logo_PACK-09.png",
    ],
    []
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * logos.length);
    setRandomLogo(logos[randomIndex]);
  }, [logos]);

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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="container-custom mx-auto px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:opacity-80 transition-opacity cursor-pointer p-0 bg-transparent border-none "
          aria-label="Scroll to home section"
          style={{ lineHeight: 0 }}
        >
          {randomLogo && (
            <Image
              src={randomLogo}
              alt="Sustain;ed Logo"
              width={120}
              height={120}
              style={{ display: "block" }}
            />
          )}
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
          className="md:hidden text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Links with Focus Lock */}
        {menuOpen && (
          <FocusLock returnFocus>
            <nav
              id="mobile-menu"
              className="md:hidden bg-white px-4 pb-4 space-y-3"
              role="navigation"
              aria-label="Mobile menu"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                  aria-label={`Scroll to ${link.name} section`}
                  onClick={() => {
                    scrollToSection(link.href.slice(1));
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </FocusLock>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
