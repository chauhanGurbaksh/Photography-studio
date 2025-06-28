// controllers/blogController.js
const Blog = require("../models/blogModel")

// @desc    Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// @desc    Create a new blog post
exports.createBlog = async (req, res) => {
  const { title, desc, img } = req.body;

  try {
    const newBlog = new Blog({ title, desc, img });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update a blog post
exports.updateBlog = async (req, res) => {
  const { title, desc, img } = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, desc, img },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
