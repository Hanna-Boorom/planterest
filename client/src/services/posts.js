import api from "./api-config";

export const getAllPosts = async (boardId) => {
  const resp = await api.get(`/boards/${boardId}/posts`);
  return resp.data;
};

export const getOnePost = async (boardId, id) => {
  const resp = await api.get(`boards/${boardId}/posts/${id}`);
  return resp.data;
};

export const addPost = async (boardId, id, postData) => {
  const resp = await api.post(`boards/${boardId}/posts/${id}`, {
    post: postData,
  });
  return resp.data;
};

// export const updatePost = async (boardId, id, postData) => {
//   const resp = await api.put(`boards/${boardId}/posts/${id}`);
//   return resp.data;
// };

export const destroyPost = async (boardId, id) => {
  const resp = await api.delete(`/boards/${boardId}/posts/${id}`);
  return resp;
};
