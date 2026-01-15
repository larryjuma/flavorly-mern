// src/pages/Home.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import "../styles/global.css";


function Home({ onNavigate }) {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  // Newsletter submit handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterMessage("");
    setNewsletterError("");

    try {
      const res = await axios.post("http://192.168.100.9:5000/api/newsletter", {
        email: newsletterEmail
      });
      setNewsletterMessage(res.data.message || "Subscribed successfully!");
      setNewsletterEmail("");
    } catch (err) {
      setNewsletterError(err.response?.data?.message || "Server error, try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true
    });

    // Auto-slider for each slider
    document.querySelectorAll("[data-slider]").forEach((slider) => {
      const slides = slider.querySelector(".slides");
      const images = slides.querySelectorAll("img");
      const prev = slider.querySelector("[data-prev]");
      const next = slider.querySelector("[data-next]");

      let index = 0;
      let interval = setInterval(nextSlide, 4000);

      function showSlide(i) {
        index = (i + images.length) % images.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
      }

      function nextSlide() {
        showSlide(index + 1);
      }
      function prevSlide() {
        showSlide(index - 1);
      }

      next.addEventListener("click", () => {
        nextSlide();
        resetInterval();
      });

      prev.addEventListener("click", () => {
        prevSlide();
        resetInterval();
      });

      function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
      }
    });
  }, []);

  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero" data-aos="fade-down">
        <h1 className="hero-title fade-in">Welcome to Flavorly</h1>
        <p className="hero-subtitle">
          Discover mouth-watering dishes made with love and the freshest ingredients.
        </p>
        <button className="primary-cta" onClick={() => onNavigate("Dishes")}>
          Explore Menu
        </button>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature" data-aos="fade-up" data-aos-delay="100">
          <span className="feature-icon">🍽️</span>
          <div className="feature-text">
            <h3>Fresh Dishes</h3>
            <p>Crafted with locally-sourced ingredients for authentic flavors.</p>
          </div>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="200">
          <span className="feature-icon">📅</span>
          <div className="feature-text">
            <h3>Easy Reservations</h3>
            <p>Book your table in just a few clicks and skip the waiting line.</p>
          </div>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="300">
          <span className="feature-icon">❤️</span>
          <div className="feature-text">
            <h3>Cozy Ambience</h3>
            <p>A warm space perfect for family dinners and friendly meetups.</p>
          </div>
        </div>
      </div>

      {/* Signature Dishes */}
      <div className="signature-dishes" data-aos="fade-up">
        <h2 className="section-title">Our Signature Dishes</h2>
        <div className="dish-grid">
          <div className="dish-card" data-aos="zoom-in">
            <img src="/images/Classic Italian Pasta.jfif" alt="Pasta" />
            <h3>Classic Italian Pasta</h3>
            <p>Rich, creamy, and served with fresh herbs.</p>
          </div>
          <div className="dish-card" data-aos="zoom-in" data-aos-delay="100">
            <img src="/images/grilled steak.jfif" alt="Steak" />
            <h3>Grilled Steak</h3>
            <p>Perfectly seared with a smoky flavor.</p>
          </div>
          <div className="dish-card" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/Chocolate Delight.jfif" alt="Dessert" />
            <h3>Chocolate Delight</h3>
            <p>Decadent dessert to finish your meal.</p>
          </div>
        </div>
      </div>

      {/* Chef's Special */}
      <section className="chefs-special" data-aos="fade-up">
        <h2 className="section-title">Chef's Special</h2>
        <div className="special-grid">
          <div className="special-card" data-aos="flip-left">
            <img src="/images/Truffle Pasta.jfif" alt="Chef Special 1" />
            <h3>Truffle Pasta</h3>
            <p>Creamy pasta infused with truffle oil and topped with fresh herbs.</p>
          </div>
          <div className="special-card" data-aos="flip-left" data-aos-delay="100">
            <img src="/images/Seafood Delight.jfif" alt="Chef Special 2" />
            <h3>Seafood Delight</h3>
            <p>A rich mix of prawns, calamari, and salmon served with lemon butter sauce.</p>
          </div>
          <div className="special-card" data-aos="flip-left" data-aos-delay="200">
            <img src="/images/Signature Steak.jfif" alt="Chef Special 3" />
            <h3>Signature Steak</h3>
            <p>Perfectly grilled beef steak with house-made garlic herb butter.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="testimonials" data-aos="fade-up">
        <h2 className="section-title">What Our Guests Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card" data-aos="fade-right">
            <p>“Flavorly has the best pasta I’ve ever had! Cozy atmosphere too.”</p>
            <span>- Sarah M.</span>
          </div>
          <div className="testimonial-card" data-aos="fade-right" data-aos-delay="100">
            <p>“The staff are super friendly and the steak is a must-try!”</p>
            <span>- James K.</span>
          </div>
          <div className="testimonial-card" data-aos="fade-right" data-aos-delay="200">
            <p>“Perfect place for a date night. Will come back again.”</p>
            <span>- Amina L.</span>
          </div>
        </div>
      </div>

      {/* Gallery / Our Spaces */}
      <div className="spaces" data-aos="fade-up">
        <h2 className="section-title">A Peek Inside</h2>
        <div className="spaces-grid">
          {/* Interior */}
          <div className="space-card" data-aos="zoom-in">
            <h3>Interior</h3>
            <div className="slider" data-slider>
              <div className="slides">
                <img src="/images/indoor1.jpeg" alt="Interior 1" />
                <img src="/images/indoor2.webp" alt="Interior 2" />
                <img src="/images/indoor3.webp" alt="Interior 3" />
              </div>
              <button className="prev" data-prev>&#10094;</button>
              <button className="next" data-next>&#10095;</button>
            </div>
          </div>

          {/* Bar */}
          <div className="space-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Bar</h3>
            <div className="slider" data-slider>
              <div className="slides">
                <img src="/images/bar1.jpeg" alt="Bar 1" />
                <img src="/images/bar2.jpeg" alt="Bar 2" />
                <img src="/images/bar3.jpeg" alt="Bar 3" />
              </div>
              <button className="prev" data-prev>&#10094;</button>
              <button className="next" data-next>&#10095;</button>
            </div>
          </div>

          {/* Outdoor */}
          <div className="space-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Outdoor</h3>
            <div className="slider" data-slider>
              <div className="slides">
                <img src="/images/outdoor1.jpeg" alt="Outdoor 1" />
                <img src="/images/outdoor2.webp" alt="Outdoor 2" />
                <img src="/images/outdoor3.jpeg" alt="Outdoor 3" />
              </div>
              <button className="prev" data-prev>&#10094;</button>
              <button className="next" data-next>&#10095;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation CTA */}
      <div className="reservation-cta" data-aos="fade-up">
        <h2>Reserve Your Table Today</h2>
        <button className="primary-cta" onClick={() => onNavigate("Reservation")}>
          Reserve Now
        </button>
      </div>

      {/* About Section */}
      <div className="about-mini" data-aos="fade-up">
        <h2 className="section-title">About Flavorly</h2>
        <p>
          At Flavorly, we believe in creating memorable dining experiences by
          combining taste, comfort, and passion. Every dish tells a story.
        </p>
      </div>

      {/* Newsletter */}
      <div className="newsletter" data-aos="fade-up">
        <h2 className="section-title">Stay Updated</h2>
        <p>Join our mailing list for exclusive offers and events.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit" className="primary-cta" disabled={newsletterLoading}>
            {newsletterLoading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
        {newsletterMessage && <p className="form-success">{newsletterMessage}</p>}
        {newsletterError && <p className="form-error">{newsletterError}</p>}
      </div>

      {/* Location */}
      <div className="location" data-aos="fade-up">
        <h2 className="section-title">Visit Us</h2>
        <p>123 Flavor Street, Nairobi, Kenya</p>
        <p>Mon - Sun: 10:00 AM - 11:00 PM</p>
      </div>
    </section>
  );
}

export default Home;
