<template>
  <NuxtLink
    class="px-1 py-6 text-base md:px-3 text-club"
    exact-active-class="border-b-2 border-oyster"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: {
      type: String,
      default: () => "/",
    },
    text: {
      type: String,
      default: () => "Link",
    },
  },
};
</script>

<style scoped></style>
