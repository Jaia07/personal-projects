import coloredLogo from "../assets/images/logo-colored.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="max-w-[1200px] w-full my-7 mx-auto py-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-3 mx-2">
        <ul className="flex justify-between items-center gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <img src={coloredLogo} alt="Colored Logo" />
        <p>Love Nature by Tyler Moore</p>
      </div>
    </section>
  );
};

export default Footer;
