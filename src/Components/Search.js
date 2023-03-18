import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { searchMovies } from "../APIs/moviesAPI";
import { searchMoviesAPI } from "../APIs/moviesAPI";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);

  const updateSearch = () => {
    setSearch(searchInputRef.current.value);
  };

  useEffect(() => {
    if (search === "") return;
    searchMoviesAPI(search);
  }, [search]);

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
