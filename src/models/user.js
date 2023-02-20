
const mongoose = require("mongoose");
const validator = require('validator')
mongoose.set('strictQuery',false);



const User = mongoose.model('user',{
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

  module.exports = User