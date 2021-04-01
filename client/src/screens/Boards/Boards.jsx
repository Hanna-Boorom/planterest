// import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Boards(props) {
  const { boards } = props;
  return (
    <div>
      <h3>Boards</h3>
      {boards.map((board) => (
        <div key={board.id}>
          <Link to={`/boards/${board.id}`}>
            <p>{board.name}</p>
            <img
              src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60"
              alt="cover"
            />
            <p># of posts</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
