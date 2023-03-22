<template>
  <div>
    <v-dialog v-if="open" v-model="open" persistent>
      <v-card>
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <FormsFactory :form="form" :initialData="initialData"></FormsFactory>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions class="justify-end">
          <v-btn @click="closeModal()">CANCELAR</v-btn>
          <v-btn @click="save()" color="primary">ACEPTAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FormsFactory from "../components/FormsFactory";

export default {
  components: {
    FormsFactory,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    form: {},
    //TODO: refactorizar nombres open modal
    open: {
      type: Boolean,
      default: false,
    },
    initialData: {},
  },
  data() {
    return {};
  },
  
  methods: {
    closeModal() {
      this.$emit("close");
    },
    save() {
      console.log("guardando...");
    },
  },
};
</script>

<style>
</style>