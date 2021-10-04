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
        </tr>
    )
}

export default TrRegProd;