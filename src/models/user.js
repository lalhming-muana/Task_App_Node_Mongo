
const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    unique: true,
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
  },

  tokens:[{
    token:{
      type: String,
      required: true
    }
  }]
  
});


// Authenticate an user when he logs in
// .methods are used on instance of a model not on the model itself

userSchema.methods.generateAuthToken = async function(){
  const user = this;
  const token = jwt.sign({_id: user._id.toString()},'webtoken')
  user.tokens = user.tokens.concat({token})
  await user.save();
  return token;


}




// logging in user .sttics is used on the Models not on the instance of the model

userSchema.statics.findByCredentials = async (email, password)=>{
  
  const user = await User.findOne({email})

  if(!user){
    throw new Error(' Unable to login. User is not registered ')
  }  

  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch){
    throw new Error(' Unable to login ')
  }

  return user;


}




// Hash the user password before saving

userSchema.pre('save', async function(next){
  const user = this

  if(user.isModified('password')){
      user.password = await bcrypt.hash(user.password, 8)
  }
  
  next();
})

const User = mongoose.model('user',userSchema);

module.exports = User