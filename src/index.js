const express = require('express');
require('./db/mongoose')

const User =require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// CRUD  - this part creates an user

app.listen(port,()=>{
    console.log('Server is starting on port no:',port);
});


const jwt = require('jsonwebtoken');

const tokenFunction = async ()=>{
    token = jwt.sign({_id: "jsonid"},'webtoken',{expiresIn: '7 days'});
    console.log(token);

    const payLoad = jwt.verify(token,'webtoken');
    console.log(payLoad);
}

tokenFunction();