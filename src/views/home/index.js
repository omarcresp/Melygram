import page from 'page'
import template from './template'
import title from 'title'

var main = document.getElementById('main-container')

page('/', function () {  // ctx y next son posible parametros
  title('Melygram')

  main.innerHTML = ''
  main.appendChild(template)
})
