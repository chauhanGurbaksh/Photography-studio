import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryAdmin = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
  });
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/read_gallery');
        setGalleryItems(response.data);

        const categories = [...new Set(response.data.map(item => item.category))];
        setAvailableCategories(categories);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, description, image, category } = form;

      const galleryData = { title, description, image, category };

      if (form._id) {
        await axios.put(`http://localhost:8000/api/update_gallery/${form._id}`, galleryData);
      } else {
        await axios.post('http://localhost:8000/api/create_gallery', galleryData);
      }

      setForm({ title: '', description: '', image: '', category: '' });
      const res = await axios.get('http://localhost:8000/api/read_gallery');
      setGalleryItems(res.data);

      const categories = [...new Set(res.data.map(item => item.category))];
      setAvailableCategories(categories);
    } catch (error) {
      console.error('Error creating/updating gallery item:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);
  };

  const filteredGalleryItems = filteredCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filteredCategory);

  const handleReset = () => {
    setForm({ title: '', description: '', image: '', category: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Gallery Management</h2>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              {form._id ? 'Edit Gallery Item' : 'Add New Gallery Item'}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label  text-dark">Title</label>
                  <input
                  placeholder='Enter Titel'
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label text-dark">Description</label>
                  <textarea
                   placeholder='Enter Description'
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label text-dark">Image URL</label>
                  <input
                    type="url"
                    placeholder='Enter Image Url'
                    className="form-control"
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Select Category</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Choose Category --</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Portrait">Portrait</option>

                    <option value="Event">Event</option>

                    <option value="Product">Product</option>

                    <option value="Nature">Nature</option>

                    
                  </select>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {form._id && (
                    <button type="button" className="btn btn-secondary me-md-2" onClick={handleReset}>
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

          <div className="card shadow-sm mt-4">
            <div className="card-header bg-info text-white">Filter Gallery</div>
            <div className="card-body">
              <select
                className="form-select"
                value={filteredCategory}
                onChange={handleFilterChange}
              >
                <option value="all">All Categories</option>
                {availableCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : filteredGalleryItems.length === 0 ? (
              <div className="alert alert-info">No items found in this category.</div>
            ) : (
              filteredGalleryItems.map((item) => (
                <div className="col" key={item._id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted small">{item.description}</p>
                      <span className="badge bg-primary mb-2">{item.category}</span>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => setForm({ ...item })}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={async () => {
                            if (window.confirm('Are you sure you want to delete this item?')) {
                              try {
                                await axios.delete(`http://localhost:8000/api/delete_gallery/${item._id}`);
                                setGalleryItems(galleryItems.filter((g) => g._id !== item._id));

                                const categories = [...new Set(
                                  galleryItems
                                    .filter(g => g._id !== item._id)
                                    .map(item => item.category)
                                )];
                                setAvailableCategories(categories);
                              } catch (error) {
                                console.error('Error deleting item:', error);
                              }
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAdmin;
