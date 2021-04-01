import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>

        <label>
          Email:
          <input type="text" />
        </label>

        <label>
          Password:
          <input type="text" />
        </label>

        <label>
          Confirm Password:
          <input type="text" />
        </label>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
}
