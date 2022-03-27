<template>
  <div
    class="relative px-3 py-2 border-2 rounded-lg border-antiflash focus-within:ring-1 focus-within:ring-oyster focus-within:border-oyster bg-white"
  >
    <label
      :for="type"
      class="absolute inline-block px-1 -mt-px text-xs font-medium bg-white text-stone -top-2 left-2"
    >
      {{ label }}
    </label
    >
    <input
      v-model="inputModel"
      :type="type"
      :name="name"
      :id="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
      class="block w-full py-1 bg-white border-0 text-vulcan placeholder-cat focus:ring-0 sm:text-sm rounded"
    />
  </div>
</template>

<script>

export default {
  name: "Input",
  props: {
    model: {
      type: String,
      default: () => '',
    },
    label: {
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
    type: {
      type: String,
      default: () => '',
    },
    disabled: {
      type: Boolean,
      default: () => false,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    inputModel() {
      return this.model;
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
