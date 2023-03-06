import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/T.png";

export default function Header() {
  return (
    <header className="header" data-aos="fade-up">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <div className="ham-icon">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="desktop-nav">
          <li className="desktop-nav__item">
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="desktop-nav__item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1200}
            >
              Projects
            </Link>
          </li>
          <li className="desktop-nav__item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1200}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
