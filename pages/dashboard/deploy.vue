<template>
  <div>
    <Heading class="mt-4" title="Kubernetes"/>
    <CardWithActions
      :items="images"
      primary-action-name="Deploy"
      :primary-action="handleDeployment"
      :secondary-action="handleDeleteImage"
    />
    <Modal v-model="showModal">
      <template v-slot:title>Deploy</template>
      <div class="flex flex-col">
        <Form
          :schema="schema"
          :model="formModel"
          :handle-on-click="handleDeleteImage"
        />
      </div>
      <div class="flex justify-between mt-10">
        <Button @click="showModal = false" secondary>Cancel</Button>
        <Button @click="handleSubmit">Submit</Button>
      </div>
    </Modal>
    <Divider title="Deployments" class="mb-4 mt-4"/>
    <SimpleTable :columns="columns"/>
    <Divider title="Services" class="mb-4 mt-4"/>
    <List />
    <Divider title="Ingress" class="mb-4 mt-4"/>
    <StackedList />
  </div>
</template>

<script>
import { A_LIST_IMAGES } from "@/store/kubernetes/action-types";
import { G_KUBERNETES_DOCKER_IMAGES } from "@/store/kubernetes/getter-types";
import { mapGetters } from "vuex";
import CardWithActions from "@/components/shared/CardWithActions";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";
import Form from "@/components/form/Form";
import StackedList from "@/components/shared/StackedList";
import Divider from "@/components/shared/Divider";
import SimpleTable from "@/components/shared/SimpleTable";
import List from "@/components/shared/List";
import Heading from "@/components/shared/Heading";
import {notificationTypes} from "@/constants/notifications";

export default {
  name: "deploy",
  components: {
    Heading,
    List,
    SimpleTable,
    Divider,
    StackedList,
    Form,
    Modal,
    CardWithActions,
    Button,
  },
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
  data() {
    return {
      columns: ['Name', 'Age', 'Status', 'Restarts', 'Ready'],
      showModal: false,
      formModel: {
        image: "",
      },
    };
  },
  computed: {
    schema() {
      return {
        fields: [
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Host",
            name: "name",
            model: "host",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Image",
            name: "name",
            model: "imageName",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Service name",
            name: "name",
            model: "serviceName",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Deployment name",
            name: "name",
            model: "name",
          },
        ],
      };
    },
    ...mapGetters({
      images: G_KUBERNETES_DOCKER_IMAGES,
    }),
  },
  mounted() {
    this.$store.dispatch(A_LIST_IMAGES);
  },
  methods: {
    handleDeployment(image) {
      this.formModel = { ...image };
      this.showModal = true;
    },
    handleSubmit() {
      const postData = {
        image: this.formModel.imageName,
        name: this.formModel.name,
      }
      console.log(postData)
      this.$axios.post('/api/v1/kubernetes/deploy/', postData)
        .then(() => {
          this.$notify({
            title: "Successfully deployed!",
            duration: 3000,
            body: `Docker image ${postData.image} has been deployed.`,
            type: notificationTypes.SUCCESS,
          });
        })
        .catch((err) => {
          this.showModal = false;
          this.$notify({
            title: `Error status: ${err.response.status}`,
            duration: 3000,
            body: `${err.response.data.message}`,
            type: notificationTypes.ERROR,
          });
        })
    },
    handleDeleteImage(image) {
      console.log("handleDeleteImage", image);
    },
  },
};
</script>

<style scoped></style>
