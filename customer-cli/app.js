const mongoose = require('mongoose');

//map global promise - get rid of warnings
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    useNewUrlParser: true
})

//import model
const Customer = require('./model/customer');

//add customer
const addCustomer = customer => {
    Customer.create(customer)
        .then(customer => {
            console.info('New Customer Added');
            process.exit()
            // db.close();
        })
}

//find customer
const findCustomer = name => {
    //case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            process.exit()
            // db.close();
        })
}

//update customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id}, customer)
        .then(customer => {
            console.info('Customer Updated')
            process.exit()
        })
}

//remove customer
const removeCustomer = _id => {
    Customer.deleteOne({_id})
        .then(customer => {
            console.info('Customer Removed')
            process.exit()
        })
}

//list customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers)
            console.info(`${customers.length} customers found`)
            process.exit()
        })
}
//exports modules
module.exports = { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers}