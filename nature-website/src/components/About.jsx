import aboutImage from "../assets/images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-4 mb-6">
      <div className="max-w-[430px] md:max-w-[1200px] md:flex md:justify-between md:items-center md:gap-24 mx-auto">
        <div className="px-4 md:pr-20">
          <h4 className="font-bold my-3">ABOUT US</h4>
          <h1 className="font-bold font-Forum text-2xl md:text-3xl mb-3">
            Tell website visitors who you are and why they should choose your
            business.
          </h1>
          <p className="text-lg mb-3 font-Forum">
            Because when a visitor first lands on your website, you're a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your newsletter, or buy what
            you're selling.
          </p>
          <Link
            to="/contact"
            className="border-0 outline-none rounded-md bg-[#ffd936] py-3 px-5 font-Forum font-bold mb-5"
          >
            Let's Talk Now
          </Link>
        </div>
        <div className="my-4 mx-2 w-full">
          <img
            src={aboutImage}
            alt="Person holding a leaf"
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
