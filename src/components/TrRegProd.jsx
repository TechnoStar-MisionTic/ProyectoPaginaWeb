import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'



function TrRegProd({nombreP,idProd,precioU,cantidad}){
    return(
        <tr>
            <td className="td">{nombreP}</td>
            <td className="td">{idProd}</td>
            <td className="td">{precioU}</td>
            <td className="td">{cantidad}</td>
            <td>
                <select name="estado">
                    <option value="disponible">Disponible</option>
                    <option value="agotado">No disponible</option>
                </select>
            </td>
            
            <td className="icons">
                <FontAwesomeIcon icon={faEdit} color="white"/>
            </td>
            <td>
                <FontAwesomeIcon icon={faTrashAlt} color="red"/>
            </td>
            
        </tr>
    )
}

export default TrRegProd;