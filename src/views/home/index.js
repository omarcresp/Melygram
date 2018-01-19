import page from 'page'
import template from './template'
import title from 'title'

import '../header'

var main = document.getElementById('main-container')

console.log('Global')

function loadPictures (ctx, next) {
  fetch('/api/pictures')
    .then(response => {
      response.json().then(data => {
        console.log(data)

        ctx.imagesAPI = data

        next()
      })
    })
    .catch(err => {
      console.log(err)
    })
}

page('/', loadPictures, function (ctx, next) {  // ctx y next son posible parametros
  title('Melygram')

  console.log('Funciona')

  main.innerHTML = ''
  main.appendChild(template(ctx.imagesAPI))
})
