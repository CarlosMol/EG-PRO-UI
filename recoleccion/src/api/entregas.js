import createService from "../utils/apiService";
// import { getRequest } from "../utils/axios";

// const API_URL = process.env.VUE_APP_API_URL;

let entregasService = createService("entregas");

//FIXME:
entregasService.create = async function () {
  // let promParcelas = await getRequest(`${API_URL}parcelas/${data.idParcela}`);
  // let promBodegas = await getRequest(`${API_URL}bodegas/${data.idBodega}`);

  // let origen = promParcelas.data;
  // let destino = promBodegas.data;

  // let baseUrl =
  //   "https://info-entregas.azurewebsites.net/api/getEntregasInfo?code=XYLc9saR-WsC0r-xawjvUaNtCaJ4PlCybVEZyXsa9JBhAzFuJLH7cA==";
  // // let urlFAAS = `${baseUrl}&origins=${origen.longitud},${origen.latitud}&destinations=${destino.longitud},${destino.latitud}`;

  // CONECTARSE CON API EXTERNO -- faas
  // let url = "https://info-entregas.azurewebsites.net/api/getEntregasInfo?code=XYLc9saR-WsC0r-xawjvUaNtCaJ4PlCybVEZyXsa9JBhAzFuJLH7cA==&origins=6.84,-75.46&destinations=6.82,-75.46"
  // const result = await fetch(url);
  // console.log(result);

  let url =
    "https://info-entregas.azurewebsites.net/api/getEntregasInfo?code=CfPTl_CXq309dmXDgqTWFpN9IXLngLdifSNjgvAEbviWAzFuYBjBxw==&origins=6.84,-75.46&destinations=6.83,-75.46";

  fetch(url)
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};

export default entregasService;
