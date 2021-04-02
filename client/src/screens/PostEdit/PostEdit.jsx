import React from "react";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  const { name, description, image_url } = formData;
  const { boardId, id } = useParams();
  const { posts, handlePostUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const currPost = posts.find((post) => post.id === Number(id));
      setFormData({
        name: currPost.name,
        description: currPost.description,
        image_url: currPost.image_url,
      });
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
