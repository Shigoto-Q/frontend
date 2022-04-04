import { notificationTypes } from "@/constants/notifications";

const A_RUN_TASK = "runTask";
const A_DELETE_IMAGE = "deleteDockerImage";

export default {
  async [A_RUN_TASK]({ commit }, { externalTaskId }) {
    const data = {
      externalTaskId,
    };
    return await this.$api.post("/api/v1/task/run/", data, {
      headers: {
        Authorization: `Bearer ${
          this.$auth.strategy.token.get().split(" ")[1]
        }`,
      },
    });
  },
  async [A_DELETE_IMAGE]({ commit }, { imageId }) {
    const data = {
      id,
    };
    return await this.$api.post("/api/v1/docker/images/delete/", data, {
      headers: {
        Authorization: `Bearer ${
          this.$auth.strategy.token.get().split(" ")[1]
        }`,
      },
    });
  },
};
