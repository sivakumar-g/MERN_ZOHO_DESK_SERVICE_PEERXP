const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
  console.log("passport entry");
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload._doc._id);
    User.findById({id:jwt_payload._doc._id} , (err, user) => { // _doc._id
      if(err){
        console.log(err);
        return done(err, false);
      }

      if(user){
        console.log(user);
        return done(null, user);
      } else {
        console.log("error siva");
        return done(null, false);
      }
    });
  }));
}
