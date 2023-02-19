
// CRUD create read update delete

const mongoose = require("mongoose");
const mongodb = require('mongodb')
mongoose.set('strictQuery',false);

const databaseName = 'task-manager-api'
const connectionUrl =  `mongodb://localhost:27017/${databaseName}`

mongoose.connect(connectionUrl, { useNewUrlParser: true,useUnifiedTopology: true},  (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('connected successfully');

   
});


// A model is something which models the real world

// const User = mongoose.model('User' , {
//     name:{
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Howard',
//     age: 7
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error!',error);
// })

/*
 Create a model for tasks.
 Make description and completed fields.
 Create a new instance of the model.     
 Save the model to the database
 Test your work.
 */
 const taskSchema = new mongoose.Schema({
    desription: { 
        type: String
    },
    completed: {
        type: Boolean
    }
 })

 const Task = mongoose.model('tasks', taskSchema);
 
 const task = new Task({
    desription: 'Learn DSA',
    completed: true
 })

 task.save().then(()=>{
    console.log(task);
 }).catch((error)=>{
    console.log('Error unabale to insert to the database',error);
 })

