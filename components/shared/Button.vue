<template>
  <button
    v-on="$listeners"
    type="submit"
    class="inline-flex items-center px-3 py-2 text-sm text-sm leading-4 font-medium"
    :class="classObject"
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
      default: () => "Submit",
    },
    secondary: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      // TODO: Split common class names
      classObject: {
        "md:mt-0": true,
        " text-white transition duration-500 ease-in-out transform border rounded-lg border-oyster hover:border-oyster shadow-static bg-oyster hover:shadow-none lg:px-12 hover:bg-mana focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster":
          !this.secondary,
        " text-oyster text-base transition duration-500 ease-in-out transform border rounded-lg hover:border-oyster shadow-static bg-white hover:shadow-none lg:px-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster":
          this.secondary,
        "items-center block px-1 py-2 mt-2 text-base font-medium text-center transition duration-500 ease-in-out transform bg-white border-2 rounded-lg border-antiflash text-oyster shadow-static lg:px-12 text-blue hover:border-oyster focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster hover:shadow-none":
          this.secondary,
      },
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
