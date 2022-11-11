import CommentModel from "../models/CommentsModel.js";
import AuthModel from "../models/AuthModel.js";
import NewsModel from "../models/NewsModel.js";
import asyncHandler from "express-async-handler";
import { connect } from "mongoose";


// post comment 
export const addComment = asyncHandler(async(req  , res)=>{
    const {text} = req.body ;
    const userId = req.user.id ;
    const username = req.user.username
    const newsId  = req.params.id ;
    const news = await NewsModel.findById(newsId ) ;
    if(!text){
        res.status(400).json("can't add un empty comment ")
    }
    if(!userId , !news ){
        return res.status(400).json('please make sure you are in loging and reload the page ')
    }

    const newComment = new CommentModel({
        newsId ,
        userId ,
        username ,
        text ,

    })

    const comment = await newComment.save()

    if(comment){
        await NewsModel.findByIdAndUpdate(news._id ,{$push:{review:newComment._id}})
    }

    res.status(201).json(comment)

}) 


export const getReview = asyncHandler(async(req , res)=>{
    const product = await NewsModel.findById(req.params.id) ;
    const comments = await Promise.all(product.review.map((comment)=>{
        return CommentModel.findById(comment)
    }))
    res.status(200).json(comments)
})


export const getAllComments = asyncHandler(async(req  , res)=>{
    const comments = await CommentModel.find()
    return res.status(200).json(comments)
})


export const countComm = asyncHandler(async(req , res)=>{
    const commCount = await CommentModel.countDocuments({})
    if(!commCount){
        res.status(400).json('no comment')
    }
     res.status(200).json({commCount})
})

export const deleteComment = asyncHandler(async(req  , res)=>{
    const comment = await CommentModel.findByIdAndDelete(req.params.id) ;
    if(!comment){
        res.status(404).json('comment not found')
    }

    const newsID = await NewsModel.findById(comment.newsId) 
    if(!newsID){
        res.status(404).json('news not found but comment maybe still existing')
    }
    await NewsModel.findByIdAndUpdate(newsID , {$pull:{review:comment._id}})
    await CommentModel.findByIdAndRemove(comment._id)
    res.status(200).json('comment deleted')

})