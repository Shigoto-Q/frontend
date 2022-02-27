<template>
  <div
    class="relative px-3 py-2 border-2 rounded-lg border-antiflash focus-within:ring-1 focus-within:ring-oyster focus-within:border-oyster bg-white"
  >
    <label
      :for="type"
      class="absolute inline-block px-1 -mt-px text-xs font-medium bg-white text-club -top-2 left-2"
    >
      {{ label }}
    </label
    >
    <input
      v-model="inputModel"
      :type="type"
      :name="name"
      :id="type"
      :placeholder="placeholder"
      @input="onInput"
      class="block w-full py-1 bg-white border-0 text-club placeholder-cat focus:ring-0 sm:text-sm"
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
    }
  },
  data() {
    return {
      inputModel: this.model,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
