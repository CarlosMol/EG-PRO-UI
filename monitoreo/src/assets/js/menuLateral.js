import router from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-clipboard-text",
      text: "Planes",
      route: router.planes,
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
  ],
};

export default menu;
