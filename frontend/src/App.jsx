// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dishes from "./pages/Dishes";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home onNavigate={setActivePage} />;
      case "Dishes":
        return <Dishes />;
      case "About Us":
        return <AboutUs />;
      case "Contact":
        return <Contact />;
      case "Reservation":
        return <Reservation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar
        active={activePage}
        onNavigate={setActivePage}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <main className="main-content fade-in">{renderPage()}</main>

      {/* Footer always at the bottom */}
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
