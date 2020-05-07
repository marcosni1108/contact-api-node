const Contact = require('../model/Contact');

module.exports = {

    async getContacts(req, res) {
        return res.json(await Contact.findAll());
    },

    async getContactById(req, res) {
        return res.json(await Contact.findByPk(req.params.id));
    },

    async createContact(req, res) {
        return res.json(await Contact.create(req.body));
    },

    async updateContactById(req, res) {
        //Ver como melhorar isso...
        Contact.findByPk(req.params.id).then((contact) => {
            if (!contact) {
                console.log('Contact not found');
                throw res.status(204).send('Something broke!');
            }
            return contact.update(req.body);
        }).then((contact) => {
            res.json(contact);
        });

    },

    async deleteContactById(req, res) {
        if (!await Contact.findByPk(req.params.id)) {
            return res.status(204).json({ error: 'Contact not found' });
        }

        await Contact.destroy({ where: { id: req.params.id } });

        return res.status(200).json();
    },
};