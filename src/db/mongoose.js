
// CRUD create read update delete
/**
 * this code works for version 6 after creating the database at the required path
 * 
 **/

const mongoose = require("mongoose");
const mongodb = require('mongodb')
const validator = require('validator')
mongoose.set('strictQuery',false);

const databaseName = 'task-manager-api'
const connectionUrl =  `mongodb://localhost:27017/${databaseName}`

mongoose.connect(connectionUrl, { useNewUrlParser: true,useUnifiedTopology: true},  (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('connected successfully');

   
});




 

/* 
 
 const user = new User({
    name: '  Howard thantluanga',
    age: 7,
    email: '  THANTHANA@Gmail.com',
    password: 'thanthana@123#'
 })

 user.save().then(()=>{
    console.log(user);
 }).catch((error)=>{
    console.log('Error unabale to insert to the database',error);
 })

*/

 
/*
 const task = new Task({
    description: 'Learn mongoose library',
    completed: false
 })

 task.save().then(()=>{
    console.log(task);
 }).catch((error)=>{
    console.log('Cannot insert the data into the database',error);
 })

 */