import React from 'react';

export default function Footer() {
  return (
    <footer className="contact" id="contact">
      <h2 className="contact-header" data-aos="fade">
        Contact Me
      </h2>
      <p className="contact-description" data-aos="fade" data-aos-delay="150">
        Ready to contribute to your team and tackle exciting web development
        projects. Let's connect and discuss opportunities.
      </p>
      <a href="mailto:tonishehaj12@gmail.com">
        <button className="contact-btn" data-aos="fade" data-aos-delay="200">
          Send me an email
        </button>
      </a>
    </footer>
  );
}
