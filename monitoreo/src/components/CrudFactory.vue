<template>
  <v-container mt-5>
    <v-card class="mx-auto">
      <h2 style="text-align: center" class="pt-4">{{ title }}</h2>
      <v-card-title>
        <v-text-field
          label="Buscar"
          single-line
          hide-details
          prepend-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="openModal()">{{
          isEditing ? "EDITAR" : "CREAR"
        }}</v-btn>
      </v-card-title>

      <v-data-table :headers="headers" :items="items" :search="search">
        <template v-slot:header.actions>
          <span>Acciones</span>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon @click="openModal(true, item)" size="16">mdi-pencil</v-icon>
          <v-icon class="ml-2" @click="deleteItem(item)" size="16"
            >mdi-delete</v-icon
          >
        </template>
        <template slot="no-data">
          <v-alert :value="true">No hay registros</v-alert>
        </template>
      </v-data-table>
    </v-card>
    <Modals
      @close="closeModal()"
      :title="title"
      :form="form"
      :open="open"
      :initialData="initialData"
    ></Modals>
  </v-container>
</template>

<script>
import Modals from "@/components/Modals";
import Swal from "sweetalert2";

export default {
  components: {
    Modals,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    form: {},
  },
  beforeMount() {},
  data() {
    return {
      search: "",
      isEditing: false,
      open: false,
      initialData: {},
    };
  },
  watch: {},
  methods: {
    openModal(isEditing, item) {
      if (isEditing) {
        console.log("item", item);
        this.initialData = Object.assign({}, item);
      }
      this.open = true;
    },
    editItem(item) {
      console.log("editando...", item);
    },
    deleteItem(item) {
      Swal.fire({
        title: "¿Está seguro que desea eliminar este elemento?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.confirmAction(item);
        }
      });
    },
    confirmAction(item) {
      console.log(item);
    },
    closeModal() {
      this.initialData = {};
      this.open = false;
    },
  },
};
</script>

<style>
</style>