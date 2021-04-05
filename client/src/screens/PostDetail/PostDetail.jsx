import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import "./PostDetail.css";

export default function PostDetail(props) {
  const [currPost, setCurrPost] = useState(null);
  const { id, boardId } = useParams();
  const { handlePostDelete } = props;

  useEffect(() => {
    const fetchCurrPost = async () => {
      const postData = await getOnePost(boardId, id);
      setCurrPost(postData);
      console.log(postData);
    };
    fetchCurrPost();
  }, [boardId, id]);

  return (
    <div className="post-detail-main-container">
      {currPost && (
        <div className="post-detail-container">
          <h3 className="post-name">{currPost.name}</h3>
          <h5 className="post-description">{currPost.description}</h5>
          <img
            className="post-detail-image"
            src={currPost.image_url}
            alt="post cover"
          />
          <div>
            <button
              className="delete-post-button"
              onClick={() => handlePostDelete(currPost.board_id, currPost.id)}
            >
              Delete This Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
