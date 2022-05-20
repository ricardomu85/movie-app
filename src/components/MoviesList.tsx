import React from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../redux/store';
import MovieListItem from './MovieListItem';
import { Movie } from '../models/movie-detail';

interface Props {}

const MoviesList: React.FC<Props> = () => {
    const { movieList } = useAppSelector((state) => state.movie);    
    return (
        <>
            <Grid sx={{ flexGrod: 1 }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent='center' spacing={3}>
                        {movieList &&
                            movieList?.map((item: Movie, index: number) => (
                                <MovieListItem movie={item} key={index} />
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default MoviesList;
