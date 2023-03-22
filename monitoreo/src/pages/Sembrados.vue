<template>
  <div>
    <crud-factory
      :headers="headers"
      :items="items"
      :title="title"
    ></crud-factory>
  </div>
</template>

<script>
import CrudFactory from "@/components/CrudFactory";
export default {
  components: {
    CrudFactory,
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