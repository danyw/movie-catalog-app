import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { searchMoviesAPI } from "../APIs/moviesAPI";
import "../Styles/search.css";

const Search = ({ updateMovies }) => {
  
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);

  const updateSearch = () => {
    setSearch(searchInputRef.current.value);
  };

  useEffect(() => {
    if (search === "") return;
    searchMoviesAPI(search).then((data) => {
      updateMovies(data.results);
    });
  }, [search, updateMovies]);
  //TODO: is there a beter way to do this? Had to use a callback function to pass the data to the parent component. Otherwise, an infinite loop was created.
  return (
    <div class="wrap">
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Type a movie title or actor's name" ref={searchInputRef} />
        <button type="click" class="searchButton" onClick={updateSearch}>
          {/* <i class="fa fa-search"></i> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
