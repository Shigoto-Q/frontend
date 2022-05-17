<template>
  <div>
    <Modal
      v-model="show"
      @confirm="confirm"
      @cancel="cancel"
      :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-class': 'translate-y-0',
      }"
    >
      <template v-slot:title>Create task</template>
      <Input />
    </Modal>
    <Button @click="show = true">Open modal</Button>
  </div>
</template>

<script>
import Modal from "~/components/shared/Modal";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
export default {
  name: "ModalExample",
  components: {
    Input,
    Button,
    Modal,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    confirm() {
      // some code...
      this.show = false;
    },
    cancel(close) {
      // some code...
      close();
    },
  },
};
</script>
