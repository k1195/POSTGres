const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const User = require('../model/usermodel')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
  
    if(!authorization){
        return res.status(401).json({error:"you must be logged In"})
    }
       const token = authorization.replace("Bearer ","")
       jwt.verify(token,JWT_SECRET,(err,payload)=>{
           if(err){
              return res.status(401).json({err:"you must be logged In"})
           }
            
           const {_id} = payload
           console.log(payload)
           console.log(_id)
           User.findOne({ where: {uId:_id} }).then(userData=>{
               req.user = userData
               next()
           })

        })
           
       
}