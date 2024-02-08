import React from "react";
import "./Hero.css";
import ReactLogo from "../../assets/react.webp";
import AvatarLogo from "../../assets/img.jpeg";
import JSLogo from "../../assets/javascript.webp";
import HtmlLogo from "../../assets/html.webp";
import CssLogo from "../../assets/css.webp";
const Hero = ({ id }) => {
  return (
    <>
      <section id={id} className="hero-container">
        <div className="hero-content">
          <h2>Welcome, I'm Amir Sarukhanov</h2>
          <p>
            I'am an innovative web developer dedicated to creating inspiring,
            user-friendly, and intuitively designed digital interfaces that
            enhance user experience.
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src={ReactLogo} alt="react.logo" />
            </div>
            <img src={AvatarLogo} alt=" portrait" />
          </div>

          <div>
            <div className="tech-icon">
              <img src={CssLogo} alt="css.logo" />
            </div>
            <div className="tech-icon">
              <img src={HtmlLogo} alt="html.logo" />
            </div>
            <div className="tech-icon">
              <img src={JSLogo} alt="js.logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
