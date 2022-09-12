import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from 'store/actions/Posts/posts.action';
import CreatePost from './CreatePost';

function ManagePost() {
    let { postId } = useParams();
    const dispatch = useDispatch();
    const editPost = useSelector(state => state.posts?.editPost);
    
    useEffect(() => {
        dispatch(getPost(postId))
    }, [postId])

    return (
        <div>
            <CreatePost initialValues={editPost}/>
        </div>
    )
}

export default ManagePost;