var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.static('node_modules/jquery/dist'))
app.use(express.static('node_modules/materialize-css/dist/js'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function (err) {
  if (err) {
    console.log('Hola Mundo')

    return process.exit(1)
  }

  console.log('Platzigram escuchando en el puerto 3000')
})
