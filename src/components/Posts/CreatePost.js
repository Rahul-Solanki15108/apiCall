import React from 'react'
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../FormComponents/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { createPost, editPost } from 'store/actions/Posts/posts.action';
import { useNavigate, useParams } from 'react-router-dom';

function CreatePost(props) {

  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmitPost = (values) => {
    if (params.postId) {
      dispatch(editPost(params.postId, values));
      navigate('/');
    } else {
      dispatch(createPost(values));
      navigate('/');
    }
  }

  return (

    <>
      <Container maxWidth="lg" sx={{ mt: 3, height: "90vh" }}>

        <form onSubmit={handleSubmit(handleSubmitPost)}>

          <Field label="Title" name="title" component={renderTextField} placeholder="Title" />
          <br /> <br />

          <Field label="Body" name="body" component={renderTextField} placeholder="Body" />
          <br /><br />

          <Field label="User Id" name="userId" component={renderTextField} placeholder="User Id" />
          <br /><br />

          <Button type="submit" variant="outlined">
            {params.postId ? 'EDIT Post' : 'ADD Post'}
          </Button>

          <Link href="/" underline="none">
            <Button variant="outlined" sx={{ ml: 1 }} color="error">
              CANCLE
            </Button>
          </Link>

        </form>
      </Container>
    </>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'post'
})(CreatePost);