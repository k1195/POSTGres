const express = require('express')
const User = require('../model/usermodel')
const Order = require('../model/userOrder')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {
  JWT_SECRET
} = require('../keys')

const validate = require('../middleware/getValidated')
const client = require('../middleware/redi')

router.post('/newuser', async (req, res) => {

  try {
    const userCreate = await User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        uId: req.body.uId
      })
    // .then(function(result) {
    //   console.log(result)
    const token = jwt.sign({
      _id: userCreate.uId
    }, JWT_SECRET)
    res.status(200).json({
      token,
      userCreate
    })
    // })

  } catch (error) {
    res.status(422).json(error)
  }
})

router.get('/getall', async (req, res) => {
  try {

    if (req.body.uId) {
      const foo = (req.body.uId).toString()
      console.log(foo)
      const value = await client.get(foo);
      console.log(value)
      if (value) {
        const val1 = JSON.parse(value)
        res.status(200).json(val1)
      } else {
        const allUser = await User
          .findOne({
            where: {
              uId: req.body.uId
            },
            raw: true,
            nest: true
          })
        res.status(200).json(allUser)
        const key = (allUser.uId).toString()
        const val = JSON.stringify(allUser)
        console.log(key, value)
        client.set(key, val)
        // client.set(req.body.uId , req.body.name)
      }
    }
  } catch (error) {
    res.status(500)
    console.log(error)
  }
})


router.delete('/delete', validate, async (req, res) => {
  try {
    const delUser = await User
      .destroy({
        where: {
          uId: req.body.uId
        }
      })
    res.status(200).json(delUser)
  } catch (error) {

  }
})

router.get('/userOrder', validate, async (req, res) => {
  try {
    const specOrder = await User
      .findAll({
        where: {
          uId: req.user.uId
        },
        include: [{
          model: Order
        }]
      })
    res.status(200).json(specOrder)
  } catch (error) {

  }
})


module.exports = router