import createService from "../utils/apiService";

const planesService = createService("planes");

export const {
  list: listPlanes,
  create: createPlanes,
  update: updatePlanes,
  delete: deletePlanes,
} = planesService;
