<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
      :service="service"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import form from "@/static/forms/formSembrados.json";
import { sembradosService as service } from "../services.api.js";
export default {
  components: {
    CrudTable,
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Nombre", value: "nombre" },
        { text: "Fecha Siembra", value: "fechaSiembra" },
        { text: "Semilla", value: "semilla" },
        { text: "Parcela", value: "parcela" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Sembrados",
      form,
      service,
    };
  },
};
</script>
<style></style>