import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainContainer: {
        width: '100%',
    },
    tableContainer: {
        width: '90%',
        padding: 20,
        margin: '20px auto',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    },
    field: {
        margin: '0px 20px !important'
    },
    searchButton: {
        margin: '10px 20px !important'
    }
})

export { useStyles };