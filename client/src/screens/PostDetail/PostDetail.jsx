import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";

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
    <div>
      {currPost && (
        <div>
          <h3>{currPost.name}</h3>
          <h5>{currPost.description}</h5>
          <img src={currPost.image_url} alt="post cover" />
          <div>
            <button
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
