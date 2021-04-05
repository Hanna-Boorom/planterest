import { NavLink, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../../../assets/PlanterestLogo.png";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <NavLink to="/boards">
          <img src={logo} alt="logo" />
        </NavLink>
        {currentUser ? (
          <>
            <p>Hi {currentUser.username}!</p>
            {currentUser && (
              <nav>
                <NavLink to="/boards">
                  <p>Boards</p>
                </NavLink>
              </nav>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>

      {props.children}
    </div>
  );
}
