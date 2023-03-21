import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER;
const API_key = process.env.REACT_APP_API_KEY;

export const searchMoviesAPI = async (search) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_key}&query=${search}`);
    //TODO: replace multi with movie title or actor name
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getCreditsByIdAPI = async (id) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_key}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addToFav = async (data) => {
  try {
    axios.post("http://localhost:5000/movielist/add", data);
  } catch (error) {
    console.error(error);
    return null;
  }
  //TODO replace on the backend checking if the movie name is already in the database to based on the id
};

export const getFav = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/favmovieslist/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteFromFav = () => {};
