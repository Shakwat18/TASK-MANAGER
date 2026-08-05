const { default: mongoose, mongo } = require("mongoose");



const taskSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true['Text body is required']
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Register"
  }
},{timeseries:true})

const Task= mongoose.model('Task',taskSchema)

module.exports= Task