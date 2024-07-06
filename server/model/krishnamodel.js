const mongoose=require('mongoose');
const krishnaSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model('Krishna',krishnaSchema);