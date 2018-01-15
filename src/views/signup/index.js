import page from 'page'
import box from './template'
import template from '../landing'
import title from 'title'

var main = document.getElementById('main-container')

page('/signup', function () {
  title('Melygram - Signup')

  main.innerHTML = ''
  main.appendChild(template(box))
})
