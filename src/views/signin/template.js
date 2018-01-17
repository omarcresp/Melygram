import yo from 'yo-yo'

export default yo`<div class="col s12 m7">
  <div class="row"> <!-- Registrarse -->
    <div class="signup-box">
      <h1 class="platzigram-tittle">Meligram</h1>

      <form class="signup-form">
        <div class="section"> <!-- Iniciar sesion con Facebook -->
          <a href="#" class="btn btn-fb hide-on-med-and-down">Iniciar sesión con Facebook</a>
          <a href="#" class="btn btn-fb hide-on-large-only">
            <i class="fa fa-facebook-official"></i> Iniciar sesión
          </a>
        </div>

        <div class="divider"></div>

        <div class="section"> <!-- Formulario de registro -->
          <input type="text" name="user-name" placeholder="Nombre de Usuario">
          <input type="password" name="password" placeholder="Contraseña">

          <button class="btn waves-effect waves-light btn-signup" type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  </div>

  <div class="row"> <!-- Iniciar sesión -->
    <div class="login-box">
      ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
    </div>
  </div>
</div>`
