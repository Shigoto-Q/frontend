<template>
  <Input
    class=""
    :model="value"
    :name="schema.name"
    :type="schema.inputType"
    :placeholder="schema.placeholder"
    :label="schema.fieldLabel"
    @input="onInput"
    @change="onChange"
  />
</template>

<script>
import Input from "~/components/shared/Input";
import { abstractField } from "vue-form-generator";

export default {
  name: "FieldInput",
  components: { Input },
  mixins: [abstractField],
  methods: {
    onInput(value) {
      this.value = value;
    },
    onChange(value) {
      this.value = value;
    },
  },
};
</script>

<style scoped></style>
