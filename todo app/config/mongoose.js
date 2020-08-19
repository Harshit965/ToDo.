//required library
const mongoose = require('mongoose');

//connected to database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquired connection
const db=mongoose.connection;

//checking error
db.on('error',console.error.bind(console,'error connecting to db'));

//printing if connected to database
db.once('open',function(){
    console.log('succesfullly connected to db');
});