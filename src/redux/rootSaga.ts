import { all } from 'typed-redux-saga/macro';
import { moviesSagas } from './movieSagas';

export default function* rootSaga() {
    yield all([...moviesSagas]);
}
