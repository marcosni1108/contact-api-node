const express = require('express');
const ContactController = require('./controller/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.getContacts);
routes.get('/contacts/:id', ContactController.getContactById);
routes.post('/contacts', ContactController.createContact);
routes.put('/contacts/:id', ContactController.updateContactById);
routes.delete('/contacts/:id', ContactController.deleteContactById);

module.exports = routes;