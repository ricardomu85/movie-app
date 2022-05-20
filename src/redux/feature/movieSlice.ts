import { createSlice } from '@reduxjs/toolkit';
import { MovieDetail, Movie } from '../../models/movie-detail';

interface MovieState {
    movieList: Movie[];
    movie: MovieDetail | null;
    error?: string;
}

const initialState: MovieState = {
    movieList: [],
    movie: {
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        Ratings: [],
        Metascore: '',
        imdbRating: '',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        DVD: '',
        BoxOffice: '',
        Production: '',
        Website: '',
        Response: '',
    },
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        /*Redux Saga Call Async*/
        getMovies(state, action) {},
        getMovie(state, action) {
            state.movie = null;
        },
        /*Redux Set the state reducers*/
        setMovies: (state, action) => {
            state.movieList = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { getMovies, setMovies, setErrorMessage, setMovie, getMovie } =
    movieSlice.actions;

export default movieSlice.reducer;
