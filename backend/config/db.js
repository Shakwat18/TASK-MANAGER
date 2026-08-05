const { default: mongoose } = require("mongoose")
require('dotenv').config()
const url= process.env.MONGO_URL
const connectDB=()=>{
    mongoose.connect(url)
    console.log('db connected')
}

module.exports= connectDB