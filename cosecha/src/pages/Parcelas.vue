<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
      :service="service"
      @reload="getAllData"
      :formServices="formServices"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import form from "@/static/forms/formPacelas.json";
import { parcelasService as service, prediosService } from "../services.api.js";
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
        { text: "Predio", value: "idPredio" },
        { text: "Cultivo", value: "cultivo" },
        { text: "Longitud", value: "longitud" },
        { text: "Latitud", value: "latitud" },
        { text: "Direccion", value: "direccion" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Parcelas",
      form,
      service,
      formServices: [
        {
          name: "predios",
          service: prediosService,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
