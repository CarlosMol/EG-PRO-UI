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
import form from "@/static/forms/formBodegas.json";
import { bodegasService as service } from "../services.api.js";
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
        { text: "Longitud", value: "longitud" },
        { text: "Latitud", value: "latitud" },
        { text: "Capacidad", value: "capacidad" },
        { text: "Departamento", value: "departamento" },
        { text: "Municipio", value: "municipio" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Bodegas",
      form,
      service,
    };
  },
  methods: {},
};
</script>
<style></style>
