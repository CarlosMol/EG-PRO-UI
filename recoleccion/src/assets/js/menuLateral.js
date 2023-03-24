import router from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-file-document",
      text: "Reportes",
      route: router.reportes,
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
