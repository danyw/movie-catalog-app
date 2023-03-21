import Search from "../Components/Search";
import CardContainer from "../Components/CardContainer";
import { useCallback, useState } from "react";
import "../Styles/home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSetMovies = useCallback((newMovies) => {
    setMovies(newMovies);
  }, []);

  return (
    <div className="homeContainer">
      <Search updateMovies={handleSetMovies} />
      <CardContainer movies={movies} />
    </div>
  );
};

export default Home;
