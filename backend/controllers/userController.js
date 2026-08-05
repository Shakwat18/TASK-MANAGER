const jwt = require("jsonwebtoken")
const User = require("../model/UserModel")
const bcrypt = require('bcrypt')
const sendMail = require("../utility/sendMail")
const otpModel = require("../model/OptModel")
require('dotenv').config()
const userRegister = async (req, res) => {
    const reqBody = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const result = await User.create(reqBody)
    res.status(201).json(
        {
            message: 'User is created Successfully'

        }
    )
}


const userLogin = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    const result = await User.aggregate([
        {
            $match: {
                email: email
            }
        }
    ])
    const resut = await User.aggregate([
        {
            $match: {
                email: email
            }
        },
        {
            $count: 'count'
        }
    ])

    console.log(result, resut);
    

    if (resut[0].count == 0) {
        res.status(401).json({
            message: 'Invalid credentials'
        })
    }
    console.log(result[0])
    const isMatch = bcrypt.compareSync(password, result[0].password)
    if (!isMatch) {
        res.status(401).json({
            message: 'Invalid credentials'
        })
    } else {
        const payload = {
            data:req.body.email,
            id: result[0]._id.toString(),
            
        }
console.log(payload);

        const token = jwt.sign(payload, process.env.PASSPORT_SECRETKEY, {
            expiresIn: '1d'
        })

        res.status(200).json({
            message: 'Login Successfully', 
            token: "Bearar " + token
        })
    }
}


const profileDetails =async (req, res) => {
    const email = req.headers['email']
const result=await User.aggregate([
    {
        $match:{email}
    }
])

    res.status(200).json({
     result
    })
}

const profileUpdate= async(req, res)=>{
   const email = req.headers['email']
   const name= req.body.name
const result=await User.updateOne({email},
    {name}
)

res.status(200).json({
    message: 'Updated successfully'
})
}

//

const recoverVerifyEmail=async(req,res)=>{
    const email = req.params.email
    const otp=Math.floor(Math.random()*2000000 ) 
    const user=await User.aggregate([{
        $match:{email}
    },
    {$count:'count'}
])

if(user[0].count===  1){
    
    
    let text=`this your verify otp: ${otp}`
    let sub='Verify otp'
    await sendMail(email,text,sub)
   await  otpModel.create({email,otp})
    return res.status(200).json({
        message: 'Otp is sent',
    })


}
return res.status(200).json({
    message:'unauthorized'
})
}

const recoverVerifyOpt=async(req,res)=>{
    const OTP= req.params.otp
    const email= req.params.email
  const verify=await otpModel.aggregate([{
    $match:{email:email,otp:OTP,expAt:{$gt: new Date()}}
  } ,
  {$count:'count'}
])
console.log(verify)
if(verify[0]?.count===1){
    // await otpModel.updateOne({email:email,otp:OTP,status:0},{status:1})
 return res.status(200).json({
        message:' OPT  verified'
    })

}
return res.status(404).json({
    message:'OTP expired'
})

}


const resetPassword=async (req,res)=>{
    const email= req.body.email
    const otp=req.body.otp
    const cpassword= req.body.currentPassword
    const newPassword=req.body.password
    
   const verify=await otpModel.aggregate([{
    $match:{email:email,otp:OTP,expAt:{$gt: new Date()}}
  }     ,
  {$count:'count'}
])

    if(verify[0].count===1){
await User.updateOne({email,password:cpassword},{password:newPassword})
return res.status(200).json({
    message: 'password changed successfully'
})
    }
    return res.status(404).json({
message:'OTP expired'    })
}
module.exports = { userRegister, userLogin, profileDetails, profileUpdate,recoverVerifyEmail, recoverVerifyOpt,resetPassword }