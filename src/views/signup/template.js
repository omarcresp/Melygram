import yo from 'yo-yo'

export default yo`<div class="container">
<div class="row">
<div class="col s10 m12 push-s1">
  <div class="row">
    <div class="col m5 hide-on-small-only">
      <img src="./images/iphone.png" class="iphone">
    </div>

    <div class="col s12 m7">
      <div class="row"> <!-- Registrarse -->
        <div class="signup-box">
          <h1 class="platzigram-tittle">Platzigram</h1>
  
          <form class="signup-form">
            <h2>Regístrate para ver fotos de tus amigos</h2>

            <div class="section"> <!-- Iniciar sesion con Facebook -->
              <a href="#" class="btn btn-fb hide-on-med-and-down">Iniciar sesión con Facebook</a>
              <a href="#" class="btn btn-fb hide-on-large-only">Iniciar sesión</a>
            </div>

            <div class="divider"></div>

            <div class="section"> <!-- Formulario de registro -->
              <input type="email" name="email" placeholder="Correo Electronico">
              <input type="text" name="name" placeholder="Nombre Completo">
              <input type="text" name="user-name" placeholder="Nombre de Usuario">
              <input type="password" name="password" placeholder="Contraseña">

              <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
            </div>
          </form>
        </div>
      </div>

      <div class="row"> <!-- Iniciar sesión -->
        <div class="login-box">
          ¿Tienes una cuenta? <a href="/signin">Entrar</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>`