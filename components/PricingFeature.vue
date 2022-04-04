<template>
  <li class="flex items-start">
    <div class="flex-shrink-0">
      <svg
        class="w-6 h-6 text-comet"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <p class="ml-3 text-base text-club">
      {{ feature }}
    </p>
  </li>
</template>

<script>
export default {
  name: "PricingFeature",
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
