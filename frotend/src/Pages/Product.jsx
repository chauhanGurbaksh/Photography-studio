import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data (images) from the API
  useEffect(() => {
    fetch("http://localhost:8000/api/read_gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryItems(data); // Store all gallery items
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gallery data:", err);
        setLoading(false);
      });
  }, []);

  // Filter gallery items by category
  const filterByCategory = (category) => {
    return galleryItems.filter((item) => item.category === category);
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#fff", color: "#333" }}>
      {/* Hero Section */}
      <div style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
        <img
          src="https://graphicdesigneye.com/images/best-camera-for-product-photography.jpg" // Replace with a relevant product hero image URL
          alt="Product Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.65)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "20px", letterSpacing: "2px" }}>OUR PRODUCTS</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            Discover our range of high-quality products designed to meet your needs. From electronics to home goods, we've got you covered.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Explore Our Product Gallery</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", color: "#666" }}>
          Browse through our collection of premium products. Whether you're looking for something functional or stylish, we've got a product for every need.
        </p>
      </div>

      {/* Image Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        {loading ? (
          <p>Loading products...</p>
        ) : (
          // Filter and map over product images
          filterByCategory("Product").map((item, index) => (
            <img
              key={index}
              src={item.image} // Assuming the image URL is returned as "image"
              alt={item.title}
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
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Buy Our Products?</h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Browse through our online store to find the perfect product for your needs. We offer fast shipping and secure payment options.
        </p>
        <Link
          to="/contact"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff6b6b",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e55b5b")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff6b6b")}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Product;
