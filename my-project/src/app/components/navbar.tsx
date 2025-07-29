"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import FocusLock from "react-focus-lock";

const Navbar: React.FC<{ logoSrc: string }> = ({ logoSrc }) => {
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
        {/* I want to put the image in some kind of container so that even if hte width/height of the image is high, it always occupies the smae amount of the navbar */}

        <button
          onClick={() => scrollToSection("home")}
          className="hover:opacity-80 transition-opacity cursor-pointer p-0 bg-transparent border-none "
          aria-label="Scroll to home section"
          style={{ lineHeight: 0 }}
        >
          <div className="relative w-24 h-10">
            {" "}
            {/* Adjust size as needed */}
            <Image
              src={logoSrc}
              alt="Sustain;ed Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
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

        <div className="md:hidden">
          {/* Mobile Menu Button (visible when closed) */}
          {!menuOpen && (
            <button
              className="fixed top-4 right-4 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}

          {menuOpen && (
            <FocusLock returnFocus>
              {/* Backdrop */}
              <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                  menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Slide-in menu */}
              <div
                className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Top bar with logo and close */}
                <div className="flex justify-between items-center px-1 py-3 border-b">
                  <button
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <div className="relative w-24 h-10">
                      {" "}
                      {/* Adjust size as needed */}
                      <Image
                        src={logoSrc}
                        alt="Sustain;ed Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  </button>

                  <button
                    className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="px-6 py-6 space-y-4">
                  {links.map((link, index) => (
                    <div key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => {
                          scrollToSection(link.href.slice(1));
                          setMenuOpen(false);
                        }}
                        className="block text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md px-3 py-3 transition-colors"
                      >
                        {link.name}
                      </a>
                      {index !== links.length - 1 && (
                        <hr className="border-dotted border-t border-gray-300 opacity-50" />
                      )}
                    </div>
                  ))}
                </nav>

                <div className="h-20" />
              </div>
            </FocusLock>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
