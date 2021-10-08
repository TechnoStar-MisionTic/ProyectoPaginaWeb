function Roles(){
    return(
        <>
            <form >
                <div className="roles">
                    <h2>Gestion De Roles</h2>
                    <input type="text" placeholder="Usuario" />
                    <h2>Datos Del Usuario</h2>
                    <input type="text" placeholder="Nombre" disabled/>
                    <input type="email" placeholder="Correo" disabled/> <br/>
                    <input type="text" placeholder="Privilegios"disabled/>
                    <div className="flexing">
                        <select name="Estado">
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Visitante">Visitante</option>
                        </select>
                        <input type="submit" value="Enviar"/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Roles;