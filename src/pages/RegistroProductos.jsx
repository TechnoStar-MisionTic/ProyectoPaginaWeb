import logo from "../media/images/logo.jpg"
import BotonGenerico from "../components/BotonGenerico.jsx"
import InputText from "../components/InputText.jsx"
import { Link } from "react-router-dom"

function RegistroProductos(){
    return(
        <div>
            <header>
                <nav>
                    <ul class="colorFont navBar">
                        <li>
                            <img src={logo} alt="Logo" class="logo" />
                        </li>
                        <Link to="/RegistroVentas">
                            <BotonGenerico titulo="Ventas"/>
                        </Link>
                        <BotonGenerico titulo="Facturas"/>
                        <BotonGenerico titulo="Productos"/>
                        <BotonGenerico titulo="Actualizar Productos"/>
                        <BotonGenerico titulo="Roles"/>
                        <BotonGenerico titulo="Cerrar sesión"/>
                    </ul>
                </nav>
            </header>

            <main>
                <div class="form">
                    <span>
                        <h2>Registro de productos</h2>
                    </span>

                    <div>
                        <form>
                            <InputText titulo="Identificador de venta" />
                            <InputText titulo="Identificador del producto" />
                            <InputText titulo="Precio unitario" />
                            <InputText titulo="Cantidad" />
                            <InputText titulo="Valor total de la venta" />
                            <InputText titulo="Reiniciar" />
                            <InputText titulo="Enviar" />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RegistroProductos