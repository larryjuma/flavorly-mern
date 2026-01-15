// src/components/Navbar.jsx
import React, { useEffect } from "react";
import "../styles/navbar.css";

function Navbar({ active, onNavigate, isMenuOpen, toggleMenu }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const pages = ["Home", "Dishes", "About Us", "Contact", "Reservation"];

  const handleNavClick = (page) => {
    onNavigate(page);
    if (window.innerWidth < 768) toggleMenu();
  };

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        className="flavorly-hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={!!isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`flavorly-sidebar ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen && window.innerWidth < 768}
      >
        <div className="flavorly-logo">🍴 Flavorly</div>

        <nav aria-label="Main navigation">
          <ul className="flavorly-nav-links">
            {pages.map((page, idx) => (
              <li
                key={page}
                role="button"
                tabIndex={0}
                onClick={() => handleNavClick(page)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? handleNavClick(page) : null
                }
                className={`flavorly-nav-link ${
                  active === page ? "active" : ""
                }`}
                style={{ ["--i"]: idx }}
              >
                {page}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      <div
        className={`flavorly-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      />
    </>
  );
}

export default Navbar;
