<template>
  <div class="">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th v-for="col in columns" scope="col" class="w-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ col.title }}</th>
              <th scope="col" class="w-fit px-6 py-3 text-mana text-center font-semibold uppercase tracking-wider">
                Run
              </th>
              <th scope="col" class="w-fit px-6 py-3 text-mana text-center font-semibold uppercase tracking-wider">
                Edit
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="task in tasks" :key="task.externalTaskId">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="">
                    <div class="text-sm font-medium text-gray-900">
                      {{ task.name}}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ task.externalTaskId}}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ task.totalRunCount }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ task.lastRunAt }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ task.taskType}}</div>
                <div class="text-sm text-gray-500">{{ types[task.taskType] }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ task.schedule }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                      :class="{
                        'text-green-800': !task.enabled,
                        'text-red-700': task.enabled}"
                >
                <CheckMarkIcon v-if="task.oneOff"/>
                <XIcon v-else/>
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  :class="{
                        'text-green-800': !task.oneOff,
                        'text-red-700': task.oneOff,
                      }"
              >
                <CheckMarkIcon v-if="task.enabled"/>
                <XIcon v-else/>
              </td> <td class="px-1 py-4 text-center">
                <Button text="Run" @click="runTask(task.externalTaskId)"/>
              </td>
              <td class="px-1 py-1 text-center">
                <Button text="Edit" @click="show(task)"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Modal v-model="showModal">
      <template v-slot:title>Edit task</template>
      <ToolbarDivider class="mt-4"/>
      <div class="flex flex-col">
        <Form
          class-object="flex-wrap"
          :schema="schema"
          :model="editFormModal"
        />
      </div>
      <div class="flex justify-between mt-10">
        <Button @click="showModal = false" text="Cancel" secondary/>
        <Button @click="handleSubmit" text="Submit"/>
      </div>
    </Modal>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import ToolbarDivider from "~/components/shared/ToolbarDivider";
import { taskTypes } from "~/constants/tasks";
import { notificationTypes } from '@/constants/notifications';
import CheckMarkIcon from '~/assets/icons/CheckMark.svg?inline'
import XIcon from '~/assets/icons/X.svg?inline'
import Modal from "@/components/shared/Modal";
import Form from "@/components/form/Form";
import Input from "@/components/shared/Input";
import Checkbox from "@/components/shared/Checkbox";
import tasksApi from "@/api/tasks";

export default {
  name: 'Table',
  components: {
    Checkbox,
    Input,
    Form,
    Modal,
    Button,
    CheckMarkIcon,
    XIcon,
    ToolbarDivider,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      types: taskTypes,
      showModal: false,
      editFormModal: {},
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
            type: "myInput",
            inputType: "text",
            fieldLabel: "Type",
            name: "taskType",
            model: "taskType",
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            fieldLabel: "Enabled",
            description: 'If false, task will not be executed.',
            model: "enabled",
            default: false,
          },
          {
            type: "myCheckbox",
            inputType: "switch",
            fieldLabel: "One off",
            description: 'If checked, the schedule will only run the task a single time.',
            model: "oneOff",
            default: false,
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Schedule",
            model: "schedule"
          }
        ]
      }
    },
  },
    methods: {
      async runTask(externalTaskId) {
        await this.$store.dispatch('tasks/runTask', { externalTaskId })
          .then(() => {
             this.$notify({
               title: 'Task ran successfully',
               duration: 3000,
               body: `Task with id ${externalTaskId} has been ran successfully.`,
               type: notificationTypes.SUCCESS
             })
          })
          .catch((err) => {
            console.log(err.response)
             this.$notify({
               title: `Error status: ${err.response.status}`,
               duration: 3000,
               body: `${err.response.data.message}`,
               type: notificationTypes.ERROR
             })
            })
      },
      show(task) {
        this.editFormModal = task;
        this.showModal = true;
        console.log(this.editFormModal)
      },
      handleSubmit() {

      }
    }
}
</script>
