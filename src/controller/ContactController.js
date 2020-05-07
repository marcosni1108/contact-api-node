const Contact = require('../model/Contact');

module.exports = {

    async getContacts(req, res) {
        return res.json(await Contact.findAll());
    },

    async store(req, res) {
        const { name, email, phone } = req.body;

        const contact = await Contact.create({ name, email, phone });

        return res.json(contact);
    }
};