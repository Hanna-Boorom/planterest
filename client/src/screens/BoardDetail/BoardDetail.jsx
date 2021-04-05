import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BoardDetail.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// services imports
import { getOneBoard } from "../../services/boards";

export default function BoardDetail(props) {
  const [currBoard, setCurrBoard] = useState(null);
  const { id } = useParams();
  const { handleBoardDelete } = props;

  useEffect(() => {
    const fetchCurrBoard = async () => {
      const boardData = await getOneBoard(id);
      setCurrBoard(boardData);
    };
    fetchCurrBoard();
  }, [id]);

  return (
    <div className="board-detail-main-container">
      {currBoard && (
        <div>
          <div className="bd-action-buttons">
            <Link to={`/boards/${currBoard.id}/posts/create`}>
              <button className="add-post-button">
                <FontAwesomeIcon icon={faPlus} /> Add a Post
              </button>
            </Link>

            <Link to={`/boards/${currBoard.id}/edit`}>
              <button className="edit-board-button">
                {" "}
                <FaPencilAlt /> Edit This Board
              </button>
            </Link>

            <button
              className="delete-board-button"
              onClick={() => handleBoardDelete(currBoard.id)}
            >
              <FaTrashAlt /> Delete This Board
            </button>
          </div>
          <div className="detail-title">
            <h1 className="bd-board-name">{currBoard.name}</h1>
            <h3 className="bd-board-description">{currBoard.description}</h3>
            <div className="mapped-details">
              {currBoard.posts.map((post) => (
                <div className="indiv-detail-container" key={currBoard.id}>
                  <Link to={`/boards/${currBoard.id}/posts/${post.id}`}>
                    <img
                      className="post-image"
                      alt="plant"
                      src={post.image_url}
                    />
                    <p>{post.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
