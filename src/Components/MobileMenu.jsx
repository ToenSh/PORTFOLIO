import React from "react";

export default function (props) {
  return (
    <div className="mobile-menu">
      <div className="close-menu" onClick={props.handleMobileMenu}>
        <div className="bar"></div>
        <div className="bar2"></div>
      </div>
      <nav>
        <ul className="mobile-nav">
          <li>
            <a href="#" onClick={props.handleMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.handleMobileMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.handleMobileMenu}>
              Contact
            </a>
          </li>
          <button className="contact-btn btn-mobile">Contact</button>
        </ul>
      </nav>
    </div>
  );
}
