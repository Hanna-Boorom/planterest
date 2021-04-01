import React from "react";

export default function Layout(props) {
  return (
    <div>
      <header>Header here</header>
      {props.children}
    </div>
  );
}
