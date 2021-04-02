import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// services imports
import { getOneBoard } from "../../services/boards";
import { getAllPosts } from "../../services/posts";

export default function BoardDetail(props) {
  const [currBoard, setCurrBoard] = useState(null);
  const { id } = useParams();
  const { handleBoardDelete } = props;

  useEffect(() => {
    const fetchCurrBoard = async () => {
      const boardData = await getOneBoard(id);
      setCurrBoard(boardData);
      console.log(boardData);
    };
    fetchCurrBoard();
  }, [id]);

  return (
    <div>
      {currBoard && (
        <div>
          <h1>{currBoard.name}</h1>
          <h3>{currBoard.description}</h3>
          {currBoard.posts.map((post) => (
            <div>
              <Link to={`/boards/${currBoard.id}/posts/${post.id}`}>
                <img alt="plant" src={post.image_url} />
                <p>{post.name}</p>
              </Link>
            </div>
          ))}

          <Link to="/boards/create">
            <button>Add a Post</button>
          </Link>
          <Link to={`/boards/${currBoard.id}/edit`}>
            <button>Edit This Board</button>
          </Link>
          <button onClick={() => handleBoardDelete(currBoard.id)}>
            Delete This Board
          </button>
        </div>
      )}
    </div>
  );
}
