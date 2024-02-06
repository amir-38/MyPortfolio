import React from "react";
import "./MobileNav.css";
import CV from "../../../assets/resume.pdf";
import mobileLogo from "../../../assets/logo.png";
const MobileNav = ({ isOpen, toggleMenu }) => {
  const smoothScrollTo = (targetY, duration) => {
    const startingY = window.pageYOffset;
    const diff = targetY - startingY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      window.scrollTo(0, startingY + diff * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 120;

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      smoothScrollTo(sectionTop, 400);
    }
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={mobileLogo} alt="mobile nav logo" />

          <ul>
            <li>
              <a onClick={scrollToSection("home")} className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("skills")} className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("projects")} className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("contact")} className="menu-item">
                Contact
              </a>
            </li>
            <a href={CV} className="download-link" download>
              <button className="contact-btn">Download CV</button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
