import axios from "axios";

export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/registroProductos",
  };

  await axios
    .request(options)
    .then(function (response) {
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const obtenerVentas = async(setVentas,setEjecutarConsulta) =>{
  const options = {
    method: "GET",
    url: "http://localhost:5000/registroVentas",
  };

  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
}
