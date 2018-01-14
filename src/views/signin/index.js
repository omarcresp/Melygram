import page from 'page'
import box from './template'
import template from '../landing'

var main = document.getElementById('main-container')

page('/signin', function () {
  main.innerHTML = ''
  main.appendChild(template(box))
})
