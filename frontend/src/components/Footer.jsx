// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand / Logo */}
        <div className="footer-brand">
          <h2>Flavorly</h2>
          <p>Serving happiness, one dish at a time.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => onNavigate("Home")}>Home</li>
            <li onClick={() => onNavigate("Reservation")}>Reservations</li>
            <li onClick={() => onNavigate("Dishes")}>Dishes</li>
            <li onClick={() => onNavigate("About Us")}>About Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@flavorly.com</p>
          <p>Phone: +254 700 123 456</p>

          {/* Social Links */}
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
                <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Flavorly. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
