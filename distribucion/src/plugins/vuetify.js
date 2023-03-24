import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4CAF50",
        secondary: "#607d8b",
        accent: "#607d8b",
        info: "#00CAE3",
        text: "#212121",
      },
    },
  },
});

import "vuetify/dist/vuetify.min.css";
