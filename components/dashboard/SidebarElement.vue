<template>
  <li class="relative">
    <NuxtLink
      class="font-sans flex items-center py-6 px-4 h-12 overflow-hidden rounded-lg text-ellipsis whitespace-nowrap rounded hover:text-secondary hover:bg-teal-100 transition duration-300 ease-in-out"
      active-class="text-primary font-bold bg-teal-50"
      :to="to"
    >
      <component class="w-8 h-8 mr-4" :is="icon" />
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: "SidebarElement",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
