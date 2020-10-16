

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database'); 
const User = require('../models/user'); 
const auth = require('../middlewares/auth')
const Request = require('request');

// Register
router.post('/register', (req, res, next) => { 
 

  console.log("register entry");
  const cemail = req.body.email;
  User.getUserByEmail(cemail, (err, user) => {
    if(user){
      console.log("Duplicate registration");
      res.json({success: false,msg: 'Duplicate registration '});
    }
else
{ console.log("else block")

  Request.post({
    "url" :"https://desk.zoho.in/api/v1/contacts",
    "headers": {"Authorization": "ca2e56a68d01e393c0e4c5aa5638729c",
  "orgId" : "60001280952"
  },//headers
    "body" : JSON.stringify({lastName:req.body.name})
  }//url
  
  ,(err,response,body)=>{
  
    if(!err)
    {console.log("before body");
    var obj = JSON.parse(response.body)
     // console.log(obj[0]._id);
    // console.log(obj.id );
     console.log("after body");
     
    
    {//normal 
  
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contactId: obj.id
  
  });
    User.addUser(newUser, (err, user) => {
      if(err){
        console.log("err at register");
   
        res.json({success: false,msg: 'registration failed'});
      } else {
        console.log("registration success");
  
        res.json({success: true ,  user});
      }
    });
  }//normal
    
    }//!err
  });//url callback
  



 
}//else


  })//getUserByEmail

});//register


















// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(password)
  //console.log(username);
  console.log('hi post login');
  User.getUserByEmail(email, (err, user) => {
    console.log("hi user login")
    if(err) {throw err; console.log("err")}
    if(!user){
      console.log("failure");
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      console.log("compare password");
      if(err) throw err;
      var token = 0;
      console.log("summa")
      if(isMatch){
 
const token = jwt.sign({ data:user}, config.secret);
console.log("success");

        res.json({
          success: true,
        //token: 'jwt '+token,
       // token: 'bearer '+token,
        token: 'JWT '+ token,
          user: {
            id: user._id,
            name: user.name,
             email: user.email,
             contactId : user.contactId
          }
        });
      } else {
        console.log('wrong password');
        return res.json({success: false, msg: 'Wrong password'});
      
      }
    });
  });
});
 

const authenticateJWT = (req, res, next) => {
  const authHeader = req.body.token;// req.headers.authorization;
 //console.log('authenticatre');
   console.log(authHeader);
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












module.exports = router; 

































// const token = jwt.sign(user.toHexString(),config.secret);      
     /*   const token = jwt.sign( user.toJSON(), config.secret, //{algorithm: 'RS256'}, //user //   {data: user}
          {  expiresIn: 604800 // 1 week //{data: user}              algorithm: "HS256" ,
         });
*/
//passport.authenticate('jwt', {session:false}),