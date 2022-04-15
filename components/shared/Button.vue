<template>
  <button
    v-on="$listeners"
    type="submit"
    class="inline-flex items-center px-3 py-2 text-sm text-sm leading-4 font-medium text-center self-center flex justify-center"
    :class="classObject"
  >
    <span class="text-white">
      {{ text }}
    </span>
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
    classes: {
      type: String,
      default: () => "",
    }
  },
  data() {
    return {
    };
  },
  computed: {
    classObject() {
      let className = "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-weaver"
      // let className = 'md:mt-0 items-center text-center block px-1 py-2 mt-2 text-base font-medium text-center transition duration-500 ease-in-out transform border rounded-lg border-antiflash shadow-static lg:px-12 '
      if (this.secondary) {
        className = className + 'text-weaver border-weaver border-2 text-blue'
      } else if (!this.secondary) {
        className = className + 'text-ghost border-primary-light hover:border-primary-light bg-bubble '
      }
      className += this.classes
      return className;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
</style>
