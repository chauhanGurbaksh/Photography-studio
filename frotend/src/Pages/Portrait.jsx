import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portrait = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [portraitImages, setPortraitImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data and filter by category "Portrait"
  useEffect(() => {
    fetch("http://localhost:8000/api/read_gallery")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "Portrait");
        setPortraitImages(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gallery:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Top Banner Image */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img
          style={{ height: 500, width: '100%', objectFit: 'cover' }}
          src="https://img.freepik.com/premium-photo/woman-field-flowers-with-her-mouth-open-her-mouth-is-covered-by-flowers_1086760-151399.jpg"
          alt="Portrait Photography"
        />
        <h1 style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: 60,
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px 30px',
          borderRadius: 10,
          fontFamily: '"Segoe UI", sans-serif'
        }}>
          Portrait Photography
        </h1>
      </div>

      {/* Description Section */}
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 30, marginBottom: 20 }}>
          Timeless expressions, captured perfectly...
        </h2>
        <p style={{ fontSize: 18, color: '#555', maxWidth: 800, margin: '0 auto' }}>
          Portrait photography is all about capturing the soul behind the face. Whether it’s an artistic headshot,
          a candid moment, or a powerful studio portrait — each image speaks volumes about personality, mood, and emotion.
        </p>
      </div>

      {/* Portrait Image Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
      }}>
        {loading ? (
          <p>Loading portraits...</p>
        ) : portraitImages.length === 0 ? (
          <p>No Portrait category images found.</p>
        ) : (
          portraitImages.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title || `Portrait ${index}`}
              style={{
                height: 250,
                width: 250,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          ))
        )}
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Book Your Portrait Session</h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Let us capture your true essence. Whether professional or personal — your portrait deserves to shine.
        </p>
      </div>

      {/* Booking Button */}
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
        <Link
          to="/Booking"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? '#c0392b' : '#e74c3c',
            color: '#fff',
            fontSize: '14px',
            padding: '10px 20px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            transition: '0.3s',
            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            display: 'inline-block',
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Portrait;
