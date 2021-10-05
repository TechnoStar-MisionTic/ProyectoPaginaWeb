import "./styles/App.css";
import "./styles/estilos-registro-ventas.css";
import "./styles/roles.css"
import RegistroProductos from "./pages/RegistroProductos.jsx";
import Login from "./pages/Login.jsx";
import RegistroVentas from "./pages/RegistroVentas";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Roles from "./pages/Roles";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/RegistroProductos">
            <RegistroProductos />
          </Route>
          <Route path="/RegistroVentas">
            <RegistroVentas />
          </Route>
          <Route path="/Roles">
            <Roles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
