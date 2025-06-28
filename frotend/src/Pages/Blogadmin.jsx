import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogAdmin = () => {
  const [form, setForm] = useState({
    title: '',
    desc: '',
    img: '',
  });

  const [blogItems, setBlogItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/read_blog');
      setBlogItems(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.desc || !form.img) {
      alert('All fields are required!');
      return;
    }

    const blogData = {
      title: form.title,
      desc: form.desc,
      img: form.img,
    };

    try {
      if (form._id) {
        await axios.put(`http://localhost:8000/api/update_blog/${form._id}`, blogData);
      } else {
        await axios.post('http://localhost:8000/api/create_blog', blogData);
      }

      setForm({ title: '', desc: '', img: '' });
      fetchBlogs();
    } catch (error) {
      console.error('Error creating/updating blog post:', error.response?.data || error.message);
      alert('Failed to submit blog. Check console for error details.');
    }
  };

  const handleReset = () => {
    setForm({ title: '', desc: '', img: '' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await axios.delete(`http://localhost:8000/api/delete_blog/${id}`);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog post:', error);
      }
    }
  };

  const openModal = (blog) => setSelectedBlog(blog);
  const closeModal = () => setSelectedBlog(null);

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Blog Management</h2>

      <div className="row">
        {/* Form Section */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              {form._id ? 'Edit Blog Post' : 'Add New Blog Post'}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label text-dark">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog title"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="desc" className="form-label text-dark">Description</label>
                  <textarea
                    className="form-control"
                    id="desc"
                    name="desc"
                    value={form.desc}
                    onChange={handleInputChange}
                    placeholder="Enter description"
                    rows="4"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="img" className="form-label text-dark">Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    id="img"
                    name="img"
                    value={form.img}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                    required
                  />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {form._id && (
                    <button type="button" className="btn btn-secondary me-2" onClick={handleReset}>
                      Cancel
                    </button>
                  )}
                  <button type="submit" className="btn btn-primary">
                    {form._id ? 'Update' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="col-lg-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {isLoading ? (
              <div className="text-center py-5 w-100">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : blogItems.length === 0 ? (
              <div className="alert alert-info w-100">No blog posts found.</div>
            ) : (
              blogItems.map((item) => (
                <div className="col" key={item._id}>
                  <div className="card shadow-sm h-100" style={{ borderRadius: "10px" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.desc ? item.desc.substring(0, 100) + '...' : 'No description available.'}
                      </p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-sm btn-outline-primary" onClick={() => setForm(item)}>Edit</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                        <button className="btn btn-sm btn-outline-info" onClick={() => openModal(item)}>Read Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{
            background: "#fff", padding: "30px", borderRadius: "10px",
            width: "80%", maxWidth: "700px", maxHeight: "90%", overflowY: "auto"
          }}>
            <h2 className='text-dark'>{selectedBlog.title}</h2>
            <img src={selectedBlog.img} alt={selectedBlog.title} style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginBottom: "20px" }} />
            <p className='text-dark' style={{ whiteSpace: "pre-wrap" }}>{selectedBlog.desc}</p>
            <button className="btn btn-danger mt-3" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;
