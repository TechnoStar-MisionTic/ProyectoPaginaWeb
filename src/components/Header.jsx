import BotonGenerico from "./BotonGenerico.jsx";
import logo from "../media/images/logo.jpg"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <>
            <header>
                <nav>
                    <ul className="colorFont navBar">
                        <li>
                            <img src={logo} alt="Logo" className="logo" />
                        </li>
                        <Link to="/RegistroVentas">
                            <BotonGenerico titulo="Ventas"/>
                        </Link>
                        <Link to ="/RegistroProductos">
                            <BotonGenerico titulo="Productos"/>
                        </Link>
                        <Link to ="/Roles">
                            <BotonGenerico titulo="Roles"/>                        
                        </Link>
                        <Link to="/Index">
                            <BotonGenerico titulo="Cerrar sesión"/>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;