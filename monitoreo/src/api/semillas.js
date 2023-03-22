import createService from "../utils/apiService";

const semillasService = createService("semillas");

export const {
  list: listSemillas,
  create: createSemillas,
  update: updateSemillas,
  delete: deleteSemillas,
} = semillasService;
