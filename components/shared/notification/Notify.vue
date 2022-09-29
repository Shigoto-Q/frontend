<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      aria-live="assertive"
      class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      <div
        class="w-full flex flex-col mt-auto items-center space-y-4 sm:items-end"
      >
        <div
          v-if="show"
          class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <WarningIcon
                  v-show="params.type == notifications.WARNING"
                  class="h-10 w-10"
                />
                <SuccessIcon
                  v-show="params.type == notifications.SUCCESS"
                  class="h-10 w-10"
                />
                <FailureIcon
                  v-show="params.type == notifications.ERROR"
                  class="h-10 w-10"
                />
                <InfoIcon
                  v-show="params.type == notifications.INFO"
                  class="h-10 w-10"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-xl font-medium text-cloud">
                  {{ params.title }}
                </p>
                <p class="mt-1 text-sm text-stone">
                  {{ params.body }}
                </p>
              </div>
            </div>
          </div>
          <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
            <div class="w-full h-full bg-gray-200 absolute" />
            <div
              class="h-full relative w-0"
              :style="{ width: percentage + '%' }"
              :class="classObject"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import CheckMarkIcon from "~/assets/icons/CheckMark.svg?inline";
import SuccessIcon from "~/assets/icons/SuccessIcon.svg?inline";
import FailureIcon from "~/assets/icons/Failure.svg?inline";
import WarningIcon from "~/assets/icons/Warning.svg?inline";
import InfoIcon from "~/assets/icons/Info.svg?inline";
import XIcon from "~/assets/icons/X.svg?inline";
import { eventConstants } from "@/constants/events";
import { notificationTypes } from "@/constants/notifications";

export default {
  name: "Notification",
  components: {
    CheckMarkIcon,
    XIcon,
    SuccessIcon,
    FailureIcon,
    WarningIcon,
    InfoIcon,
  },
  data() {
    return {
      notifications: notificationTypes,
      notify: false,
      notificationName: "notification",
      params: {},
      duration: 5000,
      title: "Default title",
      body: "Action successful!",
      percentage: 0,
    };
  },
  computed: {
    classObject() {
      if (this.params.type == notificationTypes.SUCCESS) {
        return "bg-emerald-500";
      } else if (this.params.type == notificationTypes.ERROR) {
        return "bg-red-700";
      } else if (this.params.type == notificationTypes.WARNING) {
        return "bg-amber-500";
      } else {
        return "bg-aqua";
      }
    },
    percent() {
      return this.percentage.toFixed();
    },
    show: {
      get() {
        return this.notify;
      },
      set(value) {
        this.notify = value;
      },
    },
  },
  watch: {
    showAlert(newVal, old) {
      this.notify = newVal;
    },
  },
  mounted() {
    this.$nuxt.$on(eventConstants.SHOW_NOTIFICATION, this.onAdd);
    this.$on("close", this.onClose);
  },
  methods: {
    onAdd(event) {
      this.show = true;
      this.params = event;
      this.closeAlert();
    },
    onClose() {
      this.show = false;
      this.percentage = 0;
    },
    closeAlert() {
      const interval = this.params.duration / ((100 - this.percentage) * 0.1);
      var intval = setInterval(() => {
        if (this.percentage < 100) {
          this.percentage += 0.3;
        } else {
          clearInterval(intval);
        }
      }, 10);
      setTimeout(() => {
        this.$emit("close");
        this.percentage = 0;
      }, this.params.duration || this.duration);
    },
  },
};
</script>
