// routes/blogRoutes.js
const express = require('express');
const blogrouter = express.Router();
const blogController = require("../controller/blogController")

// GET /api/blogs - all blogs
blogrouter.get('/read_blog', blogController.getBlogs);

// POST /api/blogs - create new blog
blogrouter.post('/create_blog', blogController.createBlog);

// PUT /api/blogs/:id - update blog
blogrouter.put('/update_blog/:id', blogController.updateBlog);

// DELETE /api/blogs/:id - delete blog
blogrouter.delete('/delete_blog/:id', blogController.deleteBlog);

module.exports = blogrouter;
