import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username:{
        type:String , required:true
    } ,
    email:{
        type:String  , required:true
    } ,
    password:{
        type:String  , required:true
    } ,
    isAdmin:{
        type:String ,
        default:false
    } ,
    isStaff:{
        type:String  ,
        default:false
    } ,
    img:{
        type:String 
    } ,
    
} ,
    {
        timestamps:true
    }
)

const AuthModel = mongoose.model("Users" , authSchema) ;
export default AuthModel ;