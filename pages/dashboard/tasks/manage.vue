<template>
  <div>
    <Divider title="Execution statistics" class="mt-4 mb-4" />
    <div class="w-full">
      <Card :count-data.sync="stats"/>
    </div>
    <Divider title="Tasks" class="mt-4 mb-4" />
    <div>
      <Button
        class="mb-4 px-2 py-2"
        @click="showModal = true"
      >
        Create new
      </Button>
      <Table :columns="columns" :tasks="tasks" />
    </div>
    <Modal v-model="showModal">
      <template v-slot:title>Create new task</template>
      <Stepper :steps="steps" class="mb-4 mt-4" />
      <div class="flex flex-col">
        <Form
          v-show="steps[0].status === 'current'"
          :schema="schema"
          :model="formModel"
        />
        <div class="flex justify-between mt-10">
          <Button @click="showModal = false" secondary>
            Cancel
          </Button>
          <Button v-show="isUpcoming" @click="goBack" text="Back" secondary>
            Back
          </Button>
          <Button v-show="!isLast" @click="handleNext">
            Next
          </Button>
          <Button v-show="isLast" @click="handleSubmit">
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import {taskTypes, taskWsActions} from "~/constants/ws";
import Card from "~/components/shared/Card";
import Table from "~/components/shared/Table";
import Divider from "~/components/shared/Divider";
import Modal from "@/components/shared/Modal";
import Stepper from "@/components/shared/Stepper";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import Form from "@/components/form/Form";

export default {
  name: "tasks",
  components: {
    Input,
    Button,
    Divider,
    Table,
    Card,
    Modal,
    Stepper,
    Form,
    Select,
  },
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      formModel: {},
      isUpcoming: false,
      showModal: false,
      isLast: false,
      connection: null,
      resultSubscribe: {
        action: taskWsActions.SUBSCRIBE,
        token: this.$auth.strategy.token.get().split(" ")[1],
        topic: taskTypes.taskCount,
      },
      stats: null,
      columns: [
        {
          title: "Task ID",
        },
        {
          title: "Total runs",
        },
        {
          title: "Last run at",
        },
        {
          title: "Type",
        },
        {
          title: "Schedule",
        },
        {
          title: "One-off",
        },
        {
          title: "Enabled",
        },
      ],
      tasks: [],
      values: {},
      steps: [
        { id: "Step 1", name: "Task details", href: "#", status: "current" },
        { id: "Step 2", name: "Task schedule", href: "#", status: "upcoming" },
        { id: "Step 3", name: "Preview", href: "#", status: "upcoming" },
      ],
    };
  },
  computed: {
    schema() {
      return {
        fields: [
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Name",
            name: "name",
            styleClasses: 'flex-100',
            placeholder: "My fabolous task",
            model: "name",
          },
          {
            type: "mySelect",
            fieldLabel: "Type",
            name: "name",
            model: "type",
            styleClasses: 'flex-100',
            options: [
              { name: "Simple HTTP Operator", id: 0 },
              { name: "Kubernetes", id: 1 },
              { name: "Docker", id: 2 },
            ],
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            styleClasses: 'flex-100',
            fieldLabel: "Enabled",
            description: "If false, task will not be executed.",
            model: "enabled",
            default: true,
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            styleClasses: 'flex-100',
            fieldLabel: "One off",
            description:
              "If checked, the schedule will only run the task a single time.",
            model: "oneOff",
            default: false,
          },
        ],
      };
    },
  },
  mounted() {
    this.getTasks().then((response) => {
      this.tasks = response.data;
    });
  },
  created() {
    this.connection = new WebSocket(this.$config.wsUrl);
    this.connection.onopen = () => {
      this.sendMessage(this.resultSubscribe);
    };
    this.connection.onmessage = (message) => {
      this.stats = JSON.parse(message.data);
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
    handleNext() {
      if (this.steps[0].status === "current") {
        this.steps[0].status = "complete";
        this.steps[1].status = "current";
        this.isUpcoming = true;
        this.isLast = false;
      } else if (this.steps[1].status === "current") {
        this.steps[1].status = "complete";
        this.steps[2].status = "current";
        this.isUpcoming = true;
        this.isLast = true;
      }
    },
    goBack() {
      if (this.steps[1].status === "current") {
        this.steps[0].status = "current";
        this.steps[1].status = "upcoming";
        this.isUpcoming = false;
        this.isLast = false;
      } else if (this.steps[2].status === "current") {
        this.steps[1].status = "current";
        this.steps[2].status = "upcoming";
        this.isUpcoming = true;
        this.isLast = false;
      }
    },
    handleSubmit() {},
  },
};
</script>

<style scoped></style>
