import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './styles.js'
import TableComponent from './tableComponent'

const Table = (props) => {

    const classes = useStyles(props);

    return <div className={classes.mainContainer}>
        <div className={classes.tableContainer}>
            <TableComponent />
            {/* <TextField className={classes.field} id="search-term" label="Search Term" variant="outlined" required />
            <TextField className={classes.field} id="language" label="Programming Language" variant="outlined" required />
            <Button className={classes.searchButton} variant="contained">Search</Button> */}
        </div>
    </div> 
}

export default Table