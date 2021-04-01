import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Boards(props) {
  const { boards, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>Boards</h3>
      {boards.map((board) => (
        <div>
          <Link to={`/boards/${board.id}`}>{board.name}</Link>
        </div>
      ))}
    </div>
  );
}
