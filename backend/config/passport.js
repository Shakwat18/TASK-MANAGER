const passport= require('passport')
const User = require('../model/UserModel')
require('dotenv').config()
const  JWTSTRATEGY=  require('passport-jwt').Strategy
const extract=  require('passport-jwt').ExtractJwt
let opts={
}
    opts.jwtFromRequest= extract.fromAuthHeaderAsBearerToken()
    opts.secretOrKey=process.env.PASSPORT_SECRETKEY
passport.use(new JWTSTRATEGY(opts,(jwt_payload,done)=>{
   try {
    const user= User.findOne({_id:jwt_payload['id']})
    console.log(user)
    if(user){
        return done(null, user)
    }else{
        return done(null, false)
    }
   } catch (error) {
    return done(error, false)
   }
}))



let cookieExtractor= (req)=>{
let token;
if(req&& req.cookies){
    token= req.cookies['jwt']
}
return token
}

opts.jwtFromRequest= cookieExtractor