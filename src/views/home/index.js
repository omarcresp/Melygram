import page from 'page'
import template from './template'
import title from 'title'

var main = document.getElementById('main-container')

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

page('/', function () {  // ctx y next son posible parametros
  title('Melygram')

  main.innerHTML = ''
  main.appendChild(template(imagesAPI))
})
