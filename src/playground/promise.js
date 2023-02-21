require('../db/mongoose')
const User = require('../models/user')


//63f1fd83a7d7fbe6a122764b

// User.findByIdAndUpdate('63f1fd83a7d7fbe6a122764b', {age: 7}).then((user)=>{
//     console.log(user);

//     return User.countDocuments({age: 7})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


const updateAgeAndCount= async(id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('63f1fd83a7d7fbe6a122764b', 13).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})
