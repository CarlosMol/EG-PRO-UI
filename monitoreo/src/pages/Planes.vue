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
import form from "@/static/forms/formPlanes.json";
import {
  planesService as service,
  sembradosService,
} from "../services.api.js";
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
        { text: "Sembrado", value: "idSembrado" },
        { text: "Frecuencia Reporte", value: "frecuencia" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Planes",
      form,
      service,
      formServices: [
        {
          name: "sembrados",
          service: sembradosService,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
