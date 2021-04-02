import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// component imports
import Layout from "../components/shared/Layout/Layout";
import Boards from "../screens/Boards/Boards";
import BoardCreate from "../screens/BoardCreate/BoardCreate";
import BoardEdit from "../screens/BoardEdit/BoardEdit";
import BoardDetail from "../screens/BoardDetail/BoardDetail";
import PostDetail from "../screens/PostDetail/PostDetail";

// services imports
import {
  getAllPosts,
  getOnePost,
  addPost,
  updatePost,
  destroyPost,
} from "../services/posts";

import {
  getAllBoards,
  getOneBoard,
  addBoard,
  putBoard,
  destroyBoard,
} from "../services/boards";

export default function MainContainer(props) {
  const [boards, setBoards] = useState([]);
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchBoards = async () => {
      const boardData = await getAllBoards();
      setBoards(boardData);
    };
    fetchBoards();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
      console.log(postData);
    };
    fetchPosts();
  }, []);

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

  const handlePostDelete = async (id) => {
    await destroyPost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  const handleBoardDelete = async (id) => {
    await destroyBoard(id);
    setBoards((prevState) => prevState.filter((board) => board.id !== id));
    history.push("/boards");
  };

  return (
    <div>
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path={`/boards/:id/posts/:id`}>
            <PostDetail boards={boards} handlePostDelete={handlePostDelete} />
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
