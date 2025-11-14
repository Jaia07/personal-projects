import { useState } from "react";
import headerLogo from "../assets/images/logo.png";
import coloredLogo from "../assets/images/logo-colored.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const linkClass = ({ isActive }) => {
    isActive
      ? "p-4 border-b-2 border-[#ffd936] text-[#ffd936] font-semibold"
      : "p-4";
  };
  return (
    <nav>
      <div className="flex justify-between items-center max-w-[1200px] w-full mx-auto p-4 text-[#efefef]">
        <img src={headerLogo} alt="Logo" />
        <ul className="hidden md:flex justify-center items-center font-semibold">
          <li className="p-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li className="p-4">
            <button className="border-4 rounded-md p-4">202-505-3333</button>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 bg-slate-700 w-[60%] h-full border-r border-r-gray-400 text-[#efefef] pt-4 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={coloredLogo} alt="Logo" className="p-4" />
        <ul className="p-3 uppercase">
          <li className="p-4 border-b border-b-gray-600">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li className="p-4">
            <button className="border-4 rounded-md p-4">202-505-3333</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
