import Header from "../components/Header.jsx"
import InputText from "../components/InputText.jsx"
import InputNumber from "../components/InputNumber"
import TrRegVentas from "../components/TrRegVentas"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faRedoAlt} from '@fortawesome/free-solid-svg-icons'

function RegistroProductos(){
    return(
        <>
            <div className="flexContainerForm flexContainerFormVenta">
                <div>
                    <h2 className="titulosH2">Registro de Ventas</h2>
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
                        <input type="search" name="search" className="search" />
                        <FontAwesomeIcon icon={faSearch} color="red" className="searchIcon"/>
                        <FontAwesomeIcon icon={faRedoAlt} color="green" className="reloadIcon"/>
                    </caption>
                    <thead>
                        <tr>
                            <th className="th">NOMBRE</th>
                            <th className="th">IDVENTA</th>
                            <th className="th">IDPROD</th>
                            <th className="th">ESTADO</th>
                            <th className="th">PRECIO/U</th>
                            <th className="th">CANTIDAD</th>
                            <th className="th">VALOR FINAL</th>
                            <th className="th">EDITAR</th>
                            <th className="th">BORRAR</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <TrRegVentas nombreP="Saxofón" idVenta="001" idProd="101" precioU="$1'100.300"cantidad="1" valorF="$1'100.300"/>
                        <TrRegVentas nombreP="Piano" idVenta="002" idProd="102" precioU="$605.990"cantidad="4" valorF="$2'423960"/>
                        <TrRegVentas nombreP="Flauta" idVenta="003" idProd="103" precioU="$80.000"cantidad="2" valorF="$160.000"/>
                        <TrRegVentas nombreP="Microfono" idVenta="004" idProd="104" precioU="$140.000"cantidad="1" valorF="$140.000"/>
                        <TrRegVentas nombreP="Parlante" idVenta="005" idProd="105" precioU="$350.000"cantidad="3" valorF="$1'050.000"/>
                        <TrRegVentas nombreP="Guitarra" idVenta="006" idProd="106" precioU="$400.000"cantidad="2" valorF="$800.000"/>
                        <TrRegVentas/>
                        <TrRegVentas/>
                        <TrRegVentas/>
                        <TrRegVentas/>
                    </tbody>
                </table>
                
            </div>
        </>
    )
}

export default RegistroProductos