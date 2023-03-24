<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
      :service="service"
      :formServices="formServices"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import form from "@/static/forms/formEntregas.json";
import {
  entregasService as service,
  bodegasService,
  parcelasService,
} from "../services.api.js";
// import dataMixin from "@/mixins/dataMixin";

export default {
  // mixins: [dataMixin],
  components: {
    CrudTable,
  },
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Origen", value: "direccionSalida" },
        { text: "Destino", value: "direccionEntrega" },
        { text: "Fecha Salida", value: "fechaSalida" },
        { text: "Fecha Entrega", value: "fechaEntrega" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Entregas",
      form,
      service,
      formServices: [
        {
          name: "parcelas",
          service: parcelasService,
        },
        {
          name: "bodegas",
          service: bodegasService,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
