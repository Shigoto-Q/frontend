<template>
  <section class="w-full">
    <h1 class="mb-4 text-base font-bold leading-none text-comet lg:text-base">
      We are <span class="text-oyster">coming soon</span>, subscribe to be aware
      when we do so!
    </h1>
    <div class="mt-2 space-y-6 lg:mt-0">
      <Input
        class="mt-6"
        label="E-mail"
        type="email"
        placeholder="user@example.com"
        :model="email"
        @input="onInput"
        @change="onChange"
      />
      <Button text="Update me" @click="subscribe" />
      <Alert
        v-show="showAlert"
        :type="alertType"
        :title="alertTitle"
        :message="alertMessage"
      />
    </div>
  </section>
</template>

<script>
import Button from "./shared/Button";
import Alert from "~/components/Alert";
import Input from "./shared/Input";
export default {
  name: "UpdateMe",
  components: { Input, Button, Alert },
  data() {
    return {
      email: "",
      alertType: "success",
      alertMessage: "",
      alertTitle: "",
      showAlert: false,
    };
  },
  methods: {
    subscribe() {
      const data = {
        email: this.email,
      };
      this.$axios.post("/api/v1/users/subscribe/", data).then(() => {
        this.showAlert = true;
        this.alertTitle = "You have been successfully subscribed!";
        this.alertMessage = "We will let you know as soon as we launch!";
      });
    },
    onInput(value) {
      this.email = value;
    },
    onChange(value) {
      this.email = value;
    },
  },
};
</script>

<style scoped></style>
