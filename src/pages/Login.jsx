import logo from "../media/images/logo.jpg"

function Login(){
    return(
        <div className="inicio-box">
          <img className="logo" src={logo} alt="Logo"/>
          <h2> Imperio Musical</h2>
          <label for="E-mail">Usuario</label>
          <input type="text" placeholder="Usuario" />
          <label for="password">Contraseña</label>
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value="ingresar" />
          <input type="submit" value="Ingresa con google" />
          <a href="https://www.google.com/?hl=es" target="_blank"></a>
          <a href="#">¿Olvidaste tu contraseña?</a> <br />
          <a href="#">Registrate</a>
        </div>
    )
}

export default Login;