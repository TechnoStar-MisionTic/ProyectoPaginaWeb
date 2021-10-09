
function InputText({titulo, e}){
    return(
        <input type="text" onChange={e} class="inputs" placeholder={titulo}/>
    )
}

export default InputText;