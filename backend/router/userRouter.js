const express = require('express')
const { userRegister, userLogin, profileDetails, profileUpdate, recoverVerifyEmail, recoverVerifyOpt, resetPassword } = require('../controllers/userController')
const auth = require('../middleware/authentication')
const passport = require('passport')
const expressRateLimiter = require('express-rate-limiter')
const rateLimit  = require('express-rate-limit')

const router = express.Router()


const limiter= rateLimit({
    window:1*60*1000,
    limit:5
})

router.post('/register', userRegister)
router.post('/login',limiter, userLogin)

// protected
router.get('/profile', auth, profileDetails)
// router.get('/profile', passport.authenticate('jwt', { session: false }), profileDetails)
router.put('/profileUpdate', auth, profileUpdate)
router.get('/emailverify/:email', auth, recoverVerifyEmail)
router.post('/otpverify/:otp/:email', auth, recoverVerifyOpt)
router.post('/resetpassword', auth, resetPassword)

module.exports = router