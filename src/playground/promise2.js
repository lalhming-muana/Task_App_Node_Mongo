require('../db/mongoose')
const Task = require('../models/task')


//63f34d394e66625a28af15ca
// Task.findByIdAndDelete('63f34d394e66625a28af15ca').then((user)=>{
//     console.log(user);

//     return Task.countDocuments({completed: false});
// }).then((promise2)=>{
//     console.log(promise2);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount= async(id, age)=>{
    const task = await Task.findByIdAndDelete(id);
    const count = Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('63f34cda909dcdc4b7ebc745').then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})

