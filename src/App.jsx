import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Project from './Components/Project';
import MobileMenu from './Components/MobileMenu';
import Footer from './Components/Footer';
import data from './Projects.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  function handleMobileMenu() {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  }

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
      />
    );
  });

  return (
    <>
      <div className="container">
        <Header
          mobileMenu={mobileMenu}
          handleMobileMenu={() => handleMobileMenu()}
        />
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
              These are some of the projects I've built recently.
            </p>
            <div className="projects-container">{projectElements}</div>
          </section>
        </main>
        <Footer />
      </div>
      {mobileMenu && (
        <MobileMenu
          handleMobileMenu={() => handleMobileMenu()}
          mobileMenu={mobileMenu}
        />
      )}
      {mobileMenu && <div className="overlay"></div>}
    </>
  );
}

export default App;
