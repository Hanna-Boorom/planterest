import { Link } from "react-router-dom";

export default function Landing(props) {
  return (
    <div>
      <h1>Welcome to Planterest! 🌿 </h1>
      <h3>
        An image board site for plant-lovers to curate boards with images of
        their favorite flora
      </h3>
      <h4>Come on in, the air is fresh in here!</h4>
      <div>
        <p>Sign Up to start creating</p>
      </div>
      <div>
        <p>Already have an account?</p>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
    </div>
  );
}
