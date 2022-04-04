<template>
  <Select
    class="form-control mt-4 mb-4"
    :model="value"
    :name="schema.name"
    :type="schema.inputType"
    :placeholder="schema.placeholder"
    :label="schema.fieldLabel"
    :options="schema.options"
    @input="onInput"
    @change="onChange"
  />
</template>

<script>
import Select from "~/components/shared/Select";
import { abstractField } from "vue-form-generator";

export default {
  name: "FieldSelect",
  components: { Select },
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
