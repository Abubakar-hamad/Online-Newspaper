import mongoose from "mongoose";


const commentSchema  = mongoose.Schema({
    newsId:{
        type:String ,
        require:true
    } ,
    userId:{
        type:String, 
        require:true
    } ,
    username:{
        type:String ,
        require:true
    } ,
    text:{
        type:String  , 
        require:true
    } ,
    

} ,
    {timestamps:true}
) ;


const CommentModel = mongoose.model('Comments' , commentSchema) ;
export default CommentModel ;