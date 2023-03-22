<template>
  <div>
    <v-row
      align="center"
      justify="space-between"
      class="flex-wrap d-flex fill-height"
      v-if="form !== undefined"
      :ref="'layout'"
    >
      <template>
        <v-col
          class="px-1"
          v-for="(item, index) in form.fields"
          :key="index"
          :cols="item.size"
        >
          <v-text-field
            v-if="item.type === 'text'"
            v-model="currentData[item.value]"
            :label="item.label"
            :type="item.auxType"
          ></v-text-field>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    form: {},
    initialData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentData: {},
    };
  },
  beforeMount() {
    if (this.initialData) {
      this.currentData = this.initialData;
    }
  },
  methods: {
    emitFormData() {
      this.$emit("update-form-data", this.currentData);
    },
  },
};
</script>

<style>
</style>