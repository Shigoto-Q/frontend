<template>
  <div>
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
        <Button @click="showModal = false" text="Cancel" secondary />
        <Button @click="handleSubmit" text="Submit" />
      </div>
    </Modal>
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

export default {
  name: "deploy",
  components: {
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
      showModal: false,
      formModel: {
        imageName: "",
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
      console.log("handleSubmit", this.formModel);
    },
    handleDeleteImage(image) {
      console.log("handleDeleteImage", image);
    },
  },
};
</script>

<style scoped></style>
