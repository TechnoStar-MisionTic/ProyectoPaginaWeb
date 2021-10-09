import InputText from "../components/InputText.jsx"
import InputNumber from "../components/InputNumber"
import TrRegProd from "../components/TrRegProd.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faRedoAlt} from '@fortawesome/free-solid-svg-icons'

function RegistroProductos(){
    return(
        <>
                <div className="flexContainerForm">
                    <div>
                        <h2 className="titulosH2">Registro de productos</h2>
                    </div>

                    <div>
                        <form className="formulario">
                            <InputText titulo="Identificador del producto" />
                            <InputText titulo="Nombre"/>
                            <InputText titulo="Descripción"/>
                            <InputNumber titulo="Precio unitario"/>
                            <InputNumber titulo="Cantidad"/>
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
                            Listado de productos
                            <input type="search" name="search" className="search" />
                            <FontAwesomeIcon icon={faSearch} color="darkblue" className="searchIcon"/>
                            <FontAwesomeIcon icon={faRedoAlt} color="green" className="reloadIcon"/>
                        </caption>
                        <thead>
                            <tr>
                                <th className="th">NOMBRE DEL PRODUCTO</th>
                                <th className="th">ID PRODUCTO</th>
                                <th className="th">PRECIO UNITARIO</th>
                                <th className="th">CANTIDAD</th>
                                <th className="th">ESTADO</th>
                                <th className="th">EDITAR</th>
                                <th className="th">BORRAR</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <TrRegProd nombreP="Saxofón" idProd="101" precioU="$1'100.300" cantidad="4"/>
                            <TrRegProd nombreP="Piano" idProd="102" precioU="$605.990" cantidad="9"/>
                            <TrRegProd nombreP="Flauta" idProd="103" precioU="$80.000" cantidad="12"/>
                            <TrRegProd nombreP="Microfono" idProd="104" precioU="$140.000" cantidad="9"/>
                            <TrRegProd nombreP="Parlante" idProd="105" precioU="$350.000" cantidad="5"/>
                            <TrRegProd nombreP="Guitarra" idProd="106" precioU="$400.000" cantidad="11"/>
                            <TrRegProd/>
                            <TrRegProd/>                            
                        </tbody>
                    </table>
                    <button type="button">Cargar</button>
                </div>
            <footer></footer>
        </>
    )
}

export default RegistroProductos;