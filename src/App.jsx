import { useState } from "react";
import reactLogo from "./assets/react.svg";
import astronaut from "./assets/astronaut 1.png";
import astronaut2 from "./assets/astronaut2.png";
import logo from "./assets/T.png";
import screenshot from "./assets/ss.png";
import gh from "./assets/gh.png";
import "./style.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <nav>
            <div className="ham-icon">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className="desktop-nav">
              <li className="desktop-nav__item">
                <a href="#">Home</a>
              </li>
              <li className="desktop-nav__item">
                <a href="#projects">Projects</a>
              </li>
              <li className="desktop-nav__item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="hero">
            <h1 className="hero-header">Hi, I'm Toen Shehaj</h1>
            <p className="hero-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              illum soluta omnis, voluptates sint neque eveniet nisi sequi.
              Officiis illum soluta omnis, voluptates sint neque eveniet nisi
              sequi.
            </p>
            <div className="hero-tech">
              <span className="hero-tech__header">
                Technologies I'm familiar with:
              </span>
              <ul className="hero-tech__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul className="hero-tech__list">
                <li>ReactJS</li>
                <li>Git/Github</li>
                <li>Figma</li>
              </ul>
            </div>
            <img src={astronaut} alt="main-img" className="hero-img" />
            <img src={astronaut2} alt="main-img" className="desktop-img" />
          </section>

          <div className="scroll">
            <a href="#projects">
              <span></span>Scroll
            </a>
          </div>

          <section className="projects" id="projects">
            <h2 className="projects-header">My Projects</h2>
            <p className="projects-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              malesuada urna.
            </p>
            <div className="projects-container">
              <article className="project">
                <img
                  src={screenshot}
                  alt="screenshot"
                  className="project-img"
                />
                <span className="project-title">Countries Data App</span>
                <div className="project-buttons">
                  <button className="project-btn live-site">Live Site</button>
                  <button className="project-btn code">
                    <img src={gh} alt="github-logo" className="code-github" />
                    Code
                  </button>
                </div>
              </article>
              <article className="project">
                <img
                  src={screenshot}
                  alt="screenshot"
                  className="project-img"
                />
                <span className="project-title">Countries Data App</span>
                <div className="project-buttons">
                  <button className="project-btn live-site">Live Site</button>
                  <button className="project-btn code">
                    <img src={gh} alt="github-logo" className="code-github" />
                    Code
                  </button>
                </div>
              </article>
              <article className="project">
                <img
                  src={screenshot}
                  alt="screenshot"
                  className="project-img"
                />
                <span className="project-title">Countries Data App</span>
                <div className="project-buttons">
                  <button className="project-btn live-site">Live Site</button>
                  <button className="project-btn code">
                    <img src={gh} alt="github-logo" className="code-github" />
                    Code
                  </button>
                </div>
              </article>
            </div>
          </section>
        </main>
        <footer className="contact" id="contact">
          <h2 className="contact-header">Contact Me</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius
            sem ac felis aliquam viverra. Donec ultrices in lectus sed.
          </p>
          <button className="contact-btn">Neon Button</button>
        </footer>
      </div>
    </>
  );
}

export default App;
