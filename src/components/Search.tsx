import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import useStyles from '../styles';
import { getMovies } from '../redux/feature/movieSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

interface Props {}

const Search: React.FC<Props> = () => {
    const [name, setName] = useState('spider');
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state) => state.movie);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getMovies(name));
    }, [dispatch, name]);

    return (
        <>
            <h2 className={classes.title}>Movie Search App</h2>
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                <TextField
                    type='text'
                    fullWidth
                    value={name}
                    sx={{ m: 1, width: '55ch' }}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && <p className={classes.error}>{error}</p>}
            </form>
        </>
    );
};

export default Search;
