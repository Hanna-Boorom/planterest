import { useState } from "react";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  const { name, description, image_url } = formData;
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Create a Post</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePostCreate(formData);
        }}
      >
        <label>
          Title:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Description:
          <textarea
            type="text"
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
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}
