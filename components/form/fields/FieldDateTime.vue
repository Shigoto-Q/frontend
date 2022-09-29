<template>
  <DateTimePicker
    class=""
    :model="value"
    :placeholder="schema.placeholder"
    :label="schema.fieldLabel"
    @change="onChange"
  />
</template>

<script>
import { abstractField } from "vue-form-generator";
import Input from "~/components/shared/Input";
import DateTimePicker from "@/components/shared/DateTimePicker";

export default {
  name: "FieldDateTime",
  components: { DateTimePicker, Input },
  mixins: [abstractField],
  methods: {
    onChange(value) {
      this.value = value;
    },
  },
};
</script>

<style scoped></style>
