import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const searchMovies = async (search) => {

try {
    const response = await axios.get(`${SERVER}/search/`);
return console.log(response.data.results);
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


