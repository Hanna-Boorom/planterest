import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import TextfField from "@material-ui/core/TextField";

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
    <div>
      {/* {currBoard && ( */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBoardUpdate(id, formData);
        }}
      >
        <h3>Edit this Board</h3>
        <label>
          Title:
          <input name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* )} */}
    </div>
  );
}
