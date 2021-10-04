function TrRegProd({nombreP,idVenta,idProd,precioU,cantidad,valorF}){
    return(
        <tr>
            <td className="td">{nombreP}</td>
            <td className="td">{idVenta}</td>
            <td className="td">{idProd}</td>
            <td>
                <select name="estado">
                    <option value="entregado">Entregado</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="cancelado">Cancelado</option>
                </select>
            </td>
            <td className="td">{precioU}</td>
            <td className="td">{cantidad}</td>
            <td className="td">{valorF}</td>
        </tr>                    
    )
}

export default TrRegProd;