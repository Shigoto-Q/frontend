<template>
  <li>
    <NuxtLink
      class=""
      active-class="text-primary font-bold bg-purple-100"
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
