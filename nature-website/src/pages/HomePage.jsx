import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Services />
      <Testimonial />
      <About />
      <Questions />
      <Footer />
    </>
  );
};

export default HomePage;
