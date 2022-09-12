import http from "../http-common";

const getAll = () => {
    return http.get("/posts");
  };

const create = (data) => {
  return http.post("/posts",data);
}

const edit = (id,data) => {
  return http.put(`/posts/${id}`,data);
}

const deletePost = (id) => {
  return http.delete("/posts/{id}");
}

const getPostData = (id) => {
  return http.get(`/posts/${id}`);
}

  const postService = {
    getAll,
    create,
    edit,
    deletePost,
    getPostData
  }

  export default postService;