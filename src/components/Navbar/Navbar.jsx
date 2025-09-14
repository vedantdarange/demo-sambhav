import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// ✅ VERY IMPORTANT: Make sure this path is correct for your folder structure.
// This is the most common source of errors.
import logo from "../Assets/sambhav-logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // This function closes the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Sambhav Logo" />
      </Link>

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
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
        <li><Link to="/leaderboard" onClick={closeMenu}>Leaderboard</Link></li>
        <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}