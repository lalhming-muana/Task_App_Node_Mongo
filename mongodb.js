
// CRUD create read update delete
/**
 * this code works for version 6 after creating the database at the required path
 * 
 * const MongoClient = require('mongodb').MongoClient
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = MongoClient.connect(connectionURL);

console.log('connection complete')


 * 
 * 
 */

const mongoose = require("mongoose");
const mongodb = require('mongodb')
mongoose.set('strictQuery',false);
const databaseName = 'task-manager'
const connectionUrl =  "mongodb://localhost:27017/databaseName" 
mongoose.connect(connectionUrl, { useNewUrlParser: true,useUnifiedTopology: true},  (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('connected successfully');

   
});

const User = mongoose.model('User' , {
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const me = new User({
    name: 'Howard',
    age: 7
})

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log('Error!',error);
})

