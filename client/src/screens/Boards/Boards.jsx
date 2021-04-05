// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Boards.css";

export default function Boards(props) {
  const { boards } = props;
  return (
    <div className="boards-main-container">
      <div className="boards-title">
        <h3>My Boards</h3>
        <Link className="create-a-board" to="/boards/create">
          Create a Board
        </Link>
      </div>

      <div className="boards-container">
        {boards.map((board) => (
          <div className="indiv-board-container" key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <p className="board-name">{board.name}</p>
              <img
                className="board-image"
                src={board.posts[0].image_url}
                alt="cover"
              />
              {board.posts.length > 1 ? (
                <p>{board.posts.length} posts</p>
              ) : (
                <p>{board.posts.length} post</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
