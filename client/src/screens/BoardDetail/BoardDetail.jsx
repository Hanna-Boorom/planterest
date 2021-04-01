import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// services imports
import { getOneBoard } from "../../services/boards";
import { getAllPosts } from "../../services/posts";

export default function BoardDetail(props) {
  const [currBoard, setCurrBoard] = useState(null);
  const { id } = useParams();
  const { boards, posts } = props;

  useEffect(() => {
    const fetchCurrBoard = async () => {
      const boardData = await getOneBoard(id);
      setCurrBoard(boardData);
      console.log(boardData);
    };
    fetchCurrBoard();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedFlavor(value)
  // }

  return (
    <div>
      {currBoard && (
        <div>
          <h1>{currBoard.name}</h1>
          <h3>{currBoard.description}</h3>
          {currBoard.posts.map((post) => (
            <div>
              <img alt="plant" src={post.image_url} />
              <p>{post.name}</p>
            </div>
          ))}

          <Link to="">
            <button>Add a Post</button>
          </Link>
          <Link>
            <button>Edit This Board</button>
          </Link>
        </div>
      )}
    </div>
  );
}
