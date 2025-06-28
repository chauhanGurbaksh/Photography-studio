import React, { useEffect, useState } from "react";
import './Navbar.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blog posts from the backend API when the component is mounted
  useEffect(() => {
    fetch("http://localhost:8000/api/read_blog")
      .then((res) => res.json())  // Parsing the JSON response
      .then((data) => {
        setBlogs(data);  // Set the fetched data to blogs state
      })
      .catch((err) => console.error("Error fetching blogs:", err));  // Handling errors
  }, []);  // Empty dependency array to run only once when the component mounts

  // Open the modal to display the full blog content
  const openModal = (blog) => setSelectedBlog(blog);

  // Close the modal
  const closeModal = () => setSelectedBlog(null);

  return (
    <>
      {/* Hero Section */}
      <div className="image-container" style={{ position: 'relative' }}>
        <img
          src="https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2015/07/Stokksnes1.jpg/w=960"
          alt="Photography Studio"
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0,0,0,0.6)", color: "#fff",
          padding: "40px 60px", borderRadius: "10px", textAlign: "center"
        }}>
          <h1 style={{ fontSize: "3rem" }}>Capture Your Best Moments</h1>
          <p style={{ fontSize: "1.2rem" }}>Explore our photography insights, tips, and inspiration.</p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-post container" style={{ padding: "60px 30px" }}>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((post, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm h-100" style={{ borderRadius: "10px" }}>
                  <img
                    src={post.img}  // Accessing the 'img' field instead of 'image'
                    alt={post.title}
                    className="card-img-top"
                    style={{ height: 200, objectFit: 'cover', borderRadius: "10px 10px 0 0" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                      {post.desc ? post.desc.substring(0, 100) + '...' : 'No description available.'} {/* Access 'desc' instead of 'description' */}
                    </p>
                    <button className="btn btn-outline-dark" onClick={() => openModal(post)}>Read More</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blog posts available at the moment.</p>
          )}
        </div>
      </section>

      {/* Modal to display full content of the blog post */}
      {selectedBlog && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{
            background: "#fff", padding: "30px", borderRadius: "10px",
            width: "80%", maxHeight: "90%", overflowY: "auto"
          }}>
            <h2>{selectedBlog.title}</h2>
            <img src={selectedBlog.img} alt={selectedBlog.title} style={{ width: "100%", maxHeight: 300, objectFit: "cover", marginBottom: "20px" }} />
            <p style={{ whiteSpace: "pre-wrap" }}>{selectedBlog.desc}</p> {/* Access 'desc' instead of 'description' */}
            <button className="btn btn-danger mt-3" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
