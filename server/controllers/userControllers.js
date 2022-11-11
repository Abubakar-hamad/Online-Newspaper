import AuthModel from "../models/AuthModel.js";
import asyncHandler from "express-async-handler";
import uploadImg from "../utils/cloudinary.js";
import fs from 'fs'


// getMe or get Profile function 
export const getMe = asyncHandler(async(req, res)=>{
    
    const id = req.user.id ;
    if(!id){
        return res.status(400).json("login first to get your profiel")
    }
    const user = await AuthModel.findById(id)
    if(!user){
        res.status(500).json('you have problem in your account please contact us to check your data')
    }
    const {password  , ...other} = user._doc  ; 
    return res.status(200).json(other)
})


export const updateUser = asyncHandler(async(req , res)=>{
    // const {img} =req.files
    const result = await uploadImg(req.files[0].path , 'Avatar')
    const user = await AuthModel.findByIdAndUpdate(req.user.id , {$set:{ img:result, ...req.body } }   , {new:true})
    if(!user){
        res.status(400).json('un authenticate')
    }
    if(user){
        res.status(201).json({"user successfully update":user})
        fs.unlinkSync(req.files[0].path)


    }

})

export const deleteUser = asyncHandler(async(req , res)=>{
    const id = req.params.id ;
    await AuthModel.findByIdAndRemove(id)
    res.status(200).json("user Deleted")
})


export const getAllUsers = asyncHandler(async(req , res)=>{
    const users = await AuthModel.find() ;
    if(!users){
        return res.status(200).json("there is no users yet ...")
    }
    res.status(201).json(users)
})


export const usersCount = asyncHandler(async(req , res)=>{
    const users = await AuthModel.countDocuments({})
    const userStaff = await AuthModel.countDocuments({isStaff:true})
    return res.status(200).json({users , userStaff})
})
