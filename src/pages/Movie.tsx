import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Typography, Button } from '@mui/material';
import useStyles from '../styles';
import { getMovie } from '../redux/feature/movieSlice';

type RouteParams = { id: string };

interface Props {}

const Movie: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const { movie } = useAppSelector((state) => state.movie);
    const classes = useStyles();
    const { id } = useParams<RouteParams>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) dispatch(getMovie(id));
    }, [id, dispatch]);

    return (
        <section className={classes.section}>
            <img src={movie?.Poster} alt={movie?.Title} />
            <div>
                <Typography
                    align='left'
                    variant='h3'
                    gutterBottom
                    component='h2'
                >
                    {movie?.Title}
                </Typography>
                <Typography
                    align='left'
                    variant='h5'
                    gutterBottom
                    component='h5'
                >
                    Year: {movie?.Year}
                </Typography>
                <Typography
                    align='left'
                    variant='body1'
                    gutterBottom
                    component='p'
                >
                    {movie?.Plot}
                </Typography>
                <Typography
                    align='left'
                    variant='h6'
                    gutterBottom
                    component='h6'
                >
                    Director: {movie?.Director}
                </Typography>
                <Button variant='contained' onClick={() => navigate('/')}>
                    Go Back
                </Button>
            </div>
        </section>
    );
};

export default Movie;
