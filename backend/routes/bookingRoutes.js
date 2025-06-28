const express = require('express');
const bookingRouter = express.Router();
const bookingController = require("../controller/bookingController")

// Create
bookingRouter.post('/create_booking', bookingController.createBooking);

// Read
bookingRouter.get('/show_booking', bookingController.getAllBookings);


// Update
bookingRouter.put('/update_booking/:id', bookingController.updateBooking);

// Delete
bookingRouter.delete('/delete_booking/:id', bookingController.deleteBooking);

module.exports = bookingRouter;
