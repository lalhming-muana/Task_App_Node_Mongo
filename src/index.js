const express = require('express');
require('./db/mongoose')
const User =require('./models/user')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res)=>{
    res.send('Testing app')
})

app.listen(port,()=>{
    console.log('Server is starting on port no:',port);
})

