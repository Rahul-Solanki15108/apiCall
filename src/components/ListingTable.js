import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from 'store/actions/Posts/posts.action';
import ActionComponent from 'components/FormComponents/ActionComponent';
import ConfirmBoxDelete from 'components/FormComponents/ConfirmBoxDelete';

export default function ListingTable() {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [postId, setpostId] = useState();
    const data = useSelector(state => state?.posts.posts);

    let stateObj = {
        page: 0,
        isLoading: false
    }

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(getAllPosts());
        }
        else {
            setCount(data.length);
        }
    }, [data]);

    const handleDeleteTask = (id) => {
        setpostId((id));
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { name: "id", label: "Id" },
        { name: "userId", label: "User Id" },
        { name: "title", label: "Title" },
        { name: "body", label: "Body Texy" },
        {
            name: "Action",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    let id = data[dataIndex].id;
                    return (
                        <ActionComponent Id={id} handleDeleteTask={handleDeleteTask} />
                    );
                }
            }
        }
    ];

    const options = {
        filterType: 'checkbox',
        rowsPerPage: 5,
        rowsPerPageOptions: [5],
        count: count,
        // page,
        onTableChange: (action, tableState) => {
            if (action === "changePage") {
                console.log("Go to page", tableState.page);
            }
        }
    };

    return (

        <>
            <Paper elevation={3} style={{ background: "linear-gradient(#fbc2eb 0%, #a6c1ee 100%)" }}>
                <Box sx={{ height: '100vh', mt: 3 }}>
                    <Link href="create-post" underline="none">
                        <Button variant="outlined">
                            ADD Record
                        </Button>
                    </Link>
                    <Link href="users" underline="none">
                        <Button variant="outlined">
                            Users
                        </Button>
                    </Link>
                    <ConfirmBoxDelete open={open} close={handleClose} id={postId} />
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Records Of Posts
                                {stateObj.isLoading && (
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
        </>

    )
}
