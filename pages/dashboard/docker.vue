<template>
  <div>
    <div class="w-full flex justify-center items-center md:flex-col">
      <h1
        class="mb-12 mt-12 text-xl font-bold leading-none text-comet lg:text-2xl self-start"
      >
        Docker images
      </h1>
      <ServerTable
        ref="dockerImagesTable"
        endpoint="/api/v1/docker/images/list/"
        :columns="columns"
        :show-create-button="true"
        :create-new="onCreateNew"
      />
      <Modal v-model="showModal">
        <template v-slot:title>Create new docker image</template>
        <div class="flex flex-col">
          <Form :schema="schema" :model="formModel" />
          <div class="flex justify-between mt-10"></div>
        </div>
        <div class="flex justify-between mt-10">
          <Button @click="showModal = false" text="Cancel" secondary />
          <Button @click="handleSubmit" text="Submit" />
        </div>
      </Modal>
      <Modal v-model="showSecretKeyModal">
        <template v-slot:title>
          <div class="flex flex-col">
            <InfoWarningIcon class="self-center h-12 w-12" />
            <span class="font-serif text-comet">Secret key</span>
          </div>
        </template>

        <div class="flex flex-col mt-4">
          <Input label="Secret key" :model="secretKey" :disabled="true" />
          <div class="rounded-lg border-2 border-ghost">
            <div class="font-serif text-justify text-comet m-4">
              This secret key should be when you update your repository, to
              identify your image, so we can update your docker image. It is
              unique to you and your repository, if you lose it, you can request
              new.
              <br />
              After closing this window, you will unable to see the key again.
            </div>
          </div>
        </div>
      </Modal>
    </div>
    <div class="mt-4 mb-4">
      <Terminal />
    </div>
  </div>
</template>

<script>
import ServerTable from "~/components/shared/ServerTable";
import Modal from "@/components/shared/Modal";
import InfoWarningIcon from "@/assets/icons/InfoWarningIcon.svg?inline";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Terminal from "@/components/shared/Terminal";
import { notificationTypes } from "@/constants/notifications";
import {
  M_TERMINAL_OUTPUT,
  M_TERMINAL_OUTPUT_END,
} from "@/store/terminal/mutation-types";
import { A_DELETE_IMAGE } from "@/store/docker/action-types";
import { taskWsActions, taskTypes } from "~/constants/ws";

export default {
  name: "docker",
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
  components: {
    ServerTable,
    Modal,
    Button,
    Terminal,
    Input,
    InfoWarningIcon,
  },
  data() {
    return {
      secretKey: null,
      showSecretKeyModal: false,
      connection: null,
      formModel: {},
      showModal: false,
      columns: [
        {
          label: "Task ID",
          field: "id",
        },
        {
          label: "Repository url",
          field: "repository",
        },
        {
          label: "Repository name",
          field: "name",
        },
        {
          label: "Image name",
          field: "imageName",
          filterOptions: {
            customFilter: true,
          },
        },
        {
          label: "Command",
          field: "command",
        },
        {
          label: "Delete",
          field: "button",
          buttonText: "Delete",
          action: this.deleteTask,
        },
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
            fieldLabel: "Repository",
            name: "name",
            placeholder: "https://github.com/Shigoto-Q/shigoto",
            model: "Repository",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Name",
            name: "name",
            placeholder: "My repository name",
            model: "Name",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Image name",
            name: "name",
            placeholder: "My image name",
            model: "ImageName",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Command",
            name: "name",
            placeholder: "python main.py",
            model: "Command",
          },
        ],
      };
    },
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch(A_DELETE_IMAGE, { imageId: taskId });
      this.$refs.dockerImagesTable.loadItems();
    },
    handleSubmit() {
      this.connection = new WebSocket("ws://localhost:8080/ws");
      let createImageData = {
        action: taskWsActions.createImage,
        token: `Bearer ${this.$auth.strategy.token.get().split(" ")[1]}`,
        topic: taskWsActions.createImage,
        data: {
          ...this.formModel,
        },
      };
      this.connection.onopen = () => {
        this.sendMessage(createImageData);
      };
      this.showModal = false;
      this.connection.onmessage = (message) => {
        let data = JSON.parse(message.data);
        if (data.secretKey) {
          this.secretKey = data.secretKey;
          this.showSecretKeyModal = true;
          this.$refs.dockerImagesTable.loadItems();
        }
        if (data.status === "This is the end") {
          this.connection.close();
          this.$store.commit(M_TERMINAL_OUTPUT_END, true);
        } else {
          this.$store.commit(M_TERMINAL_OUTPUT, data);
        }
      };
    },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },
    onCreateNew() {
      this.showModal = true;
    },
    onPush() {},
  },
};
</script>

<style scoped></style>
