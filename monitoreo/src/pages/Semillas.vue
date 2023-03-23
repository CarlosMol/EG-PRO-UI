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
import form from "@/static/forms/formSemillas.json";
import { semillasService as service } from "../services.api.js";
export default {
  components: {
    CrudTable,
  },
  data() {
    return {
      headers: [
        { text: "Nombre", value: "nombre" },
        { text: "Opciones", value: "opciones" },
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
<style></style>z