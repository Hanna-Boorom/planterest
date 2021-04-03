import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <NavLink to="/boards">
          <h1>Planterest</h1>
        </NavLink>
        {currentUser ? (
          <>
            <p>Hi {currentUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>

      {currentUser && (
        <nav>
          <NavLink to="/boards">
            <p>Boards</p>
          </NavLink>
        </nav>
      )}

      {props.children}
    </div>
  );
}
