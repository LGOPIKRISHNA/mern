// //this is my mongodb schema
// const mongoose=require('mongoose');
//     const UserSchema=mongoose.typeDefs({
//         name:{type:String,
//             required:true,
//         },
//         email:{type:String,
//             required:true,
//         },
//         password:{type:String,
//             required:true,
//         },
//     })

// module.exports=mongoose.model('User',UserSchema);



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

//mutation
