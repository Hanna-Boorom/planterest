import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";

export default function PostDetail(props) {
  const [currPost, setCurrPost] = useState(null);
  const { id } = useParams();
  const { handleDeletePost } = props;

  useEffect(() => {
    const fetchCurrPost = async () => {
      const postData = await getOnePost(id);
      setCurrPost(postData);
    };
    fetchCurrPost();
  }, [id]);

  return (
    <div>
      {currPost && (
        <div>
          <h3>{currPost.name}</h3>
          <h5>{currPost.description}</h5>
          <img src={currPost.image_url} alt="post cover" />
          <div>
            {/* <Link to={`/boards/${board.id}/posts/${currPost.id}/edit`}>
              Edit This Post
            </Link> */}
            <button onClick={handleDeletePost}>Delete This Post</button>
          </div>
        </div>
      )}
    </div>
  );
}
