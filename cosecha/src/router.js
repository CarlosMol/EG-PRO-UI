import Vue from "vue";
import VueRouter from "vue-router";
//

import Parcelas from "./pages/Parcelas.vue";
import Predios from "./pages/Predios.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/parcelas", component: Parcelas },
  { path: "/predios", component: Predios }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
