import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Galleries = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch gallery items from the API
    fetch("http://localhost:8000/api/read_gallery")
      .then((response) => response.json())
      .then((data) => {
        setGalleries(data);  // Set the fetched gallery data
        setLoading(false);    // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching gallery items:", error);
        setLoading(false);
      });
  }, []);

  const filterByCategory = (category) => {
    // Filter gallery items by category
    return galleries.filter(item => item.category === category);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Summer Days Section */}
      <div style={{ textAlign: "center", marginBottom: "50px", position: "relative" }}>
        <img
          src="https://www.69dropsstudio.co.uk/wp-content/uploads/2018/05/nature-photography-at-its-best-1200x569.jpeg"
          alt="Summer Days"
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        />
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Nature
        </p>
      </div>

      {/* Nature Gallery Section */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2>Nature Gallery</h2>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              {filterByCategory("Nature").map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            <div style={{ textAlign: "center", marginBottom: "50px", position: "relative" }}>
              <img
                src="https://www.alfaazphotography.com/wp-content/uploads/2019/10/How-to-find-right-Indian-Wedding-Photographer-0028.jpg"
                alt="Wedding"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
          Wedding
              </p>
            </div>
            <h2>Wedding Gallery</h2>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              {filterByCategory("Wedding").map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
{/* /////////////////////////////////////////   Portrait//////////////////// */}
            <div style={{ textAlign: "center", marginBottom: "50px", position: "relative" }}>
              <img
                src="https://i.brecorder.com/images/2016/12/alessio-albi.jpg"
                alt="Portrait"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
              Portrait
              </p>
            </div>
            <h2>Portrait Gallery</h2>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              {filterByCategory("Portrait").map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
{/* /////////////////////////////////////////Event/////////////////////////// */}

            <div style={{ textAlign: "center", marginBottom: "50px", position: "relative" }}>
              <img
                src="https://media.istockphoto.com/id/1321020131/photo/concert-crowd-venue.jpg?s=612x612&w=0&k=20&c=eq4Lo7LsL16-lqyvNc2UVOFgTA2Hb9TqkA5ffACLRYI="
                alt="Event"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
               Event
              </p>
            </div>
            <h2>Event Gallery</h2>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              {filterByCategory("Event").map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

{/* //////////////////////////////////Product ///////////////////////// */}
            <div style={{ textAlign: "center", marginBottom: "50px", position: "relative" }}>
              <img
                src="https://spencercobby.co.uk/wp-content/uploads/2021/09/dslr-camera-3.jpeg"
                alt="Product "
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
               Product 
              </p>
            </div>
            <h2>Product Gallery</h2>
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "10px 0",
                marginBottom: "50px",
              }}
            >
              {filterByCategory("Product").map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    display: "inline-block",
                    marginRight: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
       
          </div>

          {/* Ready to Capture Your Moments Section */}
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Ready to Capture Your Moments?</h2>
            <p style={{ marginBottom: "20px", color: "#555" }}>
              Book a session today and let us create beautiful memories for your family.
            </p>
          </div>

          {/* Centered Booking Button */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              to="/Booking"
              style={{
                backgroundColor: "#ff6347",
                color: "white",
                padding: "14px 28px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "8px",
                display: "inline-block",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e55347")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6347")}
            >
              Booking Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galleries;
