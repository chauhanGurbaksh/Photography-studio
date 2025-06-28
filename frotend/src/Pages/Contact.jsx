import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "8px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://photography-studio.onrender.com/api/contacts_create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        console.error("Server Error:", result);
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
        <img
          src="https://aaftonline.com/blog/wp-content/uploads/2024/01/What-are-the-Benefits-of-Photography-Complete-Overview.png"
          alt="Photography Studio"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(50%)'
          }}
        />
        <h1 style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '4rem',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          Contact Us
        </h1>
      </div>

      {/* Form */}
      <div style={{ padding: '40px 20px', maxWidth: '900px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Get in Touch</h2>

        <form onSubmit={handleSubmit} style={{ backgroundColor: 'whitesmoke', padding: '30px', borderRadius: '10px', marginTop: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: '600' }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={inputStyle}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: '600' }}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              style={inputStyle}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: '600' }}>Subject</label>
            <input
              type="text"
              placeholder="Enter your subject"
              style={inputStyle}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: '600' }}>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              style={inputStyle}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}>
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div style={{ marginTop: '40px' }}>
          <h3>Contact Details</h3>
          <p><strong>Address:</strong> 40 Park Ave, Brooklyn, NY, USA</p>
          <p><strong>Phone:</strong> +1 800 111 222</p>
          <p><strong>Email:</strong> gurbakshchauhan@123gmail.com</p>
        </div>

        {/* Google Map */}
        <div style={{ marginTop: '30px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54191.86841935498!2d75.55856823324058!3d31.90682081104169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smukerian%20photographer%20shop!5e0!3m2!1sen!2sin!4v1742963366612!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Book Now Button */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <Link
            to='/Booking'
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '14px 28px',
              fontSize: '18px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
