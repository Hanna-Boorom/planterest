import { Link } from "react-router-dom";
import "./Landing.css";
import FicusLanding from "../../assets/FicusLanding.jpeg";
import MonsteraLanding from "../../assets/MonsteraLanding.jpeg";
import PothosLanding from "../../assets/PothosLanding.jpeg";

export default function Landing(props) {
  const { logo } = props;
  return (
    <div className="landing-container">
      <div className="landing-logo-container">
        <img className="landing-logo" src={logo} alt="logo" />
      </div>

      <div className="landing-images-container">
        <div className="landing-images">
          <img className="landing-image" src={FicusLanding} alt="ficus" />
          <img className="landing-image" src={MonsteraLanding} alt="monstera" />
          <img className="landing-image" src={PothosLanding} alt="pothos" />
        </div>

        <div className="landing-text">
          <h1>Welcome to Planterest! 🌿 </h1>
          <h3>
            An image board site for plant-lovers to curate boards with images of
            their favorite flora
          </h3>
          <h4>Come on in, the air is fresh in here!</h4>
          <div className="landing-buttons">
            <Link to="/register">
              <p>Sign Up to start creating</p>
            </Link>
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="landing-login-button">Log in</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer>Dev + Design by Hanna Boorom</footer>
      </div>
    </div>
  );
}
