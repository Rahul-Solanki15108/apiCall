import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { deletePost } from 'store/actions/Posts/posts.action';

function ConfirmBoxDelete(props) {
    const dispatch = useDispatch();
    const { close, open, id } = props;

    const handleClick = (id) => {
        dispatch(deletePost(id));
        close();
    }
    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={close}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>{"Are You Sure You want to Delete"}</DialogTitle>
                <DialogActions>
                    <Button onClick={close}>No</Button>
                    <Button
                        onClick={() => handleClick(id)}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ConfirmBoxDelete;