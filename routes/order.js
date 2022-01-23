const express = require('express')
const User = require('../model/usermodel')
const Order = require('../model/userOrder')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const validate = require('../middleware/getValidated')

  router.post('/neworder', async (req,res)=>{
   try {
    const orderCreate = await Order
    .create({ orderAmount:req.body.amount , orderId:req.body.oid , uId:req.body.uId })
    // .then(function(result) {
    //   console.log(result)
    //const token = jwt.sign({_id:userCreate.id},JWT_SECRET)
    res.status(200).json({orderCreate})  
    // })
  
   } catch (error) {
    res.status(422).json(error)  
   }
  })

  router.get('/allorder',validate, async (req,res)=>{
    try {
     const orderCreate = await Order
     .findAll({ where: {uId:req.user.uId}, 
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        })
     // .then(function(result) {
     //   console.log(result)
     //const token = jwt.sign({_id:userCreate.id},JWT_SECRET)
     res.status(200).json({orderCreate})  
     // })
   
    } catch (error) {
     res.status(422).json(error)  
    }
   })

  module.exports = router
