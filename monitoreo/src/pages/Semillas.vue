<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
      :service="service"
      @reload="getAllData"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import form from "@/static/forms/formSemillas.json";
import { semillasService as service } from "../services.api.js";
import dataMixin from "@/mixins/dataMixin";

export default {
  mixins: [dataMixin],
  components: {
    CrudTable,
  },
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Nombre", value: "nombre" },
        { text: "Temperatura", value: "temperatura" },
        { text: "Velocidad Viento", value: "velocidadViento" },
        { text: "Dirección Viento", value: "direccionViento" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Semillas",
      form,
      service,
    };
  },
};
</script>
<style></style>
z
