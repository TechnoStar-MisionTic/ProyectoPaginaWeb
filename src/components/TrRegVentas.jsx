import { useEffect,useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

function TrRegProd({nombreP,idVenta,idProd,precioU,cantidad,valorF}){
    const [estado,setEstado]=useState(false)
    return(
        <tr>
            <td className="td">{nombreP}</td>
            <td className="td">{idVenta}</td>
            <td className="td">{idProd}</td>

            {estado ? (
                <td>
                <select name="estado" >
                    <option value="entregado">Entregado</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="cancelado">Cancelado</option>
                </select>
                </td>
            ):(
                <td>
                    <select name="estado" disabled>
                        <option value="entregado">Entregado</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </td>
            )}
            
            <td className="td">{precioU}</td>
            <td className="td">{cantidad}</td>
            <td className="td">{valorF}</td>
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