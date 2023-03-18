import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = () => {
    return ( 
        <div class="wrap">
        <div class="search">
           <input type="text" class="searchTerm" placeholder="Type a movie title or actor's name"/>
           <button type="submit" class="searchButton">
             {/* <i class="fa fa-search"></i> */}
             {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
             Search
            
          </button>
        </div>
     </div>
     );
};
 
export default Search;