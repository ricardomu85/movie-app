import axios from 'axios';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movieName: string) => {
    return axios.get(`${API_ENDPOINT}&s=${movieName}`);
};

export const fetchMovie = async (movieId: string) => {
    return axios.get(`${API_ENDPOINT}&i=${movieId}`);
};

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}
