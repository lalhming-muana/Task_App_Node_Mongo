const express = require('express')
const router = express.Router()
const Task = require('../models/task')

// Create a task
router.post('/tasks', async(req, res)=>{
    
    const task = new Task(req.body);
    
    try{
        await task.save()
        res.status(201).send(task)

    }catch(error){
        res.status(400).send(error)
    }
    
})



// Read all tasks
router.get('/tasks', async(req, res)=>{

    try{
        const tasks = await Task.find({});
        res.send(tasks);

    }catch(e){
        res.status(400).send(e);
    }

    
})


//Read one task
router.get('/tasks/:id', async(req, res)=>{
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


router.patch('/tasks/:id', async(req, res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates =['description','completed']

    const isValidOperation = updates.every((update)=>{

        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({ "error": "Invalid updates"});
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!task){
            return res.status(400).send();
        }
        res.status(200).send(task)

    }catch(e){
        res.status(400).send(e);
    }


})







router.delete('/tasks/:id', async(req, res)=>{

    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            res.status(400).send()
        }
        res.status(200).send(task)

    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router