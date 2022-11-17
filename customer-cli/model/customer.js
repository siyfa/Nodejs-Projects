const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstname: { type: String},
    lastname: { type: String},
    email: { type: String},
    phone: { type: String},
})

const model = mongoose.model('Customer', customerSchema);

module.exports = model;