import page from 'page'
import template from './template'

var main = document.getElementById('main-container')

page('/', function () {  // ctx y next son posible parametros
  main.innerHTML = ''
  main.appendChild(template)
})
