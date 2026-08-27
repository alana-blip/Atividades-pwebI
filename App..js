const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) =>{
    console.log(`Acessou: ${req.url}`)
    next()
})

const pageIndex = (req, res) => {res.send('O nome da página: Index')}
const pageAbout = (req, res) => {res.send('O nome da página: About')}
const pageData = (req, res) => {res.send('O nome da página: Data')}
const pageSignin = (req, res) => {res.send('O nome da página: Signin')}
const pageSignup = (req, res) => {res.send('O nome da página: Signup')}



app.get('/', pageIndex)
app.get('/about', pageAbout)
app.post('/data', pageData)
app.get('/signin', pageSignin)
app.get('/signup', pageSignup)
app.get('/users/:usersid', (req, res) => {
    res.send(`Bem vindo!!! Pessoa com ID: ${req.params.usersid}`)
})

app.get('/users', (req, res) => {
  res.redirect('/signup')
})

app.use ((req, res) => {
    res.status(404).send('Erro 404 <a href ="/">Voltar opara a página Index </a>')
})

app.listen(port, () => console.log(`Rodando na porta: ${port}`))
