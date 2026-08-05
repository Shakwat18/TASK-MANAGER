const { default: mongoose } = require("mongoose");

const optSchema=new mongoose.Schema({
    email:{
        type: String
    },
    otp:{
        type:String
    },
   expAt:{
    type: Date,
    default: ()=> new Date(Date.now() + 2 * 60 * 1000)
   }
},{timestamps:true, versionKey:false})

const otpModel= mongoose.model("OTP",optSchema)

module.exports= otpModel