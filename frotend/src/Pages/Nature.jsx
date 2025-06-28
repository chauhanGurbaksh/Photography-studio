 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Nature = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [natureImages, setNatureImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data and filter by category "Nature"
  useEffect(() => {
    fetch("https://photography-studio.onrender.com/api/read_gallery")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "Nature");
        setNatureImages(filtered);
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
            src="https://images.newscientist.com/wp-content/uploads/2023/02/07104439/SEI_142739270.jpg"
            alt="Photography Studio"
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
            Nature Photography
          </h1>
        </div>

        {/* Description Section */}
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 30, marginBottom: 20 }}>
            Capturing the beauty of the wild...
          </h2>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 800, margin: '0 auto' }}>
            Nature photography is all about capturing the essence of the environment—from lush forests and snowy peaks to
            desert sunsets and peaceful lakes. It’s where the soul meets serenity, and every picture tells a silent yet powerful story.
          </p>
        </div>

        {/* Dynamic Nature Image Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}>
          {loading ? (
            <p>Loading images...</p>
          ) : natureImages.length === 0 ? (
            <p>No Nature category images found.</p>
          ) : (
            natureImages.map((item, index) => (
              <img
                key={index}
                src={item.image} // Update if your API returns a different key like "url"
                alt={item.title || `Nature ${index}`}
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
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Capture Your Moments?</h2>
          <p style={{ marginBottom: "20px", color: "#555" }}>
            Book a session today and let us create beautiful memories for your family.
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

export default Nature;
