import { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  // Prevent screen from scrolling when nav menu is
  useEffect(() => {
    if (navMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navMenu]);

  return (
    <nav className="absolute top-0 left-0 z-10 w-full">
      <section className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block px-8 py-2 rounded-full bg-white">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={handleNavMenu}
        />
      </section>
      {/* ---------- mobile-menu ----------  */}
      <div
        className={`md:hidden ${
          navMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            alt="Close-menu icon"
            className="w-6 cursor-pointer"
            onClick={handleNavMenu}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={handleNavMenu} href="#Header" className="cursor-pointer ">
            Home
          </a>
          <a onClick={handleNavMenu} href="#About" className="cursor-pointer">
            About
          </a>
          <a
            onClick={handleNavMenu}
            href="#Projects"
            className="cursor-pointer"
          >
            Projects
          </a>
          <a
            onClick={handleNavMenu}
            href="#Testimonials"
            className="cursor-pointer"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
