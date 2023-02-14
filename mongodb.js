
// CRUD create read update delete


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

