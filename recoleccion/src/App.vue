<template>
  <div id="app">
    <v-app>
      <v-toolbar color="primary" dark :max-height="toolbarHeight">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Recolección</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        clipped
        :style="{ top: toolbarHeight + 'px' }"
      >
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content @click="goTo(item)">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import menu from "@/assets/js/menuLateral";
export default {
  name: "App",
  data: () => ({
    selectedItem: 0,
    drawer: false,
    mini: true,
    toolbarHeight: 64,
    items: menu.items,
  }),
  methods: {
    goTo(item) {
      this.$router.push(item.route);
    },
  },
};
</script>

<style>
</style>
