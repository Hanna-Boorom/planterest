import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// component imports
import Layout from "../components/shared/Layout/Layout";
import Boards from "../screens/Boards/Boards";
import BoardCreate from "../screens/BoardCreate/BoardCreate";
import BoardDetail from "../screens/BoardDetail/BoardDetail";

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
  updateBoard,
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
      console.log(boardData);
    };
    fetchBoards();
  }, []);

  const handleBoardCreate = async (boardData) => {
    const newBoard = await addBoard(boardData);
    setBoards((prevState) => [...prevState, newBoard]);
    history.push("/boards");
  };

  return (
    <div>
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path="/boards/create">
            <BoardCreate handleBoardCreate={handleBoardCreate} />
          </Route>
          <Route path="/boards/:id">
            <BoardDetail posts={posts} />
          </Route>
          <Route path="/boards">
            <Boards boards={boards} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
