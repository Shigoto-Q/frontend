<template>
  <div>
    <ServerTable endpoint="/api/v1/tasks/results/list/" :columns="columns" />
  </div>
</template>

<script>
import ServerTable from "~/components/shared/ServerTable";
import { taskWsActions, taskTypes } from "@/constants/ws";

export default {
  name: "logs",
  components: { ServerTable },
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      columns: [
        {
          label: "Task ID",
          field: "taskId",
        },
        {
          label: "Task name",
          field: "taskName",
        },
        {
          label: "Finished At",
          field: "finishedAt",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Owner",
          field: "user",
        },
      ],
      connection: null,
      resultSubscribe: {
        action: taskWsActions.SUBSCRIBE,
        token: this.$auth.strategy.token.get().split(" ")[1],
        topic: taskTypes.taskResults,
      },
    };
  },
  created() {
    this.connection = new WebSocket(this.$config.wsUrl);
    this.connection.onopen = () => {
      this.sendMessage(this.resultSubscribe);
    };
    this.connection.onmessage = (message) => {
      const parsedData = JSON.parse(message.data);
    };
  },
  beforeRouteLeave(to, from, next) {
    this.connection.close();
    next();
  },
  methods: {
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },
  },
};
</script>

<style scoped></style>
