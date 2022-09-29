<template>
  <div class="flex flex-col">
    <h1 class="form__title">Welcome to Shigoto!</h1>
    <h2 class="form__subtitle">To start, create an account.</h2>
    <div class="flex justify-center w-auto">
      <Form
        :model="model"
        :schema="schema"
        :handle-on-click="submitForm"
        :show-submit-button="true"
      />
    </div>
  </div>
</template>

<script>
import { NS_ONBOARDING_REGISTER } from "~/store/onboarding/namespace";
import Form from "~/components/form/Form";
export default {
  name: "Register",
  components: {
    Form,
  },
  data() {
    return {
      model: {},
    };
  },
  computed: {
    schema() {
      return {
        fields: [
          {
            type: "myInput",
            inputType: "name",
            fieldLabel: "First name",
            model: "firstName",
          },
          {
            type: "myInput",
            inputType: "name",
            fieldLabel: "Last name",
            model: "lastName",
          },
          {
            type: "myInput",
            inputType: "email",
            styleClasses: "flex-100",
            fieldLabel: "E-mail",
            model: "email",
          },
          {
            type: "myInput",
            inputType: "country",
            fieldLabel: "Country",
            model: "country",
          },
          {
            type: "myInput",
            inputType: "company",
            fieldLabel: "Company",
            model: "company",
          },
          {
            type: "myInput",
            inputType: "password",
            fieldLabel: "Password",
            model: "age",
          },
          {
            type: "myInput",
            inputType: "password",
            fieldLabel: "Confirm password",
            model: "age",
          },
        ],
      };
    },
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch(NS_ONBOARDING_REGISTER, this.model);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  &__title {
    margin-top: 7rem;
    font-size: 24px;
    align-self: center;
  }
  &__subtitle {
    color: $subtitle-color;
    align-self: center;
    margin-bottom: 1rem;
  }
}
.flex-100 {
  flex: 100%;
}
</style>
