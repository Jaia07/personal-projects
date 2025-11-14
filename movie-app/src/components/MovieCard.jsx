import Star from "../assets/images/star.png";

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="relative w-48 h-[300px] m-4 overflow-hidden rounded-xl text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`}
        alt="movie poster"
        className="w-[100%] h-[100%]"
      />

      <article className="flex flex-col justify-end absolute top-0 p-2.5 w-[100%] h-[100%] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))] transform transition-all duration-300 ease-in-out opacity-0 hover:opacity-[1]">
        <h3 className="text-sm text-[#ffe400]">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm font-medium my-1.5 text-[#ffe400]">
          <p>{movie.release_date}</p>
          <p className="flex items-center">
            {movie.vote_average}
            <img src={Star} alt="rating icon" className="w-5 h-5 ml-1.5" />
          </p>
        </div>
        <p className="text-sm italic">{movie.overview.slice(0, 100) + "..."}</p>
      </article>
    </a>
  );
};

export default MovieCard;
