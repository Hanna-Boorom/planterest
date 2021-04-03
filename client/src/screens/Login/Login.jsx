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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
        <img src={logo} alt="logo" />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button>Log In</button>
      </form>
      <p>
        Don't have an account yet? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
}
