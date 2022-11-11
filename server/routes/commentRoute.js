import express from 'express';
import { addComment, countComm, deleteComment, getAllComments, getReview } from '../controllers/commentControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const route = express.Router() ;

route.get('/count' , countComm) ;
route.post('/:id' , verifyToken,  addComment) ;
route.get('/:id'  , getReview) ;
route.get('/' , getAllComments ) ;
route.delete('/:id' , deleteComment)



export default route