<template>
  <div class="flex flex-col">
    <h1
      class="mt-20 mb-8 self-center text-lg font-bold leading-none text-comet lg:text-6xl"
    >
      Sign up
    </h1>
    <div class="flex justify-center w-auto">
      <Form :model="model" :schema="schema" :handle-on-click="submitForm" />
    </div>
  </div>
</template>

<script>
import { NS_ONBOARDING_REGISTER } from "~/store/onboarding/namespace";
import Form from "~/components/form/Form";
export default {
  name: "register",
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

<style scoped></style>
