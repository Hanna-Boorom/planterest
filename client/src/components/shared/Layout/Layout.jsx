import { NavLink } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <header>Header here</header>
      <nav>
        <NavLink to="/boards">
          <p>Boards</p>
        </NavLink>
      </nav>
      {props.children}
    </div>
  );
}
