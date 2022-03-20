<template>
  <Checkbox
    class="form-control mt-4 mb-4"
    :model="value"
    :name="schema.name"
    :type="schema.inputType"
    :placeholder="schema.placeholder"
    :label="schema.fieldLabel"
    :description="schema.description"
    @input="onInput"
    @change="onChange"
  />
</template>

<script>
import Checkbox from "~/components/shared/Checkbox";
import { abstractField } from "vue-form-generator";


export default {
  name: "FieldCheckbox",
  components: {Checkbox,},
  mixins: [
    abstractField,
  ],
  methods: {
    onInput(value) {
      this.value = value;
    },
    onChange(value) {
      this.value = value;
    }
  }
}
</script>

<style scoped>

</style>
