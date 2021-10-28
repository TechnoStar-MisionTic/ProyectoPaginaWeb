import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRedoAlt,
  faEdit,
  faTrashAlt,
  faCheck,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerVentas } from "../utils/api";
import axios from "axios";

const RegistroVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [actulizarTabla, setActulizarTabla] = useState(true);
  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(setVentas, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setEjecutarConsulta(true);
  }, [actulizarTabla]);

  return (
    <>
      <div className="mainContainer">
        <FormularioVentas
          agregarVenta={setVentas}
          listaVentas={ventas}
          setActulizarTabla={setActulizarTabla}
          actulizarTabla={actulizarTabla}
        />
        <TablaVentas
          setActulizarTabla={setActulizarTabla}
          listaVentas={ventas}
          setEjecutarConsulta={setEjecutarConsulta}
        />
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
};

const FilaVenta = ({ ventas, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    _id: ventas._id,
    nombreP: ventas.nombreP,
    idVenta: ventas.idVenta,
    idProd: ventas.idProd,
    precioU: ventas.precioU,
    cantidad: ventas.cantidad,
  });

  const actualizarVentas = async () => {
    const options = {
      method: "PATCH",
      url: `https://whispering-coast-59996.herokuapp.com/RegistroVentas/${ventas._id}`,
      headers: { "Content-Type": "application/json" },
      data: { ...infoNuevaVenta },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Venta modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error modificando el venta");
      });
  };

  const eliminarVentas = async () => {
    const options = {
      method: "DELETE",
      url: "https://whispering-coast-59996.herokuapp.com/RegistroVentas/eliminar",
      headers: { "Content-Type": "application/json" },
      data: { id: ventas._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Venta eliminado con éxito");
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error eliminando la venta");
        console.error(error);
      });
    setOpenDialog(true);
  };
  return (
    <tr className="tr">
      {edit ? (
        <>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={ventas.nombreP}
            ></input>
          </td>
          <td className="td">{ventas.idVenta}</td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={ventas.idProd}
            ></input>
          </td>
          <td>
            <select className="optionText" name="estado">
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="entregado">Entregado</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={ventas.precioU}
            ></input>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={ventas.cantidad}
            ></input>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={ventas.valorF}
            ></input>
          </td>
          <td>
            <Tooltip title="Confirmar edicion" arrow>
              <button
                type="button"
                className="buttonIcon"
                onClick={() => actualizarVentas()}
              >
                <FontAwesomeIcon icon={faCheck} color="white" />
              </button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="Cancelar edición" arrow>
              <button
                type="button"
                className="buttonIcon"
                onClick={() => setEdit(false)}
              >
                <FontAwesomeIcon icon={faBan} color="orange" />
              </button>
            </Tooltip>
          </td>
        </>
      ) : (
        <>
          <td className="td">{ventas.nombreP}</td>
          <td className="td">{ventas.idVenta}</td>
          <td className="td">{ventas.idProd}</td>
          <td>
            <select className="optionText" name="estado" disabled>
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="entregado">Entregado</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </td>
          <td className="td">{ventas.precioU}</td>
          <td className="td">{ventas.cantidad}</td>
          <td className="td">{ventas.valorF}</td>
          <td>
            <Tooltip title="Editar" arrow>
              <button
                type="button"
                className="buttonIcon"
                onClick={() => setEdit(!edit)}
              >
                <FontAwesomeIcon icon={faEdit} color="white" />
              </button>
            </Tooltip>
          </td>

          <td>
            <Tooltip title="Eliminar" arrow>
              <button
                type="button"
                className="buttonIcon"
                onClick={() => setOpenDialog(true)}
              >
                <FontAwesomeIcon icon={faTrashAlt} color="red" />
              </button>
            </Tooltip>

            <Dialog open={openDialog}>
              <div className="dialog">
                <h2 className="dialogTitle">
                  ¿Esta seguro que desea eliminar?
                </h2>
                <div className="dialogContainerButton">
                  <button
                    className="dialogButton dialogButtonSi"
                    onClick={() => eliminarVentas()}
                  >
                    Si
                  </button>
                  <button
                    className="dialogButton dialogButtonNo"
                    onClick={() => setOpenDialog(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </Dialog>
          </td>
        </>
      )}
    </tr>
  );
};

const FormularioVentas = ({ setActulizarTabla, actulizarTabla }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const options = {
      method: "POST",
      url: "https://whispering-coast-59996.herokuapp.com/RegistroVentas",
      headers: { "Content-Type": "application/json" },
      data: {
        nombreP: nuevaVenta.nombreP,
        idVenta:nuevaVenta.idVenta,
        idProd: nuevaVenta.idProd,
        precioU: nuevaVenta.precioU,
        cantidad: nuevaVenta.cantidad,
        valorF: nuevaVenta.valorF,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Venta agregado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando un Venta");
      });
    setActulizarTabla(!actulizarTabla);
  };

  return (
    <div className="flexContainerForm flexContainerFormVenta">
      <div>
        <h2 className="titulosH2">Registro de Ventas</h2>
      </div>
      <div>
        <form ref={form} onSubmit={submitForm} className="formulario">
          <input
            name="nombreP"
            type="text"
            className="inputs"
            placeholder="Nombre"
            required
          />
          <input
            name="idVenta"
            type="text"
            className="inputs"
            placeholder="ID venta"
            required
          />
          <input
            name="idProd"
            type="text"
            className="inputs"
            placeholder="ID producto"
            required
          />
          <input
            name="precioU"
            type="number"
            className="inputs"
            placeholder="Precio unitario"
            min={1}
            required
          />
          <input
            name="cantidad"
            type="number"
            className="inputs"
            placeholder="Cantidad"
            min={1}
            max={99}
            required
          />
          <input
            name="valorF"
            type="number"
            className="inputs"
            placeholder="Valor Final"
          />
          <div className="buttonFormContainer">
            <input type="reset" value="Reiniciar" className="buttonForm" />
            <button type="submit" className="buttonForm">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltradas(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  return (
    <div className="flexContainerTable">
      <table className="table">
        <caption className="caption">
          Registro de ventas
          <input
            type="search"
            name="search"
            className="search"
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
            placeholder="IDVENTA"
          />
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
          {ventasFiltradas.map((ventas) => {
            return (
              <FilaVenta
                key={nanoid()}
                ventas={ventas}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroVentas;
