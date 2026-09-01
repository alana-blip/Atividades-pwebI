const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/signup')
})

router.get('/:userid', (req, res) => {
    res.router('users')
})

module.exports = router
