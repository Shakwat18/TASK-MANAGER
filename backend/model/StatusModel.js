const  mongoose = require("mongoose");



const Schema= new mongoose.Schema({
    deleteCount:{
        type: Number,
    },
    updateCount:{
         type: Number
    },
createCount:{
         type: Number
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Register"
  }
})

const  StatusCount= mongoose.model('StatusCount',Schema)
module.exports= StatusCount