
const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')

mongoose.set('strictQuery',false);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
       },

  age: {
    type: Number,
    default: 0,
    validate(value){
      if(value<0){
        throw new Error('Age cannot be a negative number');
      }
    }
    },

    
  email: {
    type: String,
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



userSchema.pre('save', async function(next){
  const user = this

  if(user.isModified('password')){
      user.password = await bcrypt.hash(user.password, 8)
  }
  
  next();
})

const User = mongoose.model('user',userSchema);

module.exports = User