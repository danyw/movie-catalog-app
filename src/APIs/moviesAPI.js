import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const searchMoviesAPI = async (search) => {

try {
    const response = await axios.get(`${SERVER}/movielist`, { search });
return console.log(response.data);
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


