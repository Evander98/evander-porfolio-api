const router = require('express').Router()
const { mailer } = require('../controller').mailerController

router.post('/send-mail', mailer)

module.exports = router