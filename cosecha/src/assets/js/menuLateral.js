import router from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-map",
      text: "Parcelas",
      route: router.parcelas,
    },
    {
      icon: "mdi-home-map-marker",
      text: "Predios",
      route: router.predios,
    },
  ],
};

export default menu;
