const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/signup')
})

router.get('/:userid', (req, res) => {
    res.render('profile', {
        title: 'Perfil do Usuário',
        userid: req.params.userid
    })
})

module.exports = router
