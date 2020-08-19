//required mongoose libraray
const mongoose = require('mongoose');
//creating the schemas
const listSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }
    

})


const List = mongoose.model('List', listSchema);
//exporing values to database
module.exports = List;