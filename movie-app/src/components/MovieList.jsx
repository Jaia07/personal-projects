import Fire_Emoji from "../assets/images/fire.png";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minRating, setMinRating] = useState(0);

  const api_key =
    "https://api.themoviedb.org/3/movie/popular?api_key=82aa7d0e7a88d000b080f8a9c4ca0c10";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let res = await fetch(api_key);
        let data = await res.json();
        setMovies(data.results);
        setFilterMovies(data.results);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const selected =
    "py-1 px-1 whitespace-nowrap cursor-pointer border-b-2 border-b-gray-500";

  return (
    <>
      <section className="w-full px-4 py-3 mb-2">
        <header className="flex items-center justify-between max-w-7xl mx-auto mb-4">
          <h2 className="flex items-center text-2xl text-[#ffe400] font-semibold">
            Popular{" "}
            <img className="size-6 ml-1" src={Fire_Emoji} alt="Fire Emoji" />
          </h2>

          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-center mr-2 gap-1">
              <li
                className={
                  minRating === 8
                    ? selected
                    : "py-1 px-1 whitespace-nowrap cursor-pointer"
                }
                onClick={() => handleFilter(8)}
              >
                8+ Star
              </li>
              <li
                className={
                  minRating === 7
                    ? selected
                    : "py-1 px-1 whitespace-nowrap cursor-pointer"
                }
                onClick={() => handleFilter(7)}
              >
                7+ Star
              </li>
              <li
                className={
                  minRating === 6
                    ? selected
                    : "py-1 px-1 whitespace-nowrap cursor-pointer"
                }
                onClick={() => handleFilter(6)}
              >
                6+ Star
              </li>
            </ul>

            <select
              name=""
              id=""
              className="block w-full py-2 px-3 font-semibold border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white cursor-pointer"
            >
              <option value="">SortBy</option>
              <option value="">Date</option>
              <option value="">Rating</option>
            </select>
            <select
              name=""
              id=""
              className="block w-full py-2 px-3 font-semibold border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white cursor-pointer"
            >
              <option value="">Ascending</option>
              <option value="">Descending</option>
            </select>
          </div>
        </header>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="flex flex-wrap justify-evenly">
            {filterMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MovieList;
