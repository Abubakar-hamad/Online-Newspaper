import AuthModel from "../models/AuthModel.js";
import asyncHandler from "express-async-handler";


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
    const {password , ...other} = user_doc  ; 
    return res.status(200).json(...other)
})