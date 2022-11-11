import express  from "express";
import { deleteUser, getAllUsers, getMe, updateUser, usersCount } from "../controllers/userControllers.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middleware/verifyToken.js";
import multerConfig from '../utils/multer.js';
const route = express.Router() ;


route.get('/me' , verifyToken , getMe )
// route.get('/:id' , verifyUser , getMe )
route.get('/users' , verifyAdmin , getAllUsers )
route.put('/update/:id' , verifyToken , multerConfig , updateUser)
route.delete('/:id' , deleteUser)
route.get('/count' , usersCount)


export default route