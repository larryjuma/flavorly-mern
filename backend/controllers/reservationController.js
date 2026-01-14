const Reservation = require('../models/Reservation');

// Create reservation (POST /api/reservations)
const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, notes } = req.body;

    // Basic validation
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const reservation = await Reservation.create({
      name, email, phone, date, time, guests, notes
    });

    return res.status(201).json({ message: 'Reservation created', reservation });
  } catch (err) {
    console.error('Reservation create error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all reservations (GET /api/reservations)
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    return res.json(reservations);
  } catch (err) {
    console.error('Get reservations error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get single reservation (GET /api/reservations/:id)
const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    return res.json(reservation);
  } catch (err) {
    console.error('Get reservation error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update reservation (PUT /api/reservations/:id) - e.g. change status
const updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Reservation not found' });
    return res.json({ message: 'Reservation updated', reservation: updated });
  } catch (err) {
    console.error('Update reservation error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete reservation (DELETE /api/reservations/:id)
const deleteReservation = async (req, res) => {
  try {
    const removed = await Reservation.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Reservation not found' });
    return res.json({ message: 'Reservation deleted' });
  } catch (err) {
    console.error('Delete reservation error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation
};
