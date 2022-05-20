import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import {
    getMovie,
    getMovies,
    setErrorMessage,
    setMovie,
    setMovies,
} from './feature/movieSlice';
import { fetchMovie, fetchMovies, ResponseGenerator } from './api';
import { fork } from 'redux-saga/effects';

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync);
}

function* onLoadMoviesAsync(action: any) {
    try {
        const { payload } = action;
        const movieName = payload;
        const response: ResponseGenerator = yield call(fetchMovies, movieName);
        if (response.status === 200) {
            const { data } = response;
            if (data.Error) {
                yield put(setMovies([]));
                throw new Error(data.Error);
            }
            const { Search } = data;
            yield put(setErrorMessage(null));
            yield put(setMovies([...Search]));
        }
    } catch (error: any) {
        const { message } = error;
        console.log(message);
        yield put(setErrorMessage(message));
    }
}

function* onLoadMovieAsync(action: any) {
    try {
        const { payload } = action;
        const movieId = payload;
        const response: ResponseGenerator = yield call(fetchMovie, movieId);
        if (response.status === 200) {
            const { data } = response;
            if (data.Error) {
                yield put(setMovie(null));
                throw new Error(data.Error);
            }

            yield put(setErrorMessage(null));
            yield put(setMovie({ ...data }));
        }
    } catch (error: any) {
        const { message } = error;
        console.log(message);
        yield put(setErrorMessage(message));
    }
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
