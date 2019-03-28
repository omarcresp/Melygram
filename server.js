var express = require('express')
var multer = require('multer')
var ext = require('file-extension')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + ext(file.originalname))
  }
})
var upload = multer({storage: storage}).single('picture')

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

app.get('/api/pictures', function (req, res) {
  var imagesAPI = [
    {
      'url': './images/Ruta_Platzi.png',
      'user': {
        'avatar': 'https://static.platzi.com/media/avatars/JackCres_8fd44b90-2b85-41aa-bf83-0da695b2e702.png',
        'username': 'JackCres'
      },
      'likes': 1,
      'liked': false,
      'date': new Date()
    },
    {
      'url': './images/office.jpg',
      'user': {
        'avatar': 'https://static.platzi.com/media/avatars/JackCres_8fd44b90-2b85-41aa-bf83-0da695b2e702.png',
        'username': 'JackCres'
      },
      'likes': 1,
      'liked': true,
      'date': new Date().setDate(new Date().getDate() - 10)
    }
  ]

  setTimeout(function () {
    res.send(imagesAPI)
  }, 5000)
})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err)

      return res.status(500).send('Error Subiendo el archivo')
    } else {
      res.send('Archivo cargado exitosamente')
    }
  })
})

// Escuchar el puerto 8080

app.listen(8080, function () {
  console.log('Platzigram escuchando en el puerto 8080')
})
