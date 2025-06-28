import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingAdmin = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editBooking, setEditBooking] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const categories = ['Wedding', 'Portrait', 'Event', 'Product', 'Nature'];

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/show_booking');
      setBookings(res.data);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage('Failed to fetch bookings.');
      setIsLoading(false);
    }
  };

  const handleEditClick = (booking) => {
    setEditBooking(booking);
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBooking({ ...editBooking, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/api/update_booking/${editBooking._id}`, editBooking);
      setSuccessMessage('Booking updated successfully!');
      setShowModal(false);
      fetchBookings();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage('Error updating booking.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`http://localhost:8000/api/delete_booking/${id}`);
        setSuccessMessage('Booking deleted!');
        fetchBookings();
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        setErrorMessage('Error deleting booking.');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  const filteredBookings = bookings.filter((b) =>
    filterCategory ? b.category?.toLowerCase() === filterCategory.toLowerCase() : true
  );

  return (
    <div className="container ">
      <h2 className="text-center text-primary mb-4">Booking Management</h2>

      {successMessage && (
        <div className="alert alert-success d-flex justify-content-between align-items-center my-3">
          {successMessage}
          <button className="btn-close" onClick={() => setSuccessMessage('')}></button>
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger d-flex justify-content-between align-items-center my-3">
          {errorMessage}
          <button className="btn-close" onClick={() => setErrorMessage('')}></button>
        </div>
      )}

      <div className="card mb-4">
        <div className="card-body">
          <label className="form-label fw-bold">Filter by Category</label>
          <div className="d-flex gap-3">
            <select
              className="form-select w-50"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button className="btn btn-secondary" onClick={() => setFilterCategory('')}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Category</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.contact}</td>
                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>{booking.category}</td>
                <td className="text-start">{booking.message}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(booking)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(booking._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && editBooking && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Booking</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={editBooking.name}
                    onChange={handleEditChange}
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={editBooking.email}
                    onChange={handleEditChange}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    value={editBooking.contact}
                    onChange={handleEditChange}
                    placeholder="Contact"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="bookingDate"
                    value={editBooking.bookingDate?.slice(0, 10)}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="category"
                    value={editBooking.category}
                    onChange={handleEditChange}
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    value={editBooking.message}
                    onChange={handleEditChange}
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={handleUpdate}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingAdmin;
