import Star from "../assets/images/star.png";

const MovieCard = () => {
  return (
    <a
      href="#"
      className="relative w-48 h-[300px] m-4 overflow-hidden rounded-xl text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
    >
      <img
        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
        alt="movie poster"
        className="w-[100%] h-[100%]"
      />

      <article className="flex flex-col justify-end absolute top-0 p-2.5 w-[100%] h-[100%] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))] transform transition-all duration-300 ease-in-out opacity-0 hover:opacity-[1]">
        <h3 className="text-sm text-[#ffe400]">Movie Name</h3>
        <div className="flex items-center justify-between text-sm font-medium my-1.5 text-[#ffe400]">
          <p>10-20-2020</p>
          <p className="flex items-center">
            8.0
            <img src={Star} alt="rating icon" className="w-5 h-5 ml-1.5" />
          </p>
        </div>
        <p className="text-sm italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          fugiat eaque dicta, at perspiciatis pariatur!
        </p>
      </article>
    </a>
  );
};

export default MovieCard;
