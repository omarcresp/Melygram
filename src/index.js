import page from 'page'

var main = document.getElementById('main-container')

page('/', function () {  // ctx y next son posible parametros
  main.innerHTML = 'Home <br /> <a href="/signup">Registrate</a>'
})

page('/signup', function () {
  main.innerHTML = 'Signup <br /> <a href="/">Ir a home</a>'
})

page()
