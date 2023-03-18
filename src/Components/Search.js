import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { searchMovies } from '../APIs/moviesAPI';


const Search = () => {
   const [search, setSearch] = useState('');
   const searchInputRef = useRef(null);

  function searchMovies() {
     
      setSearch(searchInputRef.current.value);
      handleSearch(search);
   }

   
  const handleSearch = async () => {
   try {
     const results = await searchMovies(search);
     console.log(results);
   } catch (error) {
     console.error(error);
   }
 }

    return ( 
        <div class="wrap">
        <div class="search">
           <input type="text" class="searchTerm" placeholder="Type a movie title or actor's name" ref={searchInputRef}/>
           <button type="click" class="searchButton" onClick={searchMovies}>
             {/* <i class="fa fa-search"></i> */}
             {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
             Search
            
          </button>
        </div>
     </div>
     );
};
 
export default Search;