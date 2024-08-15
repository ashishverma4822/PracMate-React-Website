import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing Heroicons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-zinc-700 text-cyan-100 shadow-lg py-5 px-6 md:px-12 rounded-b-xl">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-3xl font-extrabold text-[#ADD8E6] mb-4 sm:mb-0">PracMate</div>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="block sm:hidden p-2 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-20 text-[#ADD8E6]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#ADD8E6]" />
            )}
          </button>
          <nav
            className={`absolute top-full left-0 w-full bg-zinc-700 mt-2 rounded-lg shadow-lg sm:static sm:flex sm:space-x-6 md:space-x-10 text-lg ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 hover:text-[#ADD8E6] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 hover:text-[#ADD8E6] transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="block py-2 px-4 hover:text-[#ADD8E6] transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 hover:text-[#ADD8E6] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
