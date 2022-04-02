<template>
  <div>
      <div class="w-full flex justify-center items-center md:flex-col">
        <Card
          :success-count.sync="stats.successCount"
          :started-count.sync="stats.startedCount"
          :received-count.sync="stats.receivedCount"
          :fail-count.sync="stats.failCount"
          :ignored-count.sync="stats.ignoredCount"
          :rejected-count.sync="stats.rejectedCount"
        />
      </div>
      <Divider title="Tasks" class="mt-4 mb-4"/>
      <div>
        <Button text="Create new" class="mb-4 px-2 py-2" @click="showModal = true"/>
        <Table :columns="columns" :tasks="tasks"/>
      </div>
      <Modal v-model="showModal">
        <template v-slot:title>Create new task</template>
          <Stepper :steps="steps" class="mb-4 mt-4"/>
        <div class="flex flex-col">
          <Form
            v-show="steps[0].status === 'current'"
            :schema="schema"
            :model="formModel"
          />
          <div class="flex justify-between mt-10">
            <Button @click="showModal = false" text="Cancel" secondary/>
            <Button v-show="isUpcoming" @click="goBack" text="Back" secondary/>
            <Button v-show="!isLast" @click="handleNext" text="Next"/>
            <Button v-show="isLast" @click="handleSubmit" text="Submit"/>
          </div>
        </div>
      </Modal>
    <Nuxt />
  </div>
</template>

<script>
import {taskWsActions, taskTypes} from "~/constants/ws";
import Card from "~/components/shared/Card";
import Table from "~/components/shared/Table";
import Divider from "~/components/shared/Divider";
import Modal from "@/components/shared/Modal";
import Stepper from "@/components/shared/Stepper";
import tasksApi from '~/api/tasks'
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import Form from "@/components/form/Form";


export default {
  name: "tasks",
  components: {Input, Button, Divider, Table, Card, Modal, Stepper, Form, Select},
  middleware: 'auth',
  layout (context) {
    return 'dashboard'
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
        token: this.$auth.strategy.token.get().split(' ')[1],
        topic: taskTypes.taskCount,
      },
      stats: {
        successCount: 0,
        failCount: 0,
        receivedCount: 0,
        startedCount: 0,
        ignoredCount: 0,
        rejectedCount: 0,
      },
      columns: [
        {
          title: 'Task ID',
        },
        {
          title: 'Total runs',
        },
        {
         title: 'Last run at'
        },
        {
          title: 'Type',
        },
        {
          title: 'Schedule',
        },
        {
          title: 'One-off',
        },
        {
          title: 'Enabled',
        },
      ],
      tasks: [],
      values: {},
      steps: [
        { id: 'Step 1', name: 'Task details', href: '#', status: 'current' },
        { id: 'Step 2', name: 'Task schedule', href: '#', status: 'upcoming' },
        { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
      ],
    }
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
            placeholder: 'My fabolous task',
            model: "name",
          },
          {
            type: "mySelect",
            fieldLabel: "Type",
            name: "name",
            model: "type",
            options: [
              { name: 'Simple HTTP Operator', id: 0 },
              { name: 'Kubernetes', id: 1 },
              { name: 'Docker', id: 2 },
            ]
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            fieldLabel: "Enabled",
            description: 'If false, task will not be executed.',
            model: "enabled",
            default: true,
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            fieldLabel: "One off",
            description: 'If checked, the schedule will only run the task a single time.',
            model: "oneOff",
            default: false,
          },
        ]
      }

  }},
  mounted() {
    this.getTasks().then((response) => {
      this.tasks = response.data;
    })
  },
  created() {
    this.connection = new WebSocket('ws://localhost:8080/ws')
    this.connection.onopen = () => {
      this.sendMessage(this.resultSubscribe)
    }
    this.connection.onmessage = (message) => {
      const parsedData = JSON.parse(message.data)
      this.stats.successCount = parsedData.success
      this.stats.failCount = parsedData.failure
      this.stats.receivedCount = parsedData.received
      this.stats.startedCount = parsedData.started
      this.stats.ignoredCount = parsedData.ignored
      this.stats.rejectedCount = parsedData.rejected
    }
  },
  beforeRouteLeave(to, from, next) {
    this.connection.close()
    next()
  },
  methods: {
    sendMessage(message) {
      this.connection.send(JSON.stringify(message))
    },
    async getTasks() {
      return await this.$axios.get('/api/v1/tasks/list/', {
        headers: {
          Authorization: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`
        },
      })
        .then((response) => response.data)
    },
    handleNext() {
      if ( this.steps[0].status === 'current' ) {
        this.steps[0].status = 'complete';
        this.steps[1].status = 'current';
        this.isUpcoming = true;
        this.isLast = false;
      } else if ( this.steps[1].status === 'current' ) {
        this.steps[1].status = 'complete';
        this.steps[2].status = 'current';
        this.isUpcoming = true;
        this.isLast = true;
      }
    },
    goBack() {
      if (this.steps[1].status === 'current') {
        this.steps[0].status = 'current';
        this.steps[1].status = 'upcoming';
        this.isUpcoming = false;
        this.isLast = false;
      } else if (this.steps[2].status === 'current') {
        this.steps[1].status = 'current';
        this.steps[2].status = 'upcoming';
        this.isUpcoming = true;
        this.isLast = false;
      }
    },
    handleSubmit() {
    }

  }
}
</script>

<style scoped>
</style>
