
const express = require('express')
const app = express()

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(`Acessou: ${req.url}`)
    next()
})

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const dataRouter = require('./routes/data')
const signinRouter = require('./routes/signin')
const signupRouter = require('./routes/signup')
const usersRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/about', aboutRouter)
app.use('/data', dataRouter)
app.use('/signin', signinRouter)
app.use('/signup', signupRouter)
app.use('/users', usersRouter)

app.use((req, res) => {
    res.status(405).send('Erro 404 <a href="/">Voltar para o Index</a>')
})

module.exports = app;
