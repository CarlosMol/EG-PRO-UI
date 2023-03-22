<template>
  <div>
    <v-dialog v-if="open" v-model="open" persistent>
      <v-card>
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <AutoForm
            ref="autoForm"
            :form="form"
            :initialData="initialData"
            @update-form-data="updateFormData"
          ></AutoForm>
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
import AutoForm from "../components/AutoForm";

export default {
  components: {
    AutoForm,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    form: {},
    open: {
      type: Boolean,
      default: false,
    },
    initialData: {
      type: Object,
      default: () => ({}),
    },
    service: {},
  },
  data() {
    return {
      formData: {},
    };
  },
  watch: {
    initialData: {
      deep: true,
      handler() {
        this.$refs.autoForm.emitFormData();
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    save() {
      this.service
        .createParcelas(this.formData)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateFormData(data) {
      if (Object.keys(this.initialData).length > 0) {
        this.formData = data;
      }
    },
  },
};
</script>

<style>
</style>