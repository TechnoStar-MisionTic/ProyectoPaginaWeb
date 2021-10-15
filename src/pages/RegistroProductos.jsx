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

const productosBD = [
  {
    nombreP: "Saxofón",
    idProd: 101,
    precioU: 1100300,
    cantidad: 4,
  },
  {
    nombreP: "Piano",
    idProd: 102,
    precioU: 605990,
    cantidad: 9,
  },
  {
    nombreP: "Flauta",
    idProd: 103,
    precioU: 80000,
    cantidad: 12,
  },
  {
    nombreP: "Microfono",
    idProd: 104,
    precioU: 140000,
    cantidad: 9,
  },
  {
    nombreP: "Parlante",
    idProd: 105,
    precioU: 350000,
    cantidad: 5,
  },
  {
    nombreP: "Guitarra",
    idProd: 106,
    precioU: 400000,
    cantidad: 11,
  },
  {
    nombreP: "Parlante",
    idProd: 105,
    precioU: 350000,
    cantidad: 5,
  },
];
const RegistroProductos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productosBD);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <FormularioProductos
          agregarProductos={setProductos}
          listaProductos={productos}
        />
        <TablaProductos listaProductos={productos} />
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
};

const FormularioProductos = ({ listaProductos, agregarProductos }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    console.log("datos form", fd);
    agregarProductos([...listaProductos, nuevoProducto]);
    toast.success("Agregado correctamente");
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

const FilaProductos = ({ productos }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
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
                onClick={() => setEdit(!edit)}
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
                  <button className="dialogButton dialogButtonSi">Si</button>
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
const TablaProductos = ({ listaProductos }) => {
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
            return <FilaProductos key={nanoid()} productos={productos} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroProductos;
