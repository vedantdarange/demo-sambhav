import React, { useState } from "react";
import "./Contact.css";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram-new.png";
import linkedin from "../Assets/linkedin-circled--v1.png";
import x from "../Assets/x.png";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={logo} alt="Sambhav Logo" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/" className="nav-blue">HOME</a></li>
          <li><a href="/about" className="nav-orange">ABOUT</a></li>
          <li><a href="/events" className="nav-blue">EVENTS</a></li>
          <li><a href="/leaderboard" className="nav-orange">LEADERBOARD</a></li>
          <li><a href="/faq" className="nav-blue">FAQ</a></li>
          <li><a href="/contact" className="nav-orange">CONTACT</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="contact-page">
        <div className="title-container">
          <h1>Get In Touch</h1>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          {/* Left Section: Map */}
          <div className="map-container">
            <iframe
              className="interactive-map"
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.4301335399616!2d73.75833525715554!3d18.64536930625651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1756995498512!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Section: Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h2>CONTACT US</h2>
              <div className="info-item">D.Y. Patil College of Engineering, Pune</div>
              <div className="info-item">+91 7447819903</div>
              <div className="info-item">sambhavdypcoeoffficial@gmail.com</div>
            </div>
            <div className="contact-button-container">
              <a href="mailto:sambhavdypcoeoffficial@gmail.com" className="contact-button">
                Contact Here
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <img src={logo} alt="Sambhav 3.0 Logo" />
      <p>
        Sambhav'25 is One of the Largest Technical festival of Pune.
        Let's make a Tech move.
      </p>
    </div>
    <div className="footer-right">
      <p>Our Social Media Links</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/sambhav_dypcoe/"><img src={instagram} alt="Instagram" className="social-icon" /></a>
        <a href="https://www.linkedin.com/in/sambhav-tech-fest-464167259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="LinkedIn" className="social-icon" /></a>
        <a href="#"><img src={x} alt="Twitter" className="social-icon" /></a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
