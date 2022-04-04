<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.class}`"
    :data-type="context.type"
  >
    <label
      class="absolute inline-block px-1 -mt-px text-xs font-medium bg-white text-club -top-2 left-2"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Label",
  props: {
    label: {
      type: String,
      default: () => "",
    },
    context: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
