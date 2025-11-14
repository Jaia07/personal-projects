import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen w-full mb-4 overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] font-semibold pt-20 inline-block max-w-3xl">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border rounded py-2 px-8">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 rounded py-2 px-8">
            Contact us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
