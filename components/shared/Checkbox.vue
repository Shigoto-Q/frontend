<template>
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          id="name"
          :name="name"
          type="checkbox"
          class="form-control focus:ring-indigo-500 h-4 w-4 text-mana border-gray-300 rounded"
          @input="onInput"
          @change="onChange"
          :checked="inputModel"
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="candidates" class="font-medium text-vulcan">{{ label }}</label>
        <span id="candidates-description" class="text-stone">{{ description }}</span>
      </div>
    </div>
</template>
<script>

export default {
  name: "Checkbox",
  props: {
    model: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    },
  },
  computed: {
    inputModel() {
      return this.model;
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.checked)
    },
    onChange(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style scoped>

</style>
