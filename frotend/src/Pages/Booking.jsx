import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

// Slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Booking = () => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://photography-studio.onrender.com/api/read_gallery");
        setImages(res.data)
      } catch (err) {
        console.error("Error loading gallery:", err);
      }
    };

    fetchImages();
  }, []);
   // Slick carousel settings
   const sliderSettings = {
    dots:false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    bookingDate: "",
    contact: "",
    category: "",
    message: "",
  });
    
  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, bookingDate, contact, category, message } = form;

    // Basic validation
    if (!name || !email || !contact || !bookingDate || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    // Contact number validation (assuming a 10-digit number)
    if (!/^\d{10}$/.test(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    try {
      // Send data to the backend API
      const response = await axios.post("http://localhost:8000/api/create_booking", {
        name,
        email,
        bookingDate,
        contact,
        category,
        message,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Booking successfully created!");
        setForm({
          name: "",
          email: "",
          bookingDate: "",
          contact: "",
          category: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error creating booking:", error?.response?.data || error.message);
      alert("Failed to create booking. Please try again.");
    }
  };

  // Styles for the container, video, form overlay, etc.
  const containerStyle = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const videoStyle = {
    position: "relative",
    width: "100%",
    height: "110vh",
    objectFit: "cover",
  };

  const formOverlayStyle = {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    zIndex: 2,
  };

  const formContainerStyle = {
    maxWidth: 800,
    padding: 40,
    margin: "0 auto",
    backgroundColor: "transparent",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      {/* Background Video */}
      <video autoPlay muted loop style={videoStyle}>
        <source src="/images/vdo3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Over the Video */}
      <div style={formOverlayStyle}>
        <div className="container" style={formContainerStyle}>
          <h2
            className="text-center mb-4"
            style={{
              fontSize: "2.8rem",
              fontFamily: '"Georgia", serif',
              fontWeight: "bold",
              color: "#ffffff",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            📸 Booking Now
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Booking Date and Category */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="bookingDate" className="form-label">Booking Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="bookingDate"
                  name="bookingDate"
                  value={form.bookingDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
               {/* Contact and Message */}
          
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={form.contact}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  required
                />
             
            </div>
            </div>
            

            <div className="col-md-12">
                <label htmlFor="category" className="form-label">Type of Shoot</label>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Event">Event</option>
                  <option value="Product">Product</option>
                  <option value="Nature">Nature</option>
                </select>
              </div>
          

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message (Optional)</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleInputChange}
                placeholder="Add any extra notes..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Book Now</button>
          </form>
        </div>
      </div>

      {/* Image Gallery */}
       {/* Image Gallery */}
       <h3 className="text-center m-5">📷 Gallery</h3>
      {images.length > 0 ? (
        <Slider {...sliderSettings}>
          {images.map((image,index) => (
            <div key={index}>
              <img
                src={image.image}
                alt={image.description}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading gallery...</p>
      )}
    </div>
  );
    
};

export default Booking;
