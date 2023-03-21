import { getFav } from "../APIs/moviesAPI";
import { useState, useEffect } from "react";
import FavCardContainer from "../Components/FavCardContainer";

const Favourites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFav().then((movielist) => {
      setMovies(movielist);
      console.log(movielist);
    });
  }, []);

  return (
    <div className="favouritesContainer">
      {" "}
      <FavCardContainer movies={movies} />
    </div>
  );
};

export default Favourites;
