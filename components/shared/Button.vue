<template>
  <button
    v-on="$listeners"
    type="submit"
    class="items-center block w-full px-10 py-4 text-lg font-medium text-center text-white transition duration-500 ease-in-out transform border rounded-lg border-oyster hover:border-oyster shadow-static bg-oyster hover:shadow-none lg:px-12 hover:bg-mana focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: () => 'Submit'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
