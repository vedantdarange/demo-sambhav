import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/sambhav-logo.png"; // adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Sambhav Logo" />
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-blue" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="nav-orange" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/events" className="nav-blue" onClick={() => setIsOpen(false)}>Events</Link></li>
        <li><Link to="/leaderboard" className="nav-orange" onClick={() => setIsOpen(false)}>Leaderboard</Link></li>
        <li><Link to="/faq" className="nav-blue" onClick={() => setIsOpen(false)}>FAQ</Link></li>
        <li><Link to="/contact" className="nav-orange" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
