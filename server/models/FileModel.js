import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    ImgName:{
        type:String ,
        required:true
    } , 
    url:{
        type:String ,
        required:true
    }
} ,
    {timestamps:true}
);

const fileModel = mongoose.model( "file", fileSchema)
export default fileModel