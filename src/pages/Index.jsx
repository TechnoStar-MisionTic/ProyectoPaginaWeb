import { Link } from "react-router-dom";

const Index = () =>{
    return(
        <Link to="/login">
            <button type="button" className="buttonForm">
                Iniciar sesión
            </button>
        </Link>
    );
}

export default Index;