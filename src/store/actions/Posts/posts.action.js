import {
  CREATE_POST,
  DELETE_POST,
  RETRIEVE_POSTS,
  EDIT_POST,
  GET_POST
} from "../index";

import postService from "api/post.services";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await postService.getAll();
    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await postService.getPostData(id);
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (values) => async (dispatch) => {
  try {
    const res = await postService.create(values);
    dispatch({
      type: CREATE_POST,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const editPost = (id,values) => async (dispatch) => {
  try {
    const res = await postService.edit(id, values);
    dispatch({
      type: EDIT_POST,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await postService.deletePost(id);
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  } catch (err) {
    console.log(err);
  }
}