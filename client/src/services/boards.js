import api from "./api-config";

export const getAllBoards = async () => {
  const resp = await api.get("/boards");
  return resp.data;
};

export const getOneBoard = async (id) => {
  const resp = await api.get(`/boards/${id}`);
  return resp.data;
};

export const addBoard = async (boardData) => {
  const resp = await api.post("/boards", { board: boardData });
  return resp.data;
};

export const putBoard = async (id, boardData) => {
  const resp = await api.put(`/boards/${id}`, { board: boardData });
  return resp.data;
};

export const destroyBoard = async (id) => {
  const resp = await api.delete(`/boards/${id}`);
  return resp;
};
