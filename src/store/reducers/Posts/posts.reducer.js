import React from 'react'
import {
  RETRIEVE_POSTS,
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  EDIT_POST
} from 'store/actions';

const intialValues = {
  posts: [],
  editPost: {}
}

export default function postsReducer(state = intialValues, action) {

  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_POSTS:
      return { posts: payload };

    case GET_POST:
      return { ...state, editPost: payload };

    case CREATE_POST:
      return { posts: [...state.posts, { ...payload }] }

    case EDIT_POST:
      return {posts : state.posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload
          }
        } else {
          return post
        }
      })};  

    case DELETE_POST:
      return { posts: state.posts.filter((post) => post.id !== payload) };

    default:
      return state;
  }
}
