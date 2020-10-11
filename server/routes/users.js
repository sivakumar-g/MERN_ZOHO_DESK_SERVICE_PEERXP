const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database'); 
const User = require('../models/user'); 
const auth = require('../middlewares/auth')

// Register
router.post('/register', (req, res, next) => { 
 

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  const cemail = req.body.email;
  User.getUserByEmail(cemail, (err, user) => {
    if(user){
      console.log("Duplicate registration");
      res.json({success: false,msg: 'Duplicate registration '});
    }
else
{
  User.addUser(newUser, (err, user) => {
    if(err){
      console.log("err at register");
 
      res.json({success: false,msg: 'registration success'});
    } else {
      console.log("registration success");

      res.json({success: true});
    }
  });

}
  })

});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //console.log(username);
  console.log('hi post login');
  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      console.log("failure");
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      console.log("compare password");
      if(err) throw err;
      var token = 0;
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
             email: user.email 
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
 console.log('authenticatre');
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


// Protected API END POINT only for signed in users

router.post('/ticket',authenticateJWT,(req, res ) => { 

  // console.log(req.headers.authorization);
  res.json({user: req.user});

});

// Protected API END POINT only for signed in users tp manage their tickets

router.get('/gettickets',authenticateJWT,(req,res)=>{
//api call using req.email to zoho desk api
  res.json("zoho desk tickets");
});

module.exports = router;

































// const token = jwt.sign(user.toHexString(),config.secret);      
     /*   const token = jwt.sign( user.toJSON(), config.secret, //{algorithm: 'RS256'}, //user //   {data: user}
          {  expiresIn: 604800 // 1 week //{data: user}              algorithm: "HS256" ,
         });
*/
//passport.authenticate('jwt', {session:false}),