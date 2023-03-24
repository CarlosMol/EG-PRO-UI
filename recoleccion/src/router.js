import Vue from "vue";
import VueRouter from "vue-router";
//

import Parcelas from "./pages/Parcelas.vue";
import Bodegas from "./pages/Bodegas.vue";
import Reportes from "./pages/Reportes.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Reportes },
  { path: "/parcelas", component: Parcelas },
  { path: "/bodegas", component: Bodegas },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
