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
import form from "@/static/forms/formPacelas.json";
import { parcelasService as service } from "../services.api.js";
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
        { text: "Area(m2)", value: "area" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Parcelas",
      form,
      service,
    };
  },
  methods: {},
};
</script>
<style></style>