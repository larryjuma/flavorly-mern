
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            Welcome to <span className="highlight">Golden Spoon Restaurant</span> —
            where flavor meets passion. We combine fresh ingredients, skilled
            chefs, and warm hospitality to deliver an unforgettable dining
            experience.
          </p>
        </div>

        <div className="hero-img">
                <img src="/images/indoor1.jpeg" alt="Interior 1" />
        </div>
      </section>

      {/* History Section */}
      <section className="about-history">
        <h2>Our Story</h2>
        <p>
          Since opening our doors, we have been dedicated to crafting dishes
          inspired by global flavors while keeping the heart of home-style
          cooking alive. Golden Spoon began as a small kitchen and has grown
          into a culinary destination known for quality, creativity, and a
          welcoming atmosphere.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="value-card">
          <h3>Fresh Ingredients</h3>
          <p>We source the finest local produce to ensure every meal is fresh and flavorful.</p>
        </div>

        <div className="value-card">
          <h3>Skilled Chefs</h3>
          <p>Our chefs are passionate about delivering world-class tastes with every plate.</p>
        </div>

        <div className="value-card">
          <h3>Warm Hospitality</h3>
          <p>Your comfort matters. We create an atmosphere where everyone feels at home.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/chef1.jpeg" alt="Chef" />
            <h4>Chef Michael</h4>
            <p>Head Chef</p>
          </div>

          <div className="team-card">
            <img src="/images/chef2.jpeg" alt="Chef" />
            <h4>Chef Laila</h4>
            <p>Pastry Specialist</p>
          </div>

          <div className="team-card">
            <img src="/images/chef3.jpeg" alt="Chef" />
            <h4>Chef Armand</h4>
            <p>Grill Master</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
