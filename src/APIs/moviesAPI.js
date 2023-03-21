import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER;
const API_key = process.env.REACT_APP_API_KEY;

export const searchMoviesAPI = async (search) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_key}&query=${search}`
    );
    //TODO: replace multi with movie title or actor name
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getCreditsByIdAPI = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_key}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addToFav = () => {};

export const getFav = async () => {
  try {
    const response = await axios.get(`${SERVER}/movielist`);
    return response.data;
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const deleteFromFav = async (id) => {
  try {
    const response = await axios.get(`${SERVER}/movielist/delete/${id}`, {
      method: "DELETE",
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
