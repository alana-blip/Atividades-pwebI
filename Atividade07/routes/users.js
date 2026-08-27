const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/signup')
})

router.get('/:userid', (req, res) => {
    res.send(`Bem-Vindo! Seu ID é ${req.params.userid}`)
})

module.exports = router