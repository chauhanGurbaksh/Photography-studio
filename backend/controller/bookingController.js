const Booking = require("../models/bookingModel");

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, contact, bookingDate, category, message } = req.body;

    // Validation
    if (!name || !email || !contact || !bookingDate || !category) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // Create new booking
    const booking = new Booking({
      name,
      email,
      contact,
      bookingDate,
      category,
      message
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully!', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ bookingDate: 1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update booking by ID
exports.updateBooking = async (req, res) => {
  try {
    const { name, email, contact, bookingDate, category, message } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, email, contact, bookingDate, category, message },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

