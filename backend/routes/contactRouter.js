const express = require('express');
const contactRouter = express.Router();
const contactController = require("../controller/contactController")
// Create a new contact
contactRouter.post('/contacts_create', contactController.createContact);

// Get all contacts
contactRouter.get('/contacts_read', contactController.getAllContacts);



// Delete a contact by ID
contactRouter.delete('/contacts_delete/:id', contactController.deleteContact);

module.exports = contactRouter;
