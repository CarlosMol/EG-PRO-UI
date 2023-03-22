import createService from "../utils/apiService";

const sembradosService = createService("sembrados");

export const {
  list: listSembrados,
  create: createSembrados,
  update: updateSembrados,
  delete: deleteSembrados,
} = sembradosService;
