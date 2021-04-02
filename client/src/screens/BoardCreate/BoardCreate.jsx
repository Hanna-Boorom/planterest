import { useState } from "react";

export default function BoardCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { name, description } = formData;
  const { handleBoardCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Create a Board</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBoardCreate(formData);
        }}
      >
        <label>
          Title:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}
