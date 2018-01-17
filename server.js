var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.static('node_modules/jquery/dist'))
app.use(express.static('node_modules/materialize-css/dist/js'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Melygram' })
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Melygram - Signup' })
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Melygram - Signin' })
})

app.listen(3000, function () {
  console.log('Platzigram escuchando en el puerto 3000')
})
