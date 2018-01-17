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
    'likes': 57,
    'liked': false
  },
  {
    'url': './images/office.jpg',
    'user': {
      'avatar': 'https://static.platzi.com/media/avatars/JackCres_8fd44b90-2b85-41aa-bf83-0da695b2e702.png',
      'username': 'JackCres'
    },
    'likes': 25,
    'liked': false
  }
]

page('/', function () {  // ctx y next son posible parametros
  title('Melygram')

  main.innerHTML = ''
  main.appendChild(template(imagesAPI))
})
