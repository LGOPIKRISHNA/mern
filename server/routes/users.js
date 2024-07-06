// //routes and users.js
// const express=require('express');
// const router=express.Router();
// const User=require('../model/userSchema')

// router.post('/users',(req,res)=>{
//     try{
//     const {name,email,password}=req.body;
//     const newUser=new User({name,email,password});
//     newUser.save();
//     res.status(201).send({
//         message:"user created",newUser
//     });
// }
// catch(err){
// res.status(500).send({message:err.message});
// }
// })
// module.exports=User;




/*to update the password */
// const express=require('express');
// const router=express.Router();
// const User=require('../model/userSchema');
// router.post('/',(req,res)=>{
//    try{
//     const {name,email,password}=req.body;
//     const newQuery=new User({name,email,password});
//     newQuery.save();
//     res.status(200).send({message:"User created"});
//    }catch(err){
//     res.status(500).send({message:err.message});
//    }
// })

// router.get('/',async(req,res)=>{
//     try{
//         const data= await User.find();
//         res.status(200).send(data);
//     }catch(err){
//         res.status(500).send({message:err});
//     }
// })
//put data(updata)
// router.put('/:id',async(req,res)=>{
//     try{
//         const {password}=req.body;
//         const userId=req.params.id;
//         const updataQuery= await User.findByIdAndUpdate({_id:userId},{password:password},{new:true});
//         if(!updataQuery){
//             res.status(500).send({message:"user id not found"});
//         }
//         //const updateUser= await User.findById(userId);
//         res.status(200).send({message:"password updated through put api",updateUser}) ;
//     }catch(err){
//         res.status(500).send({message:err.message});
//     }
// })

// module.exports=router;



//PUT the data (update the data)
const express=require('express');
const router=express.Router();
const User=require('../model/userSchema');
router.post('/',(req,res)=>{
   try{
    const {_id,name,email,password}=req.body;
    const newQuery=new User({_id,name,email,password});
    newQuery.save();
    res.status(200).send({message:"User created"});
   }catch(err){
    res.status(500).send({message:err.message});
   }
})

router.get('/',async(req,res)=>{
    try{
        const data= await User.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:err});
    }
})
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

// router.delete('/:id',async (req,res)=>{
//     try{
//         const userId=req.params.id;
//         const deleteUser=await User.findByIdAndDelete(userId);
//         if(!deleteUser){
//             return res.status(500).send({message:"id not exits"});
//         }
//         res.status(200).send({message:"user deleted",deleteUser});
//     }catch(err){
//         res.status(500).send({message:err.message});
//     }
// })

// router.delete('/:id',async (req,res)=>{
//     try{
//         const userId = req.params.id;
//         const deletedUser = await User.deleteOne({_id:userId});
//         if(deletedUser.nModified===0){
//             return res.status(404).send({message:"Id does'nt exist"})
//         }
//         res.status(200).send({message:"user deleted",deletedUser});
//     }catch(err){
//         res.status(500).send({message:err})
//     }
// })

router.delete('/:id',async (req,res)=>{
    try{
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({_id:userId});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does'nt exist"})
        }
        res.status(200).send({message:"user deleted",deletedUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;