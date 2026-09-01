const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Página: Signin'))

module.exports = router