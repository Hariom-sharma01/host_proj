import React, { useState } from "react";
import logo from "../assets/imgs/transparent-background,-shadow-designify.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServiceNavigation = () => {
    if (location.pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleHomeNav = () => {
    navigate("/");
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <header className="bg-gray-200 shadow-md py-2 px-4 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <a onClick={handleHomeNav}>
        <img
          src={logo}
          alt="Logo"
          className="h-14 object-contain cursor-pointer"
        />
      </a>

      {/* Hamburger Menu */}
      <button
        className="text-gray-800 lg:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-6 lg:items-center text-gray-800 font-bold text-lg`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
          <li>
            <a
              onClick={handleHomeNav}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={handleServiceNavigation}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/Technologies")}
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#Benefits"
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="/About"
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-blue-600 cursor-pointer text-gray-900 tracking-widest relative inline-block hover:before:w-full before:absolute before:bottom-0 before:left-1/2 before:bg-blue-600 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:left-0"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
