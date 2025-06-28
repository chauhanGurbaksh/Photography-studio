const express = require('express');
const Galleryrouter = express.Router();
const {
  createGalleryItem,
  getAllGalleryItems,

  updateGalleryItem,
  deleteGalleryItem
} = require('../controller/galleryController')

// Define the routes
Galleryrouter.post('/create_gallery', createGalleryItem); // POST: Create a new gallery item
Galleryrouter.get('/read_gallery', getAllGalleryItems);    // GET: Get all gallery items

Galleryrouter.put('/update_gallery/:id', updateGalleryItem); // PUT: Update gallery item by ID
Galleryrouter.delete('/delete_gallery/:id', deleteGalleryItem); // DELETE: Delete gallery item by ID

module.exports = Galleryrouter;
