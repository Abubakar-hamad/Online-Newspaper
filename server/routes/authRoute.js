import express  from "express";

const route  = express.Router()

import { login, logout, register } from "../controllers/AuthControllers.js";


route.post('/register' , register) ;
route.post('/login' , login) ;
route.get('/logout' , logout )

export default route