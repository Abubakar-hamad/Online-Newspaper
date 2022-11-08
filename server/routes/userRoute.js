import express  from "express";
import { getMe } from "../controllers/userControllers.js";

const route = express.Router() ;

route.get('/me' , getMe )


export default route