import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing Heroicons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <header className="bg-zinc-700 text-cyan-100 shadow-lg py-5 px-6 md:px-12 rounded-b-xl relative z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-4xl font-extrabold text-teal-300 mb-4 sm:mb-0">
            PracMate
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex sm:space-x-8 md:space-x-12 text-lg font-medium">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="relative sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-teal-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-teal-300" />
              )}
            </button>
            {/* Mobile Navigation Links */}
            <nav
              className={`fixed inset-0 flex flex-col items-center justify-center bg-zinc-700 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              {isMenuOpen && (
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <XMarkIcon className="h-6 w-6 text-teal-300" />
                </button>
              )}
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-4 text-lg hover:text-teal-300 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
