import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import MobileMenu from "./Components/MobileMenu";
import Footer from "./Components/Footer";
import data from "./Projects.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, mirror: false, once: true });
  }, []);

  const projectElements = data.map((project) => {
    return (
      <Project
        key={project.id}
        id={project.id}
        name={project.name}
        img={project.image}
        liveSite={project.liveSite}
        code={project.code}
        delay={project.delay}
      />
    );
  });

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Hero />
          <section className="projects" id="projects">
            <h2 className="projects-header" data-aos="fade">
              My Projects
            </h2>
            <p
              className="projects-description"
              data-aos="fade"
              data-aos-delay="250"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              malesuada urna.
            </p>
            <div className="projects-container">{projectElements}</div>
          </section>
        </main>
        <Footer />
      </div>
      <MobileMenu />
    </>
  );
}

export default App;
