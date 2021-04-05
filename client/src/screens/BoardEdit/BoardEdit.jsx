import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BoardEdit.css";

export default function BoardEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const { name, description } = formData;
  const { id } = useParams();
  const { boards, handleBoardUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const currBoard = boards.find((board) => board.id === Number(id));
      setFormData({
        name: currBoard.name,
        description: currBoard.description,
      });
    };
    if (boards.length) {
      prefillFormData();
    }
  }, [boards, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="board-edit-container">
      <form
        className="board-edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleBoardUpdate(id, formData);
        }}
      >
        <h3 className="edit-this-board">Edit this Board</h3>
        <label className="edit-board-label">
          Title:
          <input
            className="edit-board-input"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="edit-board-label">
          Description:
          <textarea
            className="edit-board-input"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button className="edit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
