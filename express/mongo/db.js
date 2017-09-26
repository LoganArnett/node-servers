const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB') // Mongo DB connection string
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));