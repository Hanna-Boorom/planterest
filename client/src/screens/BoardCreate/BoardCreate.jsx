import { useState } from "react";
import "./BoardCreate.css";

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
    <div className="board-create-container">
      <h3 className="create-a-board">Create a Board</h3>
      <form
        className="create-board-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleBoardCreate(formData);
        }}
      >
        <label className="create-board-label">
          Title:
          <input
            className="create-board-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="create-board-label">
          Description:
          <textarea
            className="create-board-input"
            type="text"
            name="description"
            value={description}
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
