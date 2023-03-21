import { useEffect, useState } from "react";
import CardContainer from "../Components/CardContainer";
import "../Styles/home.css";
import { getFav } from "../APIs/moviesAPI";
import { useUser, useUserUpdate } from "../Context/UserProvider";


const Favourites = () => {
  const [favMovies, setFavMovies] = useState([]);
  const user = useUser();
useEffect(() => {
    
    const fetchFavMovies = async () => {
        const data = await getFav(user);
        setFavMovies(data);
    };
    fetchFavMovies();
}, [user]);



  return (
    <div className="homeContainer">
      <h2>Favourites</h2>
      <CardContainer movies={favMovies} />
    </div>
  );
};

export default Favourites;
