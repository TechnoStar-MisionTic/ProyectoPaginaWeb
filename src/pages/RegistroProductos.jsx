import logo from "../media/images/logo.jpg"
import BotonGenerico from "../components/BotonGenerico.jsx"
import InputText from "../components/InputText.jsx"
import InputNumber from "../components/InputNumber"
import TrRegProd from "../components/TrRegProd"
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
                <div className="flexConteinerForm">
                    <div>
                        <h2 className="titulosH2">Registro de Productos</h2>
                    </div>

                    <div>
                        <form className="formulario">
                            <InputText titulo="Identificador de venta" opcion="true"/>
                            <InputText titulo="Identificador del producto" />
                            <InputNumber titulo="Precio unitario"/>
                            <InputNumber titulo="Cantidad" />
                            <InputText titulo="Valor final" />
                            <div className="buttonFormContainer">
                                <input type="reset" value="Reiniciar" className="buttonForm" />
                                <input type="submit" value="Enviar" className="buttonForm"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flexContainerTable">
                    <table className="table">
                        <caption className="caption">
                            Registro de ventas
                        </caption>
                        <thead>
                            <tr>
                                <th className="th">NOMBRE DEL PRODUCTO</th>
                                <th className="th">ID VENTA</th>
                                <th className="th">ID PRODUCTO</th>
                                <th className="th">ESTADO</th>
                                <th className="th">PRECIO UNITARIO</th>
                                <th className="th">CANTIDAD</th>
                                <th className="th">VALOR FINAL</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <TrRegProd nombreP="Saxofón" idVenta="001" idProd="101" precioU="$1'100.300" cantidad="1" valorF="$1'100.300"/>
                            <TrRegProd nombreP="Piano" idVenta="002" idProd="102" precioU="$605.990" cantidad="4" valorF="$2'423960"/>
                            <TrRegProd nombreP="Flauta" idVenta="003" idProd="103" precioU="$80.000" cantidad="2" valorF="$160.000"/>
                            <TrRegProd nombreP="Microfono" idVenta="004" idProd="104" precioU="$140.000" cantidad="1" valorF="$140.000"/>
                            <TrRegProd nombreP="Parlante" idVenta="005" idProd="105" precioU="$350.000" cantidad="3" valorF="$1'050.000"/>
                            <TrRegProd nombreP="Guitarra" idVenta="006" idProd="106" precioU="$400.000" cantidad="2" valorF="$800.000"/>
                            <TrRegProd/>
                            <TrRegProd/>
                            <TrRegProd/>
                            <TrRegProd/>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default RegistroProductos