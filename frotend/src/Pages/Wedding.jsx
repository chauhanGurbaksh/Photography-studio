import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Wedding = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [weddingImages, setWeddingImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data and filter by category "Wedding"
  useEffect(() => {
    fetch("http://localhost:8000/api/read_gallery")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "Wedding");
        setWeddingImages(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gallery:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {/* Top Banner Image */}
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            style={{ height: 500, width: '100%', objectFit: 'cover' }}
            src="https://afar.brightspotcdn.com/dims4/default/b9e88ec/2147483647/strip/false/crop/2000x1333+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F60%2F20%2F7e3b7d7ca7556c4f05a94b7e8321%2Foriginal-indian-wedding-ritual-henna.jpg"
            alt="Wedding Ritual"
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
            Wedding Photography
          </h1>
        </div>

        {/* Description Section */}
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 30, marginBottom: 20 }}>
            Moments That Last a Lifetime
          </h2>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 800, margin: '0 auto' }}>
            Every wedding is a story waiting to be told. We specialize in capturing the joy, tears, laughter, and everything in between with elegance and emotion. From the first look to the last dance, let us help you cherish every unforgettable moment.
          </p>
        </div>

        {/* Dynamic Wedding Image Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}>
          {loading ? (
            <p>Loading images...</p>
          ) : weddingImages.length === 0 ? (
            <p>No Wedding category images found.</p>
          ) : (
            weddingImages.map((item, index) => (
              <img
                key={index}
                src={item.image} // Assuming the image URL is returned as "image"
                alt={item.title || `Wedding ${index}`}
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
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Capture Your Forever Moments?</h2>
          <p style={{ marginBottom: "20px", color: "#555" }}>
            Whether you're planning an intimate celebration or a grand wedding, our team is here to freeze every magical second for you. Let us make your day unforgettable. Reach out now and let the story begin.
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
    </>
  );
};

export default Wedding;
