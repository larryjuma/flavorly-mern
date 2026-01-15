// src/pages/Reservation.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/reservation.css";
import { API_BASE } from "../config";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong.");
      } else {
        toast.success("Reservation submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: ""
        });
      }
    } catch (error) {
      toast.error("❌ Could not connect to the server.");
    }

    setLoading(false);
  };

  return (
    <div className="reservation-page">
      <h2 className="section-title">Reserve a Table</h2>
      <p className="reservation-intro">
        We’d love to host you! Please fill out the form below to reserve your table.
      </p>

      <div className="reservation-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} min="1" max="20" required />

          <button type="submit" className="primary-cta" disabled={loading}>
            {loading ? "Processing..." : "Reserve Now"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
};

export default Reservation;
