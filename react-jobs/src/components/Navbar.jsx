import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) => {
    return isActive
      ? "bg-black text-white p-2 hover:bg-black rounded-md"
      : "p-2 hover:bg-black rounded-md text-white";
  };

  return (
    <>
      <nav className="bg-indigo-700 border-b-2 border-indigo-500">
        <div className="flex items-center justify-center md:justify-between max-w-5xl w-full mx-auto px-2 sm:px-6 lg:px-8">
          <section className="flex flex-shrink-0 items-center gap-1">
            <img src={logo} alt="React Logo" className="h-10 w-auto" />
            <span className="hidden sm:block text-white font-bold text-xl">
              React Jobs
            </span>
          </section>
          <section className="flex items-center justify-between p-2">
            <ul className="flex gap-2 md:gap-4 text-white">
              <li className="p-2 hover:bg-black rounded-md">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li className="p-2 hover:bg-black rounded-md">
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
              </li>
              <li className="p-2 hover:bg-black rounded-md">
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
