import React from "react";
import gh from "../assets/gh.png";
import { motion } from "framer-motion";

export default function Project(props) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={`${props.delay}`}
      className="project"
    >
      <img src={props.img} alt="screenshot" className="project-img" />
      <span className="project-title">{props.name}</span>
      <div className="project-buttons">
        <a whileHover={{ scale: 1.05 }} href={props.liveSite} target="_blank">
          <button className="project-btn live-site">Live Site</button>
        </a>
        <a href={props.code} target="_blank">
          <button className="project-btn code">
            <img src={gh} alt="github-logo" className="code-github" />
            Code
          </button>
        </a>
      </div>
    </article>
  );
}
