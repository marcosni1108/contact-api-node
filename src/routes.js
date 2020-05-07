const express = require('express');
const ContactController = require('./controller/ContactController');

const routes = express.Router();

routes.get('/contacts', ContactController.getContacts);
routes.post('/contacts', ContactController.store);

module.exports = routes;