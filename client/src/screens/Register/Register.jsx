import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister, logo } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <div className="register-logo-and-form">
        <div className="register-logo-container">
          <img src={logo} alt="logo" />
        </div>

        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <h3>Register</h3>
          <label className="register-label">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>

          <label className="register-label">
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className="register-label">
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
      </div>
      <div className="login-register">
        <p>
          Already have an account? <Link to="/login">Log In Here</Link>
        </p>
      </div>
      <footer>Dev + Design by Hanna Boorom</footer>
    </div>
  );
}
