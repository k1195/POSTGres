const { GoogleSpreadsheet } = require('google-spreadsheet');
const {CMAIL,PKEY} = require('../keys');
const express = require('express');
const { result } = require('lodash');
const router = express.Router()
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

const fs = require('fs')



// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1DPvTxB3-ZJkD9zBd66JrZdEFxTAZ97GKo_pdeYKxm8Y');

router.post('/contact', async (req,res)=>{
await doc.useServiceAccountAuth({
  client_email: CMAIL,
  private_key: PKEY,
});

await doc.loadInfo(); // loads document properties and worksheets
// console.log(doc.title);
// await doc.updateProperties({ title: 'renamed doc' });

const sheet1 = doc.sheetsByIndex[0];
await sheet1.addRow({ Name: req.body.name, Email: req.body.email, PhoneNumber:req.body.phone })
.then(result=>{
    console.log(result)
})


fs.readFile('D:/alv_factory.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })

// var transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'kunalmalhotra1195@gmail.com',
//       pass: 'vertisxt1033'
//     }
//   }));

//   let info = await transporter.sendMail({
//     from: 'kunalmalhotra1195@gmail.com', // sender address
//     to: "thisiskm95@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//  //console.log(doc)
})



module.exports = router

// const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log(sheet.title);
// console.log(sheet.rowCount);

// // adding / removing sheets
// const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
// await newSheet.delete();