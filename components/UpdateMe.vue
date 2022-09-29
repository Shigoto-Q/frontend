<template>
  <div class="content">
    <h1
      class="content__title mb-4 text-base font-bold leading-none text-comet lg:text-base"
    >
      We are <span class="content__highlight">coming soon</span>, subscribe to
      be aware when we do so!
    </h1>
    <div class="form-wrapper">
      <Form
        :schema="schema"
        :model="model"
        :show-submit-button="true"
        :handle-on-click="subscribe"
      />
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
import Button from "./shared/Button";
import Input from "./shared/Input";
import Alert from "~/components/Alert";
import Form from "@/components/form/Form";
export default {
  name: "UpdateMe",
  components: { Form, Input, Button, Alert },
  data() {
    return {
      alertType: "success",
      alertMessage: "",
      alertTitle: "",
      showAlert: false,
      model: {},
    };
  },
  computed: {
    schema() {
      return {
        fields: [
          {
            type: "myInput",
            styleClasses: "flex-100",
            inputType: "text",
            fieldLabel: "E-mail",
            name: "email",
            model: "email",
          },
        ],
      };
    },
  },
  methods: {
    subscribe() {
      this.$axios.post("/api/v1/users/subscribe/", this.model).then(() => {
        this.showAlert = true;
        this.alertTitle = "You have been successfully subscribed!";
        this.alertMessage = "We will let you know as soon as we launch!";
      });
    },
  },
};
</script>

<style scoped lang="scss">
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 900px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__highlight {
    color: $primary-color;
  }
  &__title {
    align-self: center;
  }
}

.login__form >>> button {
  width: 50%;
}
</style>
