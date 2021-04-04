import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { handleLogin, logo } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-logo-and-form">
        <div className="login-logo-container">
          <img src={logo} alt="logo" />
        </div>
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <h3>Login</h3>
          <div className="label-container">
            <label className="login-label">
              Email:
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="login-label">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>

      <div className="login-register">
        <p>
          Don't have an account yet? <Link to="/register">Register Here</Link>
        </p>
      </div>

      <footer>Dev + Design by Hanna Boorom</footer>
    </div>
  );
}
