const express=require('express');
const router=express.Router();
const Krishna=require('../model/krishnamodel');
router.post('/',(req,res)=>{
    try{
    const {name,age,email,password}=req.body;
    const krishna=new Krishna({name,age,email,password});
    krishna.save();
    res.status(200).send({message:`values send on name ${name}`});
    }catch(err){
        res.status(500).send({message:err.message});
    }
})
router.get('/',async(req,res)=>{
    try{
        const krishna= await Krishna.find();
        res.status(200).send(krishna);
    }catch(err){
        res.status(500).send({message:err.message});
    }
})
router.delete('/:age',async (req,res)=>{
    try{
        const username = req.params.age;
        const deletedUser = await Krishna.deleteOne({age:username});
        if(deletedUser.nModified===0){
            return res.status(404).send({message:"Id does'nt exist"})
        }
        res.status(200).send({message:"user deleted",deletedUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;