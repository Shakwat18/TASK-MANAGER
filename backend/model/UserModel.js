const Mongoose = require("mongoose");
const bcrypt= require('bcrypt')

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: (value) => {
            return bcrypt.hashSync(value, bcrypt.genSaltSync(10))
        }
    }

},{timestamps:true})

const User= Mongoose.model("Register",UserSchema)

module.exports= User