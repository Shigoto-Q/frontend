<template>
  <div
    v-if="!$auth.loggedIn"
    class="flex flex-col justify-center items-center mt-10"
  >
    <h1
      class="text-sans mt-20 mb-2 self-center text-lg font-bold leading-none text-vulcan lg:text-4xl"
    >
      Log in
    </h1>
    <div class="action__text flex space-x-2">
      <span
        class="text-sans text-lg font-normal leading-5 text-subtitle lg:text-sm"
      >
        Don't have an account?
      </span>
      <Link text="Register now for free." to="/onboarding/register" />
    </div>
    <div class="form-wrapper">
      <Form
        class="login__form"
        :model="model"
        :schema="schema"
        :handle-on-click="onClick"
        :show-submit-button="true"
      />
      <Alert
        class="mt-8"
        v-show="showAlert"
        :type="alertType"
        :title="alertTitle"
        :message="alertMessage"
      />
    </div>
    <Link
      to="/onboarding/reset-password"
      text="Forgot password?"
      class="form__link"
    />
  </div>
  <div v-else>
    <h1
      class="mt-20 mb-8 self-center text-lg font-bold leading-none text-comet lg:text-6xl"
    >
      Logged in
    </h1>
  </div>
</template>

<script>
import Form from "~/components/form/Form";
import Alert from "~/components/Alert";
import { statusCodes } from "~/constants/onboarding";
import Button from "~/components/shared/Button";
import Link from "@/components/shared/Link";
import Input from "@/components/shared/Input";

export default {
  name: "login",
  components: {
    Input,
    Button,
    Form,
    Alert,
    Link,
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
            styleClasses: "flex-100",
            model: "email",
            placeholder: "user@shigo.to",
          },
          {
            type: "myInput",
            inputType: "password",
            fieldLabel: "Password",
            styleClasses: "flex-100",
            model: "password",
            placeholder: "password",
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

<style scoped lang="scss">
body {
  font-family: "Roboto", cursive;
}
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 900px;
}
.login {
  &__form {
  }
}
.form {
  &__link {
    margin: auto;
    padding-left: 25rem;
  }
}

.login__form >>> button {
  width: 50%;
}

@media (max-width: 800px) {
  .form-wrapper {
    flex-direction: column;
    align-items: stretch;
    width: 350px;
  }
  .action__text {
    flex-direction: column;
  }
}
</style>
