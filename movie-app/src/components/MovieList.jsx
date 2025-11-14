import FilteredMovieList from "./FilteredMovieList";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import _ from "lodash";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const api_key = `https://api.themoviedb.org/3/movie/${type}?api_key=82aa7d0e7a88d000b080f8a9c4ca0c10`;

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

  //Because we need this to automatically run after sort state changes
  useEffect(() => {
    //We use the "_" from lodash,then array we want to sort, then array with properties we want to sort by inside
    const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
    setFilterMovies(sortedMovies);
  }, [sort]);

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

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="w-full px-4 py-3 mb-6" id={type}>
        <header className="flex items-center justify-between max-w-7xl mx-auto mb-4">
          <h2 className="flex items-center text-2xl text-[#ffe400] font-semibold">
            {title}{" "}
            <img
              className="size-6 ml-1"
              src={`${emoji}`}
              alt={`${emoji} Emoji`}
            />
          </h2>

          <div className="flex items-center justify-between">
            <FilteredMovieList
              minRating={minRating}
              onRatingClick={handleFilter}
              ratings={[8, 7, 6, 5]}
            />

            <select
              name="by"
              id=""
              onChange={handleSort}
              value={sort.by}
              className="block w-full py-2 px-3 font-semibold border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white cursor-pointer"
            >
              <option value="default">SortBy</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>
            <select
              name="order"
              id=""
              onChange={handleSort}
              value={sort.order}
              className="block w-full py-2 px-3 font-semibold border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white cursor-pointer"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
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
