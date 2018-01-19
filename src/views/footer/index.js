import yo from 'yo-yo'
import translate from '../../translate'

var el = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l2 center-align">
        <!-- Cambiar idioma--><a href="#" data-activates="dropdown1" class="dropdown-button btn">
          ${translate.message('language')}
        </a>
        <!-- Dropdown Structure-->
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick="${lang.bind(null, 'es')}">${translate.message('spanish')}</a></li>
          <li><a href="#" onclick="${lang.bind(null, 'en-US')}">${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l7 center-align trademark">© 2018 Melygram</div>
    </div>
  </div>
</footer>`

function lang(locale) {
  localStorage.locale = locale

  location.reload()

  return false
}

document.body.appendChild(el)
