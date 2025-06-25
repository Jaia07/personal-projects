import headerBgImage from "../assets/images/main.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[75vh] w-full"
      style={{ backgroundImage: `url(${headerBgImage})` }}
    >
      <Navbar />

      <section className="text-[#efefef]">
        <div className="max-w-[800px] w-full mt-[17vh] md:mt-[9vh] mx-auto text-center flex flex-col justify-center items-center">
          <h2 className="font-semibold p-1 md:text-2xl text-lg">we all love</h2>
          <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold pb-1 tracking-wider">
            nature
          </h1>
          <p className="px-5 tracking-tight">Look deep into nature and you</p>
          <p className="px-5 pb-2 tracking-tight">
            will understand everything better.
          </p>
          <Link
            to="/contact"
            className="border-0 outline-none rounded-md bg-[#ffd936] py-3 px-5 text-[#536942] font-Forum font-bold"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;
