import jwt  from "jsonwebtoken";


export const verifyToken = (req , res  , next)=>{
    const token  = req.cookies.access_token ;
    if(!token){
        res.status(403).json("no Token please relogin")
    }
    jwt.verify(token , process.env.JWT_SEC , (err , user)=>{
        if(err){
            res.status(403).json(err)
        }
        req.user = user ;
        next();
    });
}

export const verifyUser = (req  , res , next)=>{
    verifyToken(req  , res , ()=>{
        if(req.user.id === req.params.id){
            next()
        }else{
            res.status(401).json('you must be in login')
        }
    })
}


export const verifyStaff =(req , res  , next)=>{
    verifyToken(req  , res , ()=>{
        if(req.user.isStaff === 'true'){
            next()
        }else{
            res.status(401).json('you are no authorize')
        }
    })
}

export const verifyAdmin = (req  , res , next)=>{
    verifyToken(req ,  res , ()=>{
        console.log(req.user.isAdmin);
        if(req.user.isAdmin === 'true'){
            next();
        }else{
           res.status(402).json('not for staff.. admin only can access this !')
        }
        
    })
}