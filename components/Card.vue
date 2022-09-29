<template>
  <div class="card h-full p-6 border lg:p-12 bg-white">
    <dt class="space-y-8">
      <div class="flex items-center text-primary-light">
        <svg
          class="w-6 h-6"
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <p class="card__title text-xl text-comet lg:text-2xl">
          {{ title }}
        </p>
      </div>
      <hr class="card__divider-solid">
    </dt>
    <dd class="mt-2 text-base lg:text-lg text-club">
      <span>
        {{ body }}
      </span>
    </dd>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  border-radius: 0.5rem;
  --tw-shadow-color: #000;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
  &__title {
    color: $primary-color;
    margin-left: 1rem;
  }
  &__divider-solid {
    border-top: 1px solid #bbb;
    margin-top: -2px;
    padding-top: 1rem;
  }
}
</style>
