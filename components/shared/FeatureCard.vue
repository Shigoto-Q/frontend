<template>
  <div class="px-5 lg:px-0">
    <div class="mx-auto max-w-7xl">
      <div
        class="overflow-hidden border rounded-2xl bg-white lg:grid lg:grid-cols-2 lg:gap-4 shadow-static"
      >
        <div
          class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="space-y-4 lg:space-y-8 lg:self-center">
            <div class="flex items-center text-oyster">
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
            </div>
            <h2 class="text-4xl font-bold leading-snug text-comet lg:text-3xl">
              {{ title }}
            </h2>
            <p class="text-lg font-light leading-relaxed text-club">
              {{ text }}
            </p>
            <div class="flex w-full max-w-2xl gap-2">
              <div class="my-3 rounded-lg sm:mt-0">
                <NuxtLink
                  :to="to"
                  class="text-base font-medium text-center transition duration-500 ease-in-out transform rounded-t-none text-oyster hover:text-brink focus:outline-none"
                >
                  Learn more &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="md:aspect-w-2 md:aspect-h-1">
          <img
            class="object-contain"
            src="../../assets/images/dashboardSafari.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    title: {
      type: String,
      default: () => "",
    },
    to: {
      type: String,
      default: () => "/",
    },
    text: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped></style>
