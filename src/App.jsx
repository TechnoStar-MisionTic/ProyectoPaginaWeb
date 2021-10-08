import "./styles/App.css";
import "./styles/estilos-registro-ventas.css";
import "./styles/roles.css"
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import RegistroProductos from "./pages/RegistroProductos.jsx";
import RegistroVentas from "./pages/RegistroVentas";
import Roles from "./pages/Roles";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LayoutLanding from "./layout/LayoutLanding"
import LayoutPrincipal from "./layout/LayoutPrincipal";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/RegistroProductos', '/RegistroVentas', '/Roles']}>
            <LayoutPrincipal>
              <Switch>
                <Route path='/RegistroProductos'>
                  <RegistroProductos/>
                </Route>
                <Route path='/RegistroVentas'>
                  <RegistroVentas />
                </Route>
                <Route path='/Roles'>
                  <Roles/>
                </Route>
              </Switch>
            </LayoutPrincipal>
          </Route>
          <Route path={['/Login', '/Index']}>
            <Switch>
              <Route path='/Login'>
                <Login />
              </Route>
              <Route path='/Index'>
                <Index/>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
