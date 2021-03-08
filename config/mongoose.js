//require the library 
const mongoose = require('mongoose')

//connect to the DB
mongoose.connect('mongodb://localhost/khapitar_db');

//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error ke liye 
db.on('error', console.error.bind(console, 'error connecting to db'));

//if it is running then print the message
db.once('open', function() {
    console.log('Successfully connected to the DB')
});

module.exports = db