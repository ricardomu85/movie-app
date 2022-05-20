import React from 'react';
import Search from '../components/Search';
import MoviesList from '../components/MoviesList';

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <>
            <Search />
            <MoviesList />
        </>
    );
};

export default Home;
