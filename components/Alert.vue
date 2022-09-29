<template>
  <div class="rounded-md p-4 mb-8" :class="bgClassObject">
    <div class="flex">
      <div class="flex-shrink-0">
        <ErrorIcon
          v-show="type === 'error'"
          class="h-5 w-5"
          aria-hidden="true"
        />
        <SuccessIcon
          v-show="type === 'success'"
          class="h-5 w-5"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium" :class="titleClassObject">
          {{ title }}
        </h3>
        <div class="mt-2 text-sm" :class="messageClassObject">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorIcon from "~/assets/icons/Error.svg?inline";
import SuccessIcon from "~/assets/icons/SuccessIcon.svg?inline";

export default {
  name: "Alert",
  components: {
    ErrorIcon,
    SuccessIcon,
  },
  props: {
    type: {
      type: String,
      default: "info",
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      titleClassObject: {
        "text-red-800": this.type === "error",
        "text-green-800": this.type === "success",
      },
      messageClassObject: {
        "text-red-700": this.type === "error",
        "text-green-700": this.type === "success",
      },
      bgClassObject: {
        "bg-red-50": this.type === "error",
        "bg-green-50": this.type === "success",
      },
    };
  },
};
</script>

<style scoped></style>
