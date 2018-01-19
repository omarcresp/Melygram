import yo from 'yo-yo'
import translate from '../../translate'

export default yo`<div class="col s12 m7">
  <div class="row"> <!-- Registrarse -->
    <div class="signup-box">
      <h1 class="platzigram-tittle">Meligram</h1>

      <form class="signup-form">
        <h2>${translate.message('signup-subheading')}</h2>

        <div class="section"> <!-- Iniciar sesion con Facebook -->
          <a href="#" class="btn btn-fb hide-on-med-and-down">${translate.message('signup-facebook')}</a>
          <a href="#" class="btn btn-fb hide-on-large-only">
            <i class="fa fa-facebook-official"></i> ${translate.message('signup-face')}
          </a>
        </div>

        <div class="divider"></div>

        <div class="section"> <!-- Formulario de registro -->
          <input type="email" name="email" placeholder="${translate.message('email')}">
          <input type="text" name="name" placeholder="${translate.message('fullname')}">
          <input type="text" name="user-name" placeholder="${translate.message('username')}">
          <input type="password" name="password" placeholder="${translate.message('password')}">

          <button class="btn waves-effect waves-light btn-signup" type="submit">
            ${translate.message('signup')}
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="row"> <!-- Iniciar sesión -->
    <div class="login-box">
      ${translate.message('singup.have-account')} <a href="/signin">${translate.message('signin')}</a>
    </div>
  </div>
</div>`
