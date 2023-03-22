import router from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-file-document",
      text: "Reportes",
      route: router.repotes,
    },
    {
      icon: "mdi-sprout",
      text: "Sembrados",
      route: router.sembrados,
    },
    {
      icon: "mdi-seed",
      text: "Semillas",
      route: router.semillas,
    },
    {
      icon: "mdi-map",
      text: "Parcelas",
      route: router.parcelas,
    },
    {
      icon: "mdi-clipboard-text",
      text: "Planes",
      route: router.planes,
    },
  ],
};

export default menu;
