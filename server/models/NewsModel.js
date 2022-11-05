import mongoose from "mongoose";
const newsSchema = mongoose.Schema({
   
   
    category:{
        type:String , required:true
    },
    title:{
        type:String , required:true
    },
    img:{
        type:[String] ,
    } ,
    text:{
        type:String , required:true
    } ,
    review:{
       type:[String]
    }
    
} ,
    {
        timestamps:true    
    }
);

const NewsModel = mongoose.model("News" , newsSchema) ;
export default NewsModel