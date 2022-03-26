<template>
<div>
  <div class="w-full flex justify-center items-center md:flex-col">
    <h1
      class="mb-12 mt-12 text-xl font-bold leading-none text-comet lg:text-2xl self-start"
    >
      Docker images
    </h1>
    <ServerTable
      endpoint="/api/v1/docker/images/list/"
      :columns="columns"
      :show-create-button="true"
      :create-new="onCreateNew"
    />
      <Modal v-model="showModal">
        <template v-slot:title>Create new docker image</template>
        <div class="flex flex-col">
          <Form
            :schema="schema"
            :model="formModel"
          />
          <div class="flex justify-between mt-10">
          </div>
        </div>
      </Modal>
  </div>
</div>
</template>

<script>
import ServerTable from "~/components/shared/ServerTable";
import Modal from "@/components/shared/Modal";

export default {
  name: "docker",
  middleware: 'auth',
  layout (context) {
    return 'dashboard'
  },
  components: {
    ServerTable,
    Modal,
  },
  data(){
    return {
      formModel: {},
      showModal: false,
      columns: [
        {
          label: 'Repository url',
          field: 'repository',
        },
        {
          label: 'Repository name',
          field: 'name',
        },
        {
          label: 'Image name',
          field: 'imageName',
          filterOptions: {
            customFilter: true
          }
        },
        {
          label: 'Command',
          field: 'command',
        },
        {
          label: 'Push',
          field: 'button',
          buttonText: 'Push',
          action: this.onPush(),
        },
        {
          label: 'Build',
          field: 'button',
          buttonText: 'Build',
        },
        {
          label: 'Delete',
          field: 'button',
          buttonText: 'Delete',
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
            placeholder: 'https://github.com/Shigoto-Q/shigoto',
            model: "repository",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Name",
            name: "name",
            placeholder: 'My repository name',
            model: "name",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Image name",
            name: "name",
            placeholder: 'My image name',
            model: "imageName",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Command",
            name: "name",
            placeholder: 'python main.py',
            model: "command",
          },
        ]
      }
  }},
  methods: {
    onCreateNew() {
      this.showModal = true;
    },
    onPush() {
      console.log('pushing')
    }
  },
}
</script>

<style scoped>

</style>
