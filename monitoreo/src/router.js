import Vue from "vue";
import VueRouter from "vue-router";
//

import Semillas from "./pages/Semillas.vue";
import Parcelas from "./pages/Parcelas.vue";
import Planes from "./pages/Planes.vue";
import Sembrados from "./pages/Sembrados.vue";

Vue.use(VueRouter);

const routes = [
  // { path: "/", component: Resumen },
  { path: "/semillas", component: Semillas },
  { path: "/parcelas", component: Parcelas },
  { path: "/sembrados", component: Sembrados },
  { path: "/planesMonitoreo", component: Planes },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
