<template>
  <QrcodeVue :value="value" :size="size" :level="level" />
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  name: "QRComponent",
  components: {
    QrcodeVue,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: () => 200,
    },
    level: {
      type: String,
      default: () => "H",
    },
  },
};
</script>
