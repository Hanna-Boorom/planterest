// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Boards.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Boards(props) {
  const { boards } = props;

  // this was a hot fix for the images not rendering if the board had no posts
  const defaultBoardImageArray = [
    "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdmVzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1575178114667-c8a832c61f45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvbnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjY3VsZW50fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
  ];

  const randomImage =
    defaultBoardImageArray[
      Math.floor(Math.random() * defaultBoardImageArray.length)
    ];
  return (
    <div className="boards-main-container">
      <div className="boards-title">
        <h3>My Boards</h3>
      </div>
      <div className="add-a-board">
        <Link to="/boards/create">
          <FontAwesomeIcon icon={faPlus} /> Add a Board
        </Link>
      </div>

      <div className="boards-container">
        {boards.map((board) => (
          <div className="indiv-board-container" key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <p className="board-name">{board.name}</p>
              <img className="board-image" alt="cover" src={randomImage} />
              {/* {!board.posts[0] ? (
                <img
                  className="board-image"
                  alt="cover"
                  src={defaultBoardImage}
                />
              ) : (
                <img
                  className="board-image"
                  src={board.posts[0].image_url}
                  alt="cover"
                />
              )} */}

              {/* {boards.posts.length && board.posts.length > 1 ? (
                <p>{board.posts.length} posts</p>
              ) : (
                <p>{board.posts.length} post</p>
              )} */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
