const express = require('express');
require('./db/mongoose')
const User =require('./models/user')
const Task = require('./models/task')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())


// CRUD  create this part creates an user
app.post('/users', async(req, res)=>{
    const user = new User(req.body)
    try{
        // await allows you to get a promise and if resolved run the code below
        
        await user.save();         //here saving doesn't return anything so, no assigment needed  
        res.status(201).send(user)

    } catch(error){
        res.status(400).send(error)
    }   
    
})


//CRUD read this part reads all users
app.get('/users', async(req, res)=>{
    
    try{
    const users = await User.find({});
    res.status(200).send(users);
    } catch(error){
        res.status(500).send(error)
    }
            
})


// Read one user
app.get('/users/:id', async(req,res)=>{
    
    const _id = req.params.id

    try{
        const user= await User.findById(_id);
        
        if(!user){
            return res.status(500).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }

    
})



// Create a task
app.post('/tasks', async(req, res)=>{
    
    const task = new Task(req.body);
    
    try{
        await task.save()
        res.status(201).send(task)

    }catch(error){
        res.status(400).send(error)
    }
    
})



// Read all tasks
app.get('/tasks', async(req, res)=>{

    try{
        const tasks = await Task.find({});
        res.send(tasks);

    }catch(e){
        res.status(400).send(e);
    }

    
})


//Read one task
app.get('/tasks/:id', async(req, res)=>{
    const _id= req.params.id

    try{
        const task = await Task.findById(_id);
        if(!task){
            return req.status(500).send()
        }

        res.status(200).send(task);

    }catch(e){
        res.status(400).send(e);
    }

   
})



app.listen(port,()=>{
    console.log('Server is starting on port no:',port);
})

