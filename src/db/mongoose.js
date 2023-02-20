
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
 Create a model for tasks.
 Make description and completed fields.
 Create a new instance of the model.     
 Save the model to the database
 Test your work.
 */

 const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
         },
  
    age: {
      type: Number,
      required: true,
      default: 0,
      validate(value){
        if(value<0){
          throw new Error('Age cannot be a negative number');
        }
      }
      },
  
      
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is not valid. Enter the email again')
        }
      }
  
    },

    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error(' Dont use password as your password')
            }
        }
    }
    
  });

 const User = mongoose.model('user', userSchema);
 
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



 const Task = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true,


    },
    completed: {
        type: Boolean,
        default: false,
    }
 });

 const task = new Task({
    description: 'Learn mongoose library',
    completed: false
 })

 task.save().then(()=>{
    console.log(task);
 }).catch((error)=>{
    console.log('Cannot insert the data into the database',error);
 })