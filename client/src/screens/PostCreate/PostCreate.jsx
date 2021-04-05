import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PostCreate.css";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  const { name, description, image_url } = formData;
  const { handlePostCreate } = props;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="post-create-containter">
      <h3>Create a Post</h3>
      <form
        className="create-post-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlePostCreate(id, formData);
          console.log(formData);
        }}
      >
        <label className="create-post-label">
          Title:
          <input
            className="create-post-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="create-post-label">
          Description:
          <textarea
            className="create-post-input"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>

        <label className="create-post-label">
          Image URL:
          <input
            className="create-post-input"
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <button className="create-button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}
