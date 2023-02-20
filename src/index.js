const express = require('express');
require('./db/mongoose')
const User =require('./models/user')
const Task = require('./models/task')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())


// CRUD  create this part creates an user
app.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((error)=>{
        res.status(400).send(error)
    })
    
})

//CRUD read this part reads all users
app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((error)=>{
        res.status(500).send()
    })
})


// Read one user
app.get('/users/:id',(req,res)=>{
    
    const _id = req.params.id

    User.findById(_id).then((user)=>{

        if(!user){
            return res.status(500).send()
        }

        res.send(user)
    }).catch((e)=>{
        res.status(400).send()
    })


})



// Create task
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((error)=>{
        res.status(400).send(error)
    })
    
})

// Read all tasks
app.get('/tasks',(req, res)=>{

    Task.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.status(400).send()
    })
    
})


//Read one task
app.get('/task/:id',(req, res)=>{
    const _id= req.params.id

    Task.findById((_id)).then((task)=>{
        if(!task){
            return req.status(500).send()
        }

        res.send(task);
    }).catch((error)=>{
        res.status(400).send();
    })
})



app.listen(port,()=>{
    console.log('Server is starting on port no:',port);
})

