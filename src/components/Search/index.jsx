import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStyles } from './styles.js'

const Search = (props) => {

    const classes = useStyles(props);

    return <div className={classes.mainContainer}>
        <div className={classes.searchContainer}>
            <TextField className={classes.field} id="search-term" label="Search Term" variant="outlined" required />
            <TextField className={classes.field} id="language" label="Programming Language" variant="outlined" required />
            <Button className={classes.searchButton} variant="contained">Search</Button>
        </div>
    </div> 
}

export default Search