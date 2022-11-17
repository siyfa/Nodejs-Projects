#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require('./app')

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    },
]

program
    .version('1.0.0')
    .description('Client Management System');

//add
program
    .command('add')
    .alias('a')
    .description('add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers))
    });

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email });
//     });

//update
program
    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id,answers))
    });
//remove
program
    .command('remove <_id>')
    .alias('r')
    .description('remove a customer')
    .action(_id => removeCustomer(_id));

//find
program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action(name => findCustomer(name));
//list
program
    .command('list')
    .alias('l')
    .description('list all customers')
    .action(() => listCustomers());

program.parse(process.argv);
