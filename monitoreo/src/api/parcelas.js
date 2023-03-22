import createService from "../utils/apiService";

const ParcelasService = createService("parcelas");

export const {
  list: listParcelas,
  create: createParcelas,
  update: updateParcelas,
  delete: deleteParcelas,
} = ParcelasService;
