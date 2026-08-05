const express = require('express')
const { xss } = require('express-xss-sanitizer')
const helmet = require('helmet')
const hpp = require('hpp')
const morgan = require('morgan')
const router = require('./router/userRouter')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const Taskrouter = require('./router/taskRouter')


const app= express()

//security
app.use(hpp())
app.use(helmet())
app.use(xss())

//
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(passport.initialize())
require('./config/passport')

app.use('/api',router)
app.use('/api',Taskrouter)

module.exports= app