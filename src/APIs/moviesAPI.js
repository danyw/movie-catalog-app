import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;
const API_key = process.env.REACT_APP_API_KEY;

export const searchMoviesAPI = async (search) => { 
try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_key}&query=${search}`);
 console.log(response.data);
} catch (error) {
    console.error(error);
}
};


export const addToFav = () => {
}

export const getFav = () => {
}

export const deleteFromFav = () => {
}


