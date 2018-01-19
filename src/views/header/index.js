import yo from 'yo-yo'
import translate from '../../translate'

var el = yo`<nav class="header">
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col s6 m4">
          <a href="/" class="platzigram-tittle layout-title">Meligram</a>
        </div>

        <div class="col s3 m2 offset-m6 offset-s3">
          <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
          <ul id="drop-user" class="dropdown-content">
            <li><a href="#">${translate.message('logout')}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>`

var header = document.getElementById('header')

header.innerHTML = ''
header.appendChild(el)
