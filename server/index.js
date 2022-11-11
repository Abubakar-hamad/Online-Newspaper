// import libararies
import  express  from "express";
import cors from 'cors' ;
import dotenv from "dotenv"
import asyncHndler from "express-async-handler" ;
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import errroHandler from "./middleware/errorMiddleware.js";
import fs from 'fs' ;
// defaine constant
dotenv.config()
const port = process.env.PORT || 5000 ;

// Serve Images
const app = express()


// import functions
import connectDB from './config/db.js'
connectDB()
import uploadImg from "./utils/cloudinary.js";
// -------------------//
import News from './routes/newsRoute.js'
import Auth from './routes/authRoute.js' ;
import User from "./routes/userRoute.js";
import Cmment from "./routes/commentRoute.js"
import fileModel from "./models/FileModel.js";
import multerConfig from './utils/multer.js'


// configure server
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true , limit:'50mb'}))
app.use(cookieParser())
app.listen(port , ()=>console.log(`server running in ${port}`))
app.use( '/Images' , express.static('server/Images'))
//Apis
app.use('/api/news' , News)
app.use('/api/auth' , Auth)
app.use('/api/user' , User)
app.use('/api/comment' , Cmment)
app.get('/api' , (req , res)=>res.send('Server Work Success'))

// app.post('/img', multerConfig, async(req , res)=>{
//   const result = await uploadImg(req.files[0].path )
//   console.log(result);
//   console.log(req.files[0])
//   const imgDetails = new fileModel({
//     ImgName:req.files[0].originalname , 
//     url:result
//   })
//   const img = await imgDetails.save()
//   //delete img after uploaded to cloudinary by fs package "fileSystem"
//   fs.unlinkSync(req.files[0].path)
//   res.status(200).json(img)
// })


// app.get('/img' , async(req  , res)=>{
//     const imgs = await fileModel.find()
//     res.status(200).json(imgs)
// })


app.use(errroHandler)