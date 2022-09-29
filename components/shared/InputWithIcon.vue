<template>
  <div>
    <label :for="type" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <CopyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        :id="type"
        v-model="inputModel"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        @input="onInput"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
import CopyIcon from "@/assets/icons/CopyIcon.svg?inline";

export default {
  name: "InputWithIcon",
  components: {
    CopyIcon,
  },
  props: {
    model: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    inputModel() {
      return this.model;
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    onChange(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style></style>
