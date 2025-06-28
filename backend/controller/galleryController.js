const Gallery = require("../models/galleryModel")

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
  try {
    const { title, description, image, category, isFeatured } = req.body;

    // Validate required fields
    if (!title || !image) {
      return res.status(400).json({ message: "Title and Image are required." });
    }

    const newGallery = new Gallery({
      title,
      description,
      image,
      category,
      isFeatured
    });

    // Save to database
    await newGallery.save();

    // Respond with the saved data
    res.status(200).json({
      status: 1,
      message: "Gallery item inserted successfully",
      data: newGallery
    });
  } catch (error) {
    console.error("Error creating gallery item:", error); // Log detailed error for debugging
    res.status(400).json({ 
      message: "Error creating gallery item", 
      error: error.message 
    });
  }
};

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ _id: -1 }); // Sorting items by latest first
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    res.status(500).json({ message: error.message });
  }
};



// Update a gallery item by ID
exports.updateGalleryItem = async (req, res) => {
  try {
    const updatedItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Ensuring validations are run on update
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating gallery item:", error);
    res.status(400).json({ message: error.message });
  }
};

// Delete a gallery item by ID
exports.deleteGalleryItem = async (req, res) => {
  try {
    const deletedItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }
    res.status(200).json({ message: "Gallery item deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    res.status(500).json({ message: error.message });
  }
};
