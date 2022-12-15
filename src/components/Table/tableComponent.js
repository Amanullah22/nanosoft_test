import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'name',
        headerName: 'Repo',
        width: 150,
        editable: false,
    },
    {
        field: 'owner',
        headerName: 'User',
        width: 150,
        editable: false,
        renderCell: (data) => {
            return (
                data.row.owner.login
            );
        }
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 325,
        editable: false,
    },
    {
        field: 'watchers',
        headerName: 'Watchers',
        width: 150,
        editable: false,
    },
    {
        field: 'score',
        headerName: 'Score',
        width: 150,
        editable: false,
    },
    {
        field: 'pushed_at',
        headerName: 'Published',
        width: 150,
        editable: false,
        renderCell: (data) => {
            let properDate = new Date(data.row.pushed_at).toDateString()
            return (
                properDate
            );
        }
    },
    {
        field: 'url',
        headerName: 'Link',
        width: 150,
        editable: false,
        renderCell: (data) => {
            return (
                <a href={data.row.html_url} target="_blank">Visit</a>
            );
        }
    },
];

export default function DataGridDemo(props) {
    const [rows, setRows] = React.useState(false)

    React.useEffect(() => {
        setRows(props.data)
    }, [props])

    return (
        <Box sx={{ height: 450, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}