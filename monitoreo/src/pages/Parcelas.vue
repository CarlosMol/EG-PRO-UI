<template>
  <div>
    <crud-factory
      :headers="headers"
      :items="items"
      :title="title"
      :form="form"
    ></crud-factory>
  </div>
</template>

<script>
import CrudFactory from "@/components/CrudFactory";
import form from "@/static/forms/formPacelas.json";
export default {
  components: {
    CrudFactory,
  },
  beforeUpdate() {
    console.log("form", form);
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Id", value: "id" },
        { text: "Nombre", value: "nombre" },

        { text: "Area(m2)", value: "area" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      items: [
        { id: "1", nombre: "test", longitud: "-30", latitud: "40", area: "60" },
        {
          id: "7",
          nombre: "test2",
          longitud: "-30",
          latitud: "40",
          area: "50",
        },
      ],
      title: "Parcelas",
      form,
    };
  },
};
</script>
<style></style>