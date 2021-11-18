const router = require('express').Router()
const {login, register} = require('../controllers/authcontroller')
const { validate } = require('../vaidators')
const {rules: registrationRules} = require('../vaidators/auth/register')
const {rules: loginRules} = require('../vaidators/auth/login')

router.post('/login',[loginRules, validate], login)

router.post('/Register',[registrationRules, validate], register)

module.exports = router