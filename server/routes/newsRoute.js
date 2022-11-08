// import libraries
import express from 'express'
const route = express.Router()

// import functions
import { countNews, createNews, deleteNews, filterNews, getDetails, getNews, search, updateNews } from '../controllers/newsControllers.js'
import multerConfig from '../utils/multer.js'



// create Apis
route.get('/' , getNews)
route.post('/create' , multerConfig , createNews)
route.get('/find/:id' , getDetails)
route.put('/:id' , updateNews )
route.delete('/:id' , deleteNews )
route.get('/filter' , filterNews)
route.get('/count' , countNews)
route.get('/search' , search)


export default route
