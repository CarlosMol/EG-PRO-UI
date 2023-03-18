<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-data-table></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      headers: [],
    };
  },
};
</script>

<style>
.table-container {
  display: flex;
  justify-content: center;
}
</style>