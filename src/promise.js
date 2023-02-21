require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')


//63f1fd83a7d7fbe6a122764b

User.findByIdAndUpdate('63f1fd83a7d7fbe6a122764b', {age: 7}).then((user)=>{
    console.log(user);

    return User.countDocuments({age: 7})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})


//63f34d394e66625a28af15ca
Task.findByIdAndDelete('63f34d394e66625a28af15ca').then((user)=>{
    console.log(user);

    return Task.countDocuments({completed: false});
}).then((promise2)=>{
    console.log(promise2);
}).catch((e)=>{
    console.log(e);
})

