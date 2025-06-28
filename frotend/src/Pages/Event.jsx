import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Event = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/read_gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch event data:", err);
        setLoading(false);
      });
  }, []);

  const filterByCategory = (category) =>
    galleryItems.filter((item) => item.category === category);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <div style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
        <img
          src="https://cdn.prod.website-files.com/5fd2ba969b6ce08fc68b0904/64f7abc4498b85260aca7c20_cover.webp"
          alt="Event Photography"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "4rem", letterSpacing: "3px", fontWeight: "bold" }}>
            EVENT PHOTOGRAPHY
          </h1>
          <p style={{ fontSize: "1.4rem", marginTop: "10px", fontStyle: "italic" }}>
            Capturing unforgettable moments, one click at a time
          </p>
        </div>
      </div>

      {/* Event Description */}
      <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>
          Why Event Photography Matters
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", color: "#555" }}>
          Whether it’s a wedding, corporate launch, birthday bash, or community gathering, event
          photography captures the essence of the moment, preserving emotions, energy, and
          excitement. Our photographers specialize in telling your story through vibrant, candid,
          and posed shots.
        </p>
      </div>

      {/* Dynamic Event Gallery */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "50px 20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {loading ? (
          <p>Loading event images...</p>
        ) : filterByCategory("Event").length === 0 ? (
          <p>No event photos available.</p>
        ) : (
          filterByCategory("Event").map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "300px",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
              }}
            >
              <img
                src={item.image}
                alt={item.title || `Event ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          ))
        )}
      </div>

      {/* Tips Section */}
      <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="text-dark fw-bold mb-4">Event Photography Tips</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="d-flex align-items-start bg-white p-3 shadow-sm rounded h-100">
              <span className="me-3" style={{ fontSize: "1.5rem", color: "#e74c3c" }}>📸</span>
              <p className="mb-0 text-start text-muted">
                Focus on candid moments for genuine memories.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 mb-4">
            <div className="d-flex align-items-start bg-white p-3 shadow-sm rounded h-100">
              <span className="me-3" style={{ fontSize: "1.5rem", color: "#e74c3c" }}>📸</span>
              <p className="mb-0 text-start text-muted">
                Use ambient lighting creatively during receptions.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 mb-4">
            <div className="d-flex align-items-start bg-white p-3 shadow-sm rounded h-100">
              <span className="me-3" style={{ fontSize: "1.5rem", color: "#e74c3c" }}>📸</span>
              <p className="mb-0 text-start text-muted">
                Capture details: decorations, guest interactions, and atmosphere.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 mb-4">
            <div className="d-flex align-items-start bg-white p-3 shadow-sm rounded h-100">
              <span className="me-3" style={{ fontSize: "1.5rem", color: "#e74c3c" }}>📸</span>
              <p className="mb-0 text-start text-muted">
                Always be ready for the unexpected — that's where the magic lies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* CTA Section */}
      <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#fff5f5" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", color: "#e74c3c", fontWeight: "bold" }}>
          Plan Your Next Event with Us!
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "#555" }}>
          Let us document your special day with style and creativity. Get in touch now!
        </p>
        <Link
          to="/contact"
          style={{
            padding: "14px 36px",
            backgroundColor: "#ff6b6b",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            transition: "background 0.3s ease, transform 0.3s ease",
            boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#e55b5b";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#ff6b6b";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Event;
