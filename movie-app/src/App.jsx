import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Fire from "./assets/images/fire.png";
import Star from "./assets/images/glowing-star.png";
import Party from "./assets/images/partying-face.png";

const App = () => {
  return (
    <>
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </>
  );
};

export default App;
