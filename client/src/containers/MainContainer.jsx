import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// component imports
import Layout from "../components/shared/Layout/Layout";
import Boards from "../screens/Boards/Boards";
import BoardCreate from "../screens/BoardCreate/BoardCreate";
import BoardEdit from "../screens/BoardEdit/BoardEdit";
import BoardDetail from "../screens/BoardDetail/BoardDetail";
import PostDetail from "../screens/PostDetail/PostDetail";
import PostCreate from "../screens/PostCreate/PostCreate";

// services imports
// import { removeToken } from "../services/auth";
import { addPost, destroyPost } from "../services/posts";

import {
  getAllBoards,
  addBoard,
  putBoard,
  destroyBoard,
} from "../services/boards";

export default function MainContainer(props) {
  const [boards, setBoards] = useState([]);
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const { currentUser, handleLogout } = props;

  useEffect(() => {
    const fetchBoards = async () => {
      const boardData = await getAllBoards();
      setBoards(boardData);
    };
    fetchBoards();
  }, []);

  // LOGOUT
  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem("authToken");
  //   removeToken();
  // };

  // BOARD API CALLS
  const handleBoardCreate = async (boardData) => {
    const newBoard = await addBoard(boardData);
    setBoards((prevState) => [...prevState, newBoard]);
    history.push("/boards");
  };

  const handleBoardUpdate = async (id, boardData) => {
    const updatedBoard = await putBoard(id, boardData);
    setBoards((prevState) =>
      prevState.map((board) => {
        return board.id === Number(id) ? updatedBoard : board;
      })
    );
    history.push("/boards");
  };

  const handleBoardDelete = async (id) => {
    await destroyBoard(id);
    setBoards((prevState) => prevState.filter((board) => board.id !== id));
    history.push("/boards");
  };

  // POST API CALLS
  const handlePostCreate = async (boardId, postData) => {
    const newPost = await addPost(boardId, postData);
    setBoards((prevState) => [...prevState, newPost]);
    history.push(`/boards/${boardId}/posts/`);
  };

  const handlePostDelete = async (boardId, id) => {
    await destroyPost(boardId, id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
    history.push(`/boards/${boardId}`);
  };

  return (
    <div>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/boards/:id/posts/create">
            <PostCreate handlePostCreate={handlePostCreate} />
          </Route>
          <Route path="/boards/:id/posts/:id">
            <PostDetail
              boards={boards}
              // posts={posts}
              handlePostDelete={handlePostDelete}
            />
          </Route>

          <Route path="/boards/create">
            <BoardCreate handleBoardCreate={handleBoardCreate} />
          </Route>
          <Route path="/boards/:id/edit">
            <BoardEdit boards={boards} handleBoardUpdate={handleBoardUpdate} />
          </Route>
          <Route path="/boards/:id">
            <BoardDetail handleBoardDelete={handleBoardDelete} />
          </Route>
          <Route path="/boards">
            <Boards boards={boards} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
