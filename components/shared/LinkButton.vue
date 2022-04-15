<template>
  <NuxtLink :to="to" :class="classObject">
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    to: {
      type: String,
      default: () => "/",
    },
    secondary: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => "Link",
    },
  },
  data() {
    return {
      // TODO: Split common class names
      classObject: {
        "md:mt-0 md:ml-4": true,
        "items-center block px-1 py-2 mt-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border rounded-lg border-oyster hover:border-oyster shadow-staticButton bg-primary hover:shadow-none lg:px-12 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster ":
          !this.secondary,
        "items-center block px-1 py-2 mt-2 text-mana text-base font-medium text-center transition duration-500 ease-in-out transform bg-white border-2 rounded-lg border-subtitle border-antiflash text-subtitle shadow-static lg:px-12 text-blue hover:text-bubble hover:border-bubble focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oyster hover:shadow-none":
          this.secondary,
      },
    };
  },
};
</script>

<style scoped></style>
