import React, { useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { getPageUsers } from 'store/actions/Users/users.action';
import { useDispatch, useSelector } from "react-redux";

export default function ListingusersTable() {

    const dispatch = useDispatch();
    const pageObj = useSelector((state) => state.paginationState);
    const { data, page, count, isLoading, rowsPerPage } = pageObj;

    const columns = [
        { name: "id", label: "Id" },
        { name: "title", label: "Title" },
        { name: "lastName", label: "Last Name" },
        // { name: "picture", label:"Picture" },
        // {
        //     name: "Action",
        //     options: {
        //         customBodyRenderLite: (dataIndex) => {
        //             let id = data[dataIndex].id;
        //             return (
        //                 <ActionComponent Id={id} handleDeleteTask={handleDeleteTask} />
        //             );
        //         }
        //     }
        // }
    ];

    useEffect(() => {
        getData('', 0);
    }, [])

    const getData = (url, page) => {
        dispatch(getPageUsers(url, page))
    }

    const changePage = (page) => {
        dispatch(getPageUsers(page))
    }

    const options = {
        filterType: 'checkbox',
        responsive: 'vertical',
        serverSide: true,
        count: count,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: [],
        onTableChange: (action, tableState) => {
            //console.log(tableState); its important mui datatable gives this much methods to use
            switch (action) {
                case 'changePage':
                    changePage(tableState.page);
                    break;
                default:
                    console.log('action not handled.');
            }
        },
    };

    return (

        <div>
            <Link href="/" underline="none">
                <Button variant="outlined" sx={{ mt: 1 }} color="error">
                    CANCLE
                </Button>
            </Link>
            <Paper elevation={3} style={{ background: "linear-gradient(#fbc2eb 0%, #a6c1ee 100%)" }}>
                <Box sx={{ height: '100vh', mt: 3 }}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Users Listing
                                {isLoading && (
                                    <CircularProgress
                                        size={24}
                                        style={{ marginLeft: 15, position: "relative", top: 4 }}
                                    />
                                )}
                            </Typography>
                        }
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Box>
            </Paper>
        </div>
    )
}
