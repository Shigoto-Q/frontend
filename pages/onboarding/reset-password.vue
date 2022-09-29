<template>
  <div class="flex flex-col">
    <h1
      class="mt-20 mb-8 self-center text-lg font-bold leading-none text-comet lg:text-4xl"
    >
      Forgot your password?
    </h1>
    <div class="w-max flex flex-col justify-center items-center self-center">
      <Form :model="model" :schema="schema" :handle-on-click="onClick" />
      <Button @click="onClick" />
      <Alert
        v-show="showAlert"
        :type="alertType"
        :title="alertTitle"
        :message="alertMessage"
      />
    </div>
  </div>
</template>

<script>
import Form from "~/components/form/Form";
import Alert from "~/components/Alert";
import { statusCodes } from "~/constants/onboarding";
import Button from "~/components/shared/Button";

export default {
  name: "ResetPassword",
  components: {
    Button,
    Form,
    Alert,
  },
  data() {
    return {
      model: {},
      alertType: "error",
      alertMessage: "",
      alertTitle: "",
      showAlert: false,
    };
  },
  computed: {
    schema() {
      return {
        fields: [
          {
            type: "myInput",
            inputType: "email",
            fieldLabel: "E-mail",
            model: "username",
            placeholder: "user@example.com",
          },
        ],
      };
    },
  },
  mounted() {},
  methods: {
    async onClick() {
      try {
        await this.$auth.loginWith("local", {
          data: this.model,
        });
      } catch (error) {
        this.alertType = "error";
        this.alertMessage = error.response.data.detail + "\n Please try again.";
        this.alertTitle =
          error.response.status + " " + statusCodes[error.response.status];
        this.showAlert = true;
      }
    },
  },
};
</script>

<style scoped></style>
