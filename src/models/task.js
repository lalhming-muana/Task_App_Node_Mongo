const mongoose = require("mongoose");
const validator = require('validator')
mongoose.set('strictQuery',false);


const Task = mongoose.model('Task', {
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

 module.exports = Task