import { NavLink } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <header>Header here</header>
      <nav>
        <p></p>
      </nav>
      {props.children}
    </div>
  );
}
