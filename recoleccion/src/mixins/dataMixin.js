export default {
  methods: {
    async getAllData() {
      let result = await this.service.list();
      if (result.data) {
        this.items = result.data;
      }
    },
    async deleteItem(id) {
      let result = await this.service.delete(id);
      console.log(result);
    },
  },
  beforeMount() {
    this.getAllData();
  },
};
