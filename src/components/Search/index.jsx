import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useStyles } from './styles.js'

const Search = (props) => {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const classes = useStyles(props);
    const [searchTerm, setSearchTerm] = useState('')
    const [language, setLanguage] = useState('')
    const [error, setError] = useState(false)
    const [repos, setRepos] = useState([])
    const [fetched, setFetched] = useState(false)
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        if (fetched) {
            //console.log(repos)
            props.reposData(repos)
            props.loading(false)
        }
    }, [fetched])

    useEffect(() => {
        props.loading(fetching)
    }, [fetching])

    const submitQuery = () => {
        if (!searchTerm.length || !language.length) {
            setError(true)
        } else {
            setFetching(true)
            let url;
            let repos = []
            let promises = [];

            //turn through the pages
            for (let p = 1; p <= 10; p++) {
                url = `https://api.github.com/search/repositories?q=${searchTerm}+language:${language}&sort=stars&order=desc&per_page=100&page=${p}`;

                //fetch data
                for (let j = 0; j < 1; j++) {
                    promises.push(fetch(url).then(res => res.json())
                        .then(data => {

                            //push data to array
                            for (let i = 0; i < data.items.length; i++) {
                                repos = repos.concat(data.items[i]);
                            }

                        }));
                }
            }

            Promise.all(promises)
                .then(() => {
                    setFetched(true)
                    setRepos(repos)
                })
        }
    }

    const handleClose = () => {
        setError(false)
    };

    return <div className={classes.mainContainer}>
        <div className={classes.searchContainer}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={error}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert severity="error">Please provide all fields</Alert>
            </Snackbar>
            <TextField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={classes.field} id="search-term" label="Search Term" variant="outlined" required />
            <TextField value={language} onChange={(e) => setLanguage(e.target.value)} className={classes.field} id="language" label="Programming Language" variant="outlined" required />
            <Button onClick={submitQuery} className={classes.searchButton} variant="contained">Search</Button>
        </div>
    </div>
}

export default Search