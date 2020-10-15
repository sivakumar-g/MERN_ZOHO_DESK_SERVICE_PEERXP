
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database'); 
const User = require('../models/user'); 
const auth = require('../middlewares/auth')
const Request = require('request');




const authenticateJWT = (req, res, next) => {
    const authHeader = req.body.token;// req.headers.authorization;
   //console.log('authenticatre');
    // console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
  
        jwt.verify(token, config.secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            console.log(user);
  
            req.user = user;
            next();
        });
    } else {
  
      console.log("entered");
        res.sendStatus(401);
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Protected API END POINT only for signed in users
  
  router.post('/create-ticket',authenticateJWT,(req, res ) => { 
    console.log("create-ticket")
  console.log(req.user.data._id);
  console.log("hi new ticket");
  console.log(typeof(req.user));
  
  //console.log(req.body.testname);
    // console.log(req.headers.authorization);
   // res.json({user: req.user}); 
  
  
  Request.post({
    "url" :"https://desk.zoho.in/api/v1/tickets",
    "headers": {"Authorization": "ca2e56a68d01e393c0e4c5aa5638729c",
  "orgId" : "60001280952"
  },//headers
  "body" : JSON.stringify({subject:req.body.subject,departmentId: 7189000000051431 , contactId:req.user.data.contactId})
    }//url
  
  ,(err,response,body)=>{
  
    if(!err)
    {console.log(body);
      //console.log(response);
      console.log(req.user);
      res.json({user:response.body});  }//!err
  
      else{res.json(err);}
  });//url callback
  
  
  console.log("ticket ended");
  })//tickets
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Protected API END POINT only for signed in users tp manage their tickets
  
  router.post('/mytickets',authenticateJWT,(req,res)=>{
  //api call using req.email to zoho desk api
    console.log("zoho desk tickets"); 
  console.log(req.user.data.contactId)
  
    Request.get({  //${req.user.data.contactId} 7189000002741248
      "url" :"https://desk.zoho.in/api/v1/contacts/"+ req.user.data.contactId+ "/tickets?include=departments,team,assignee",
      "headers": {"Authorization": "ca2e56a68d01e393c0e4c5aa5638729c",
    "orgId" : "60001280952"
    }//headers
      }//url
    
    ,(err,response,body)=>{
    
      if(!err)
      { console.log
        console.log(body);
        //console.log(response);
        console.log(req.user);
        // res.json(response.body); 
      res.send(response.body) }//!err
    });//url callback
    
    
  
  
  });//route
  
  module.exports = router; 
  
  
  