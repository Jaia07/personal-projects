import { Link } from "react-router-dom";
import questionsBackground from "../assets/images/main-2.png";

const Questions = () => {
  return (
    <section
      className="bg-center bg-cover min-h-[55vh] w-full flex justify-center items-center gap-4 mb-3 mt-10"
      style={{ backgroundImage: `url(${questionsBackground})` }}
    >
      <div className="max-w-[550px] w-full m-auto text-center">
        <h1 className="text-3xl font-bold uppercase my-3">Questions?</h1>
        <p className="px-10 mb-3">
          Whether you're curious about features, a free trial, or even press,
          we're here to answer any questions.
        </p>
        <Link
          to="/contact"
          className="border-0 outline-none bg-[#ffd936] rounded-md py-3 px-5 font-Forum font-bold"
        >
          Let's Talk Now
        </Link>
      </div>
    </section>
  );
};

export default Questions;
