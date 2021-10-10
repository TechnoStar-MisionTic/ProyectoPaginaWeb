import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRedoAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

const VentasBD = [
  {
    nombreP: "Saxofón",
    idVenta: 1,
    idProd: 101,
    precioU: 1100300,
    cantidad: 1,
    valorF: 1100300,
  },
  {
    nombreP: "Piano",
    idVenta: 2,
    idProd: 102,
    precioU: 605990,
    cantidad: 1,
    valorF: 605990,
  },
  {
    nombreP: "Flauta",
    idVenta: 3,
    idProd: 103,
    precioU: 80000,
    cantidad: 3,
    valorF: 240000,
  },
  {
    nombreP: "Microfono",
    idVenta: 4,
    idProd: 104,
    precioU: 140000,
    cantidad: 2,
    valorF: 280000,
  },
  {
    nombreP: "Parlante",
    idVenta: 5,
    idProd: 105,
    precioU: 350000,
    cantidad: 1,
    valorF: 350000,
  },
  {
    nombreP: "Guitarra",
    idVenta: 6,
    idProd: 106,
    precioU: 400000,
    cantidad: 2,
    valorF: 800000,
  },
];
const RegistroVentas = () => {
  const [ventas, setVentas] = useState([]);
  useEffect(() => {
    setVentas(VentasBD);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <FormularioVentas listaVentas={ventas} agregarVenta={setVentas}/>
        <TablaVentas listaVentas={ventas} />
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
};

const FormularioVentas = ({listaVentas,agregarVenta}) => {
  const [nombre,setNombre] = useState()
  const [idVenta, setIdVenta] = useState();
  const [idProducto, setIdProducto] = useState();
  const [precioU, setPrecioU] = useState();
  const [cantidad, setCantidad] = useState();
  const [valorFinal, setValorFinal] = useState();

  const enviarDatosBackend = () => {
    agregarVenta([...listaVentas,{nombreP:nombre,idVenta:idVenta,idProd:idProducto,precioU:precioU,cantidad:cantidad,valorF:valorFinal}])
    toast.success("Agregado correctamente");
  };
  return (
    <div className="flexContainerForm flexContainerFormVenta">
      <div>
        <h2 className="titulosH2">Registro de Ventas</h2>
      </div>
      <div>
        <form className="formulario">
          <input
            type="text"
            className="inputs"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputs"
            placeholder="ID venta"
            value={idVenta}
            onChange={(e) => {
              setIdVenta(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputs"
            placeholder="ID producto"
            value={idProducto}
            onChange={(e) => {
              setIdProducto(e.target.value);
            }}
          />
          <input
            type="number"
            className="inputs"
            placeholder="Precio unitario"
            value={precioU}
            onChange={(e) => {
              setPrecioU(e.target.value);
            }}
          />
          <input
            type="number"
            className="inputs"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          />
          <input
            type="number"
            className="inputs"
            placeholder={valorFinal}
            value={valorFinal}
            onChange={(e) => {
              setValorFinal();
            }}
            disabled
          />
          <div className="buttonFormContainer">
            <input type="reset" value="Reiniciar" className="buttonForm" />
            <button
              type="button"
              className="buttonForm"
              onClick={enviarDatosBackend}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const TablaVentas = ({ listaVentas }) => {
  const [estado, setEstado] = useState(false);
  return (
    <div className="flexContainerTable">
      <table className="table">
        <caption className="caption">
          Registro de ventas
          <input type="search" name="search" className="search" />
          <FontAwesomeIcon
            icon={faSearch}
            color="darkblue"
            className="searchIcon"
          />
          <FontAwesomeIcon
            icon={faRedoAlt}
            color="green"
            className="reloadIcon"
          />
        </caption>
        <thead>
          <tr>
            <th className="th">NOMBRE</th>
            <th className="th">IDVENTA</th>
            <th className="th">IDPROD</th>
            <th className="th">ESTADO</th>
            <th className="th">PRECIO/U</th>
            <th className="th">CANTIDAD</th>
            <th className="th">VALOR FINAL</th>
            <th className="th">EDITAR</th>
            <th className="th">BORRAR</th>
          </tr>
        </thead>

        <tbody>
          {listaVentas.map((ventas) => {
            return (
              <tr>
                <td className="td">{ventas.nombreP}</td>
                <td className="td">{ventas.idVenta}</td>
                <td className="td">{ventas.idProd}</td>
                {estado ? (
                  <td>
                    <select name="estado">
                      <option value="entregado">Entregado</option>
                      <option value="pendiente">Pendiente</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </td>
                ) : (
                  <td>
                    <select name="estado" disabled>
                      <option value="entregado">Entregado</option>
                      <option value="pendiente">Pendiente</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </td>
                )}
                <td className="td">{ventas.precioU}</td>
                <td className="td">{ventas.cantidad}</td>
                <td className="td">{ventas.valorF}</td>
                <td>
                  <button
                    type="button"
                    className="buttonIcon"
                    onClick={(e) => {
                      setEstado(!estado);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} color="white" />
                  </button>
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrashAlt} color="red" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroVentas;
