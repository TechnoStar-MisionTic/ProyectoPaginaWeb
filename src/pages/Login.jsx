import logo from "../media/images/logo.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="inicio-box">
          <img className="logo" src={logo} alt="Logo"/>
          <h2> Imperio Musical</h2>          
          <div>
            <Link to="/RegistroProductos">
              <input type="submit" value="Ingresa con google" />
              <FontAwesomeIcon icon={faGoogle} color="white" className="googleIcon"/>
            </Link>
          </div>
        </div>
    )
}

export default Login;