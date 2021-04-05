import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
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
          <img className="landing-image ficus" src={FicusLanding} alt="ficus" />
          <img
            className="landing-image monstera"
            src={MonsteraLanding}
            alt="monstera"
          />
          <img
            className="landing-image pothos"
            src={PothosLanding}
            alt="pothos"
          />
        </div>

        <div className="landing-text">
          <h1 className="welcome">Welcome to Planterest! 🌿 </h1>
          <p className="landing-blurb">
            An image board site for plant-lovers to curate boards with images of
            their favorite flora
          </p>
          <p className="come-on-in">Come on in, the air is fresh in here!</p>
          <div className="landing-buttons">
            <Link to="/register">
              <p>Sign Up to start creating</p>
            </Link>
            <p className="login-cta">Already have an account?</p>
            <Link to="/login">
              <button className="landing-login-button">Log in</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer>
          Dev + Design by Hanna Boorom{" "}
          <a
            rel="noreferrer"
            target="blank"
            href="https://www.linkedin.com/in/hanna-boorom/"
          >
            <FaLinkedin />
          </a>
          <a
            rel="noreferrer"
            target="blank"
            href="https://github.com/Hanna-Boorom"
          >
            <FaGithubSquare />
          </a>
        </footer>
      </div>
    </div>
  );
}
