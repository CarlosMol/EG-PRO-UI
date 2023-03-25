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
          <!-- text -->
          <v-text-field
            v-if="item.type === 'text'"
            v-model="currentData[item.value]"
            :label="item.label"
            :type="item.auxType"
          ></v-text-field>

          <!-- select -->

          <v-select
            v-if="item.type === 'select'"
            :items="item.items"
            v-model="currentData[item.value]"
            :label="item.label"
          ></v-select>

          <!-- date -->
          <v-menu
            v-if="item.type === 'date'"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="currentData[item.value]"
                :label="item.label"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                slot="activator"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="currentData[item.value]"
              scrollable
              locale="es"
            >
            </v-date-picker>
          </v-menu>

          <!-- radio -->
          <v-radio-group
            v-if="item.type === 'radio'"
            v-model="currentData[item.value]"
            :label="item.label"
            row
          >
            <v-radio label="Sí" :value="true"></v-radio>
            <v-radio label="No" :value="false"></v-radio>
          </v-radio-group>

          <!-- external -->
          <v-select
            v-if="item.type === 'external'"
            :items="item.items"
            v-model="currentData[item.value]"
            :label="item.label"
          ></v-select>

          <!-- Table -->
          <div v-if="item.type === 'table'">
            <editable-table
              :headers="item.headers"
              :items="options"
              :subform="item.subform"
              @update-items="currentData[item.value] = $event"
            ></editable-table>
          </div>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import EditableTable from "./EditableTable.vue";
export default {
  props: {
    form: {},
    initialData: {
      type: Object,
      default: () => ({}),
    },
    formServices: {
      type: Array,
      default: () => [],
    },
  },
  components: { EditableTable },
  data() {
    return {
      currentData: {},
      options: [],
      menu: false,
    };
  },
  beforeMount() {
    if (this.initialData) {
      this.currentData = this.initialData;
    }
    this.getExternalItems();
  },
  methods: {
    emitFormData() {
      this.$emit("update-form-data", this.currentData);
    },
    getExternalItems() {
      this.form.fields.forEach((field) => {
        if (field.type === "external") {
          const formService = this.formServices.find(
            (s) => s.name === field.service
          );
          if (formService) {
            formService.service.list().then((result) => {
              field.items = result.data.map((el) => {
                return {
                  text: el.nombre,
                  value: el.id,
                };
              });
            });
          }
        }
      });
    },
  },
};
</script>

<style></style>
