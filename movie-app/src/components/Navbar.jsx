import Fire_emoji from "../assets/images/fire.png";
import Glowing_star_emoji from "../assets/images/glowing-star.png";
import Party_emoji from "../assets/images/partying-face.png";

const Navbar = () => {
  return (
    <>
      <nav className="border-b-2 border-b-[#818181] px-4 py-3 w-full">
        <section className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-[#ffe400] text-[30px] font-semibold">
            MovieManiac
          </h1>
          <ul className="flex items-center justify-between gap-5">
            <li>
              <a href="#" className="flex items-center text-[20px] font-medium">
                Popular{" "}
                <img
                  className="size-6 ml-1"
                  src={Fire_emoji}
                  alt="Fire emoji"
                />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-[20px] font-medium">
                Top Rated{" "}
                <img
                  className="size-6 ml-1"
                  src={Glowing_star_emoji}
                  alt="Glowing star emoji"
                />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-[20px] font-medium">
                Upcoming{" "}
                <img
                  className="size-6 ml-1"
                  src={Party_emoji}
                  alt="Party emoji"
                />
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
