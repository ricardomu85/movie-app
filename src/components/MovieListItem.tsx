import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {Movie} from '../models/movie-detail';

interface Props {
    movie: Movie;
}

const MovieListItem: React.FC<Props> = ({ movie }: Props) => {
    return (
        <>
            <Grid item>
                <Card sx={{ maxWidth: '350' }}>
                    <Link to={`/movie/${movie.imdbID}`}>
                        <CardMedia
                            component='img'
                            height='350'
                            image={movie.Poster}
                            alt={movie.Title}
                        />
                        <CardContent>
                            <Typography variant='body2' color='text.primary'>
                                {movie.Title}
                            </Typography>
                            <Typography variant='body2' color='text.primary'>
                                {movie.Year}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
            </Grid>
        </>
    );
};

export default MovieListItem;
