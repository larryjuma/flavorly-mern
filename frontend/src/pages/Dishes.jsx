import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Dishes.css";

const categories = ["breakfast", "lunch", "dinner", "drinks"];

const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true);
        // const { data } = await axios.get("http://localhost:5000/api/menu"); 
        const { data } = await axios.get("http://192.168.100.9:5000/api/menu"); 
        setDishes(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load dishes");
        setLoading(false);
      }
    };
    fetchDishes();
  }, []);

  const filteredDishes = dishes.filter(
    (dish) => dish.category === activeCategory
  );

  if (loading) return <p>Loading dishes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dishes-page">
      <h2 className="section-title">Our Dishes</h2>

      <div className="dish-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "filter active" : "filter"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div className="dish-card" key={dish._id}>
            <img src={`http://192.168.100.9:5000${dish.image}`} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span className="price">{dish.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
