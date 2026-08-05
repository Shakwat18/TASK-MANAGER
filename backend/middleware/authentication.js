const jwt = require('jsonwebtoken')
const passport = require('passport')
require('dotenv').config

const auth=(req,res,next)=>{
    let token= req.headers['token']
  token=token.split(' ')[1]
    
jwt.verify(token, process.env.PASSPORT_SECRETKEY,(err,decoded)=>{
if(err){
    res.status(404).json({
 message: 'unauthenticate'
    })
}else{

    let email= decoded['data']
    let id = decoded['id']
    // console.log(id);
    // console.log(decoded);
    
    req.headers.id= id
    
    req.headers.email= email
}
})
next()

}


// const auth_with_passportJwt=(req,res,next)=>{
//     try {
//         passport.authenticate('jwt',{session:false})
//         next()
//     } catch (error) {
//         res.status(404).json({
//             message: 'unauthenticate'
//         })
//     }
// }
module.exports= auth
    // auth_with_passportJwt
// }