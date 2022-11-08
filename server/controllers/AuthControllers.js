import AuthModel from "../models/AuthModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

// register function
export const register = asyncHandler(async(req ,res)=>{
    const {username  , email , password } = req.body
    if(!username , !email , !password){
        return res.status(400).json("field required !!")
    }

    const isEmailExisist = await AuthModel.findOne({email})
    const isUserExisist = await AuthModel.findOne({username})
    if(isUserExisist|| isEmailExisist ){
        return res.status(400).json("the username  is existed !")
    }
    const salt = await bcrypt.genSalt(10) ;
    const hashed  =  await bcrypt.hash(password , salt)
    const user = new AuthModel({
        ...req.body,
        password:hashed , 
    }) 
    
    const newUser = await user.save()
    
    
    const token = jwt.sign(
            { id:user._id,  username:user.username , isStaff:user.isStaff , isAdmin:user.isAdmin  , } , process.env.JWT_SEC
        )
        res.cookie('access_token' , token  ,{httpOnly:true}).status(201).json({"the user created sucessfully":newUser , token})
})

// login function
export const login = asyncHandler(async(req , res)=>{
    
    if(!req.body.username || !req.body.password){
        return res.status(400).json("filed required")
    }

    const user = await AuthModel.findOne({username:req.body.username}) ;
    if(!user){
        return res.status(400).json("account not found")
    }
    const isPassword = await bcrypt.compare(req.body.password  , user.password)
    if(!isPassword){
        return res.status(400).json("username or password is uncrrocet")
    }
    const token = jwt.sign(
        {id:user._id , username:user.username  , isStaff:user.isStaff , isAdmin:user.isAdmin} , process.env.JWT_SEC
    )
    const {password , isAdmin  , isStaff , ...otherDetails}= user._doc 

    res.cookie("access_token" , token , {httpOnly:true}).status(200).json({"userLogin":otherDetails , token})
})


export const  logout = asyncHandler(async(req  , res)=>{
    res.clearCookie("access_token").status(200).json('logout success') ;
    res.end()
})