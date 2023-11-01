import React from 'react';
import { Link } from 'react-scroll';
import astronaut from '../assets/astronaut 1.png';
import astronaut2 from '../assets/astronaut2.png';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-header" data-aos="fade-right" data-aos-delay="1500">
        Hi, I'm Toen Shehaj
      </h1>
      <p className="hero-description" data-aos="fade" data-aos-delay="2000">
        My journey into the world of coding began with a curiosity to create and
        design for the web. I am committed to mastering the latest web
        technologies and crafting exceptional online experiences. I primarly
        focus on the frontend but recently I've been trying to expand my
        knowledge and skills by diving more into backend technologies such as
        NodeJS/Express, and Prisma.
      </p>
      <div className="hero-tech">
        <span
          className="hero-tech__header"
          data-aos="fade"
          data-aos-delay="2300"
        >
          Technologies I'm familiar with:
        </span>
        <ul className="hero-tech__list" data-aos="fade" data-aos-delay="2500">
          <li>HTML</li>
          <li>CSS(Tailwind)</li>
          <li>TypeScript</li>
        </ul>
        <ul className="hero-tech__list" data-aos="fade" data-aos-delay="2500">
          <li>ReactJS</li>
          <li>Git/Github</li>
          <li>Figma</li>
        </ul>
      </div>
      <img
        src={astronaut}
        alt="main-img"
        className="hero-img"
        data-aos="fade"
        data-aos-delay="1750"
      />
      <img
        src={astronaut2}
        alt="main-img"
        className="desktop-img"
        data-aos="fade-left"
        data-aos-delay="1750"
      />
      <div
        className="scroll"
        data-aos="fade-up"
        data-aos-delay="2650"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1200}
        >
          <span></span>Scroll
        </Link>
      </div>
    </section>
  );
}
