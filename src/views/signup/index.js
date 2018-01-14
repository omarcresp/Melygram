import page from 'page'
import template from './template'

var main = document.getElementById('main-container')

page('/signup', function () {
  main.innerHTML = ''
  main.appendChild(template)
})
