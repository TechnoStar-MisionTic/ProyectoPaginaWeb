import BotonGenerico from "./BotonGenerico.jsx";
import logo from "../media/images/logo.jpg"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <ul class="colorFont navBar">
                <li>
                    <img src={logo} alt="Logo" class="logo" />
                </li>
                <Link to="/RegistroVentas">
                    <BotonGenerico titulo="Ventas"/>
                </Link>
                <Link to ="/RegistroProductos">
                    <BotonGenerico titulo="Productos"/>
                </Link>
                <Link>
                    <BotonGenerico titulo="Roles"/>                        
                </Link>
                <BotonGenerico titulo="Cerrar sesión"/>
             </ul>
        </nav>
    )
}

export default NavBar;