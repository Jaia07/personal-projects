import aboutImage from "../assets/images/about.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <section className="mt-4 mb-6">
        <div className="max-w-[430px] md:max-w-[1200px] md:flex md:justify-between md:items-center md:gap-24 mx-auto">
          <div className="px-4 md:pr-20">
            <h1 className="font-bold my-3">ABOUT US</h1>
            <article>
              <h2 className="font-bold font-Forum text-2xl md:text-3xl mb-3">
                We Help You Connect With Your Audience
              </h2>
              <p className="text-lg mb-3 font-Forum">
                When visitors land on your website, you have only a few seconds
                to capture their attention. We make sure those seconds count.
              </p>
            </article>
            <article>
              <h2 className="font-bold font-Forum text-2xl md:text-3xl mb-1">
                Why Choose Us?
              </h2>
              <p className="text-lg mb-3 font-Forum">
                Because people buy from people they trust.
              </p>
              <p className="text-lg mb-3 font-Forum">
                We focus on human-centered design, clarity in communication, and
                impactful visuals. Whether you're launching a new blog, building
                a newsletter list, or promoting a service or product, we help
                you make a memorable first impression.
              </p>
            </article>
            <article>
              <h2 className="font-bold font-Forum text-2xl md:text-3xl mb-3">
                What We Do
              </h2>
              <ol className="list-disc ml-9">
                <li className="text-lg mb-1 font-Forum">
                  Craft compelling brand messaging
                </li>
                <li className="text-lg mb-1 font-Forum">
                  Design engaging, modern websites
                </li>
                <li className="text-lg mb-4 font-Forum">
                  Build experiences that convert visitors into loyal customers
                </li>
              </ol>
            </article>
            <Link
              to="/services"
              className="block rounded-md bg-[#ffd936] py-3 px-5 font-Forum font-bold max-w-[30vw] text-center shadow-md"
            >
              View Our Services
            </Link>
          </div>
          <div className="my-6 mx-2 w-full">
            <img
              src={aboutImage}
              alt="Person holding a leaf"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
