import React from "react";

export default function () {
  return (
    <div className="mobile-menu">
      <div className="close-menu">
        <div className="bar"></div>
        <div className="bar2"></div>
      </div>
      <nav>
        <ul className="mobile-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="contact-btn btn-mobile">Neon Button</button>
        </ul>
      </nav>
    </div>
  );
}
