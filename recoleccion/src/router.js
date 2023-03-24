import Vue from "vue";
import VueRouter from "vue-router";
//

import Parcelas from "./pages/Parcelas.vue";
import Bodegas from "./pages/Bodegas.vue";
import Entregas from "./pages/Entregas.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Entregas },
  { path: "/parcelas", component: Parcelas },
  { path: "/bodegas", component: Bodegas },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
