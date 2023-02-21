const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/users', async(req, res)=>{
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
router.get('/users', async(req, res)=>{
    
    try{
    const users = await User.find({});
    res.status(200).send(users);
    } catch(error){
        res.status(500).send(error)
    }
            
})


// Read one user
router.get('/users/:id', async(req,res)=>{
    
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


// patch is used to update things
router.patch('/users/:id', async(req, res)=>{
    
    const updates = Object.keys(req.body) // this stores each field of the req body as elements of an array
    const allowedUpdates =['name','age','passoword','age'];

    // every() is an array function that returns if every element returns true
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({ "error": "Invalid updates"});
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!user){
            return res.status(400).send();
        }
        res.status(200).send(user)

    }catch(e){
        res.status(400).send(e);
    }

})


router.delete('/users/:id', async(req, res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        
        if(!user){
            return res.status(404).send();
        }

        res.status(200).send(user)

    } catch(e){
        res.status(400).send(e);
    }
})

module.exports = router