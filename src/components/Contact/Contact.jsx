import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ ADDED for footer links
import "./Contact.css";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram-new.png";
import linkedin from "../Assets/linkedin-circled--v1.png";
import x from "../Assets/x.png";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // This is a hardcoded navbar. For consistency, you should use the
  // <Navbar /> component from your Layout.jsx in the future.
  const HardcodedNavbar = () => (
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
  );


  return (
    <div className="contact-wrapper">
      <HardcodedNavbar />

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121423315029!2d73.75638307421831!3d18.657936264969376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1726235456951!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Section: Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h2>CONTACT US</h2>
              <div className="info-item">D.Y. Patil College of Engineering, Akurdi, Pune</div>
              <div className="info-item">+91 7447819903</div>
              <div className="info-item">+91 6376953742</div>
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

      {/* ✅ ENTIRELY NEW FOOTER STRUCTURE */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-column">
            <img src={logo} alt="Sambhav Logo" className="footer-logo" />
            <p className="footer-tagline">
              Sambhav'25 is one of the largest technical festivals in Pune. Let's make a tech move.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="footer-column">
            <h4 className="footer-heading">Connect</h4>
            <p>sambhavdypcoeoffficial@gmail.com</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/sambhav_dypcoe/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sambhav-tech-fest-464167259" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X/Twitter" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Sambhav Tech Fest. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
