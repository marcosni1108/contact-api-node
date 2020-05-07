const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            birthdate: DataTypes.DATE,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            district: DataTypes.STRING,
            city: DataTypes.STRING,
            code_uf: DataTypes.STRING,
            zip_code: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Contact;