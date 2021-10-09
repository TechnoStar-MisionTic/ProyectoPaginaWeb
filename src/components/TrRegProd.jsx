import { useEffect,useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'




function TrRegProd({nombreP,idProd,precioU,cantidad}){
    const [estado,setEstado]=useState(false)
    return(
        <tr>
            <td className="td">{nombreP}</td>
            <td className="td">{idProd}</td>
            <td className="td">{precioU}</td>
            <td className="td">{cantidad}</td>
            
            {estado ? (
                <td>
                    <select name="estado">
                        <option value="disponible">Disponible</option>
                        <option value="agotado">No disponible</option>
                    </select>
                </td>
            ):(
                <td>
                    <select name="estado" disabled>
                        <option value="disponible">Disponible</option>
                        <option value="agotado">No disponible</option>
                    </select>
                </td>
            )}
            
            
            <td>
                <button type="button" className="buttonIcon" onClick={(e)=>{setEstado(!estado)}}>
                    <FontAwesomeIcon icon={faEdit} color="white"/>
                </button>
            </td>
            <td>
                <FontAwesomeIcon icon={faTrashAlt} color="red"/>
            </td>
            
        </tr>
    )
}

export default TrRegProd;