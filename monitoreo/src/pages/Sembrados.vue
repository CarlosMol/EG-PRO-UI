<template>
  <div>
    <crud-table
      :headers="headers"
      :items="items"
      :title="title"
    ></crud-table>
  </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
export default {
  components: {
    CrudTable,
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Edad", value: "age" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [],
      title: "Sembrados",
    };
  },
};
</script>
<style></style>