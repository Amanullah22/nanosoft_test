import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './styles.js'
import TableComponent from './tableComponent'
import CircularProgress from '@mui/material/CircularProgress';

const Table = (props) => {
    const classes = useStyles(props);

    return <div className={classes.mainContainer}>
        <div className={classes.tableContainer}>
            {props.loading == false ? <TableComponent data={props.data} />
            : <div style={{width: '100%', textAlign: 'center'}}><CircularProgress size={25} /></div> }
        </div>
    </div> 
}

export default Table