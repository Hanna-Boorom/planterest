import api from "./api-config";

export const getAllPosts = async (boardId) => {
  const resp = await api.get(`/boards/${boardId}/posts`);
  return resp.data;
};

export const getOnePost = async (boardId, id) => {
  const resp = await api.get(`/boards/${boardId}/posts/${id}`);
  return resp.data;
};

export const addPost = async (boardId, postData) => {
  const resp = await api.post(`/boards/${boardId}/posts/`, {
    post: postData,
  });
  return resp.data;
};

export const destroyPost = async (boardId, id) => {
  const resp = await api.delete(`/boards/${boardId}/posts/${id}`);
  return resp;
};
