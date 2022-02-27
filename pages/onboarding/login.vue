<template>
  <div v-if="!$auth.loggedIn" class="flex flex-col">
    <h1 class="mt-20 mb-8 self-center text-lg font-bold leading-none text-comet lg:text-6xl">
      Log in
    </h1>
    <div class="w-max flex flex-col justify-center items-center self-center">
      <Form :model="model" :schema="schema" :handle-on-click="onClick" />
      <Alert v-show="showAlert" :type="alertType" :title="alertTitle" :message="alertMessage" />
    </div>
  </div>
  <div v-else>
    <h1 class="mt-20 mb-8 self-center text-lg font-bold leading-none text-comet lg:text-6xl">
      Logged in
    </h1>
  </div>
</template>

<script>
import Form from "~/components/form/Form";
import Alert from "~/components/Alert";
import {statusCodes} from "~/constants/onboarding";

export default {
  name: "login",
  components: {
    Form,
    Alert,
  },
  data() {
    return {
      model: {},
      alertType: 'error',
      alertMessage: '',
      alertTitle: '',
      showAlert: false,
    }
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
          },
          {
            type: "myInput",
            inputType: "password",
            fieldLabel: "Password",
            model: "password"
          }
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
    async onClick() {
      try {
        await this.$auth.loginWith('local', {
          data: this.model,
        })
      } catch (error) {
        this.alertType = 'error';
        this.alertMessage = error.response.data.detail + '\n Please try again.';
        this.alertTitle = error.response.status +  ' ' + statusCodes[error.response.status];
        this.showAlert = true;
      }
    },
  }
}
</script>

<style scoped>

</style>
