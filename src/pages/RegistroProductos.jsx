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
import { obtenerProductos } from "../utils/api";
import axios from "axios";

const RegistroProductos = () => {
  const [productos, setProductos] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [actulizarTabla, setActulizarTabla] = useState(true);
  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setEjecutarConsulta(true);
  }, [actulizarTabla]);

  return (
    <>
      <div className="mainContainer">
        <FormularioProductos
          agregarProductos={setProductos}
          listaProductos={productos}
          setActulizarTabla={setActulizarTabla}
          actulizarTabla={actulizarTabla}
        />
        <TablaProductos
          setActulizarTabla={setActulizarTabla}
          listaProductos={productos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
};

const FilaProductos = ({ productos, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: productos._id,
    nombreP: productos.nombreP,
    idProd: productos.idProd,
    precioU: productos.precioU,
    cantidad: productos.cantidad,
  });

  const actualizarProducto = async() => {
    const options = {
      method: "PATCH",
      url: `http://localhost:5000/registroProductos/${productos._id}`,
      headers: { "Content-Type": "application/json" },
      data: {...infoNuevoProducto},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el producto');
        console.error(error);
      });
  };

  const eliminarProducto = async() =>{
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/registroProductos/eliminar',
      headers: {'Content-Type': 'application/json'},
      data: {id: productos._id}
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data);
      toast.success('vehículo eliminado con éxito');
        setEjecutarConsulta(true);
    }).catch(function (error) {
      toast.error('Error eliminando el vehículo');
      console.error(error);
    });
    setOpenDialog(true);
  }
  return (
    <tr className="tr">
      {edit ? (
        <>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={productos.nombreP}
            ></input>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={productos.idProd}
            ></input>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={productos.precioU}
            ></input>
          </td>
          <td>
            <input
              className="inputs inputsEdit"
              defaultValue={productos.cantidad}
            ></input>
          </td>
          <td>
            <select name="estado">
              <option value="disponible">Disponible</option>
              <option value="agotado">No disponible</option>
            </select>
          </td>
          <td>
            <Tooltip title="Confirmar edicion" arrow>
              <button
                type="button"
                className="buttonIcon"
                onClick={() => actualizarProducto()}
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
          <td className="td">{productos.nombreP}</td>
          <td className="td">{productos.idProd}</td>
          <td className="td">{productos.precioU}</td>
          <td className="td">{productos.cantidad}</td>
          <td>
            <select className="optionText" name="estado" disabled>
              <option value="disponible">Disponible</option>
              <option value="agotado">No disponible</option>
            </select>
          </td>
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
                  <button className="dialogButton dialogButtonSi" onClick={()=>eliminarProducto()}>Si</button>
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

const FormularioProductos = ({ setActulizarTabla, actulizarTabla }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: "POST",
      url: "http://localhost:5000/registroProductos",
      headers: { "Content-Type": "application/json" },
      data: {
        nombreP: nuevoProducto.nombreP,
        idProd: nuevoProducto.idProd,
        precioU: nuevoProducto.precioU,
        cantidad: nuevoProducto.cantidad,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando un producto");
      });
    setActulizarTabla(!actulizarTabla);
  };

  return (
    <div className="flexContainerForm flexContainerFormVenta">
      <div>
        <h2 className="titulosH2">Registro de productos</h2>
      </div>
      <div>
        <form
          ref={form}
          onSubmit={submitForm}
          className="formulario formularioProductos"
        >
          <input
            name="nombreP"
            type="text"
            class="inputs"
            placeholder="Nombre"
            required
          />
          <input
            name="idProd"
            type="text"
            class="inputs"
            placeholder="Identificador del producto"
            required
          />
          <input
            name="precioU"
            type="number"
            class="inputs"
            placeholder="Precio unitario"
            min={1}
            required
          />
          <input
            name="cantidad"
            type="number"
            class="inputs"
            placeholder="Cantidad"
            min={1}
            max={99}
            required
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

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([
    listaProductos,
  ]);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div className="flexContainerTable">
      <table className="table">
        <caption className="caption">
          Listado de productos
          <input
            type="search"
            name="search"
            className="search"
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
            placeholder="Nombre"
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
            <th className="th">ID PRODUCTO</th>
            <th className="th">PRECIO UNITARIO</th>
            <th className="th">CANTIDAD</th>
            <th className="th">ESTADO</th>
            <th className="th">EDITAR</th>
            <th className="th">BORRAR</th>
          </tr>
        </thead>

        <tbody>
          {productosFiltrados.map((productos) => {
            return (
              <FilaProductos
                key={nanoid()}
                productos={productos}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroProductos;
