import React, { useState, useEffect, useRef } from 'react';
import { useStyles } from './styles.js'
import TableComponent from './tableComponent'

const Table = (props) => {
    const classes = useStyles(props);

    return <div className={classes.mainContainer}>
        <div className={classes.tableContainer}>
            {props.loading == false ? <TableComponent data={props.data} /> : 'Loading' }
        </div>
    </div> 
}

export default Table