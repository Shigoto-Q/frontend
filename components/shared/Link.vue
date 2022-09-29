<template>
  <NuxtLink
    class="ml-auto text-sm text-link font-semibold text-sans text-lg leading-5 lg:text-sm"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => 'Link'
    }
  }
}
</script>

<style scoped></style>
