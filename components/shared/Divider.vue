<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="px-3 bg-white text-lg font-medium text-stone">{{
        title
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
