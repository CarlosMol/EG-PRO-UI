import router from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-file-document",
      text: "Entregas",
      route: router.entregas,
    },
    {
      icon: "mdi-map",
      text: "Parcelas",
      route: router.parcelas,
    },
    {
      icon: "mdi-warehouse",
      text: "Bodegas",
      route: router.bodegas,
    },
  ],
};

export default menu;
