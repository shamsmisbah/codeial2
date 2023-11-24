//require library to use mongoose
const mongoose = require('mongoose');

//connecting to data base with user_credetials as the name of DB
mongoose.connect('mongodb://127.0.0.1:27017/user_credentials');

//acquire the connection 
const db = mongoose.connection;


//error check
db.on('error',console.error.bind(console,'error connecting to db'));

//if DB is up and running then show this msg
db.once('open',function(){
    console.log('Succesfully connected to Database');
})