<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
      :service="service"
      :formServices="formServices"
      @reload="getAllData"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import form from "@/static/forms/formSembrados.json";
import dataMixin from "@/mixins/dataMixin";

import {
  sembradosService as service,
  parcelasService,
  semillasService,
} from "../services.api.js";
export default {
  mixins: [dataMixin],
  components: {
    CrudTable,
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Id", value: "id" },
        { text: "Nombre", value: "nombre" },
        { text: "Fecha Siembra", value: "fechaSiembra" },
        { text: "Semilla", value: "idSemilla" },
        { text: "Parcela", value: "idParcela" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Sembrados",
      form,
      service,
      formServices: [
        {
          name: "parcelas",
          service: parcelasService,
        },
        {
          name: "semillas",
          service: semillasService,
        },
      ],
    };
  },
};
</script>
<style></style>
