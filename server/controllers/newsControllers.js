//>>>>>>>>>>>>>>>>>import libraries<<<<<<<<<<<<<<<<<<//
import asyncHandler from "express-async-handler";
import fs from 'fs'
//>>>>>>>>>>>>>>>>>improt models | DB <<<<<<<<<<<<<<<<<<//
import NewsModel from "../models/NewsModel.js";
import uploadImg from "../utils/cloudinary.js";

// 2912565

//>>>>>>>>>>>>>>>>>create functions <<<<<<<<<<<<<<<<<<//



// 1- get all news  : >>
export const  getNews = asyncHandler(async(req , res)=>{
    const news = await NewsModel.find();
    if(!news){
        res.status(200).json("There is No News Yet ...")
    }
    res.status(200).json(news)
})



// 2- create a new news : >>
export const createNews = asyncHandler(async(req , res)=>{
    const {title , category , text  } = req.body
    
    const{img} = req.files
    console.log('creator . . .' , img);


  if(!title || !category || !text){
      res.status(400).json('require filds')
    }
    if(!img){
         res.status(400).json('You must select photo to provide the news')
    }
    const result =  await uploadImg(req.files[0].path )
    const news = new NewsModel({
       img:result ,
        ...req.body 
    }) 
    
    await news.save()
    fs.unlinkSync(req.files[0].path)
    res.status(201).json({"new news added": news})

})

// 3- get news details : >>

export const getDetails = asyncHandler(async(req  , res)=>{
    const id = req.params.id
    const news = await NewsModel.findById(id)
    if(!news){
        res.status(404).json('news not found or maybe deleted')
    }
    res.status(200).json({news})
})


// 4- update exiist news : >>

export const updateNews = asyncHandler(async(req , res)=>{
    const id = req.params.id
    const news = await NewsModel.findByIdAndUpdate(id , {$set:req.body}  , {new:true})
    if(!news){
         res.status(404).json('news not Found')
    } 
    res.status(201).json({'news updated':news})
})


// 5- delete  news : >>

export const deleteNews = asyncHandler(async(req , res)=>{
    const id = req.params.id
    const news = await NewsModel.findByIdAndDelete(id)
    if(!news){
         res.status(404).json('news not Found or already deleted ')
    } 
    res.status(201).json('news deleted successfully')
})


// 6- filter  news by category : >>

export const filterNews =asyncHandler(async(req , res)=>{
    const { category , ...other} = req.query
    const news = await NewsModel.find({category , ...other}).limit(req.query.limit)
    if(!news){
        res.status(404).json('No News With This Categoory')
    }
    res.status(200).json({category:news})
})


// 7- count  news by category : >>

export const countNews = asyncHandler(async(req , res)=>{
    const allNews = await NewsModel.countDocuments()
    const arabic = await NewsModel.countDocuments({category:'arabic'})
    const local = await NewsModel.countDocuments({category:'local'})
    return res.status(200).json([
        {category:'all' , count:allNews},
        {category:'arabic' , count:arabic},
        {category:'local' , count:local}
    ])
    
})