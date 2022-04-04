import axios from "axios";

export default {
  async getTasks() {
    return await this.$axios
      .get("/api/v1/tasks/list/", {
        headers: {
          Authorization: `Bearer ${
            this.$auth.strategy.token.get().split(" ")[1]
          }`,
        },
      })
      .then((response) => response.data);
  },
  async runTask(externalTaskId) {
    const data = {
      externalTaskId,
    };
    await axios.post("/api/v1/task/run/", data, {
      headers: {
        Authorization: `Bearer ${$auth.strategy.token.get().split(" ")[1]}`,
      },
    });
  },
};
