// required express framwork
const express = require('express');

const path = require('path');

// creating a port
const port = 8002;

//pasing list.ejs to List
const List=require('./models/list');

//required mongoose
const db = require('./config/mongoose');

const app = express();
//creating template engine
app.set('view engine', 'ejs');

// joining views folder here 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

// adding static files
app.use(express.static('assets'));

// creating and passing values to array
var todoList = [
    {
        description: "why not make a task",
        date:21081998,
        category:"work"
    },
    {
        description: "lets make a todo list",
        date:22081998,
        category:"party"
    },
    {
        description: "training report submission",
        date:23081998,
        category:"school"
    }
]
// used to get requests from server
app.get('/', function(req, res){
    List.find({}, function(err,list){
        if(err){
            console.log('error infetching data from db');
            return;
        }
        return res.render('home',{
            title: "Todo List",
            todo_List: list
        });
    });
});
//using post method passing values to sever and to database
app.post('/create-list',function(req,res){
    List.create({
        description: req.body.description,
        date:req.body.date,
        category: req.body.category
       
    },
    function(error,newList){
        if(error){
            console.log('error in creating database');
            return;
        }
       return res.redirect('back');
    });
    
    });
   
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});


//delete a list
app.get('/delete-list/', function(req, res){
    //get id using query 
    let id = req.query.id;
    //finding the list
List.findByIdAndDelete(id,function(err){
    if(err){
        console.log("error deleting data ");
        return;
    }
    return res.redirect('back');
}); 
});