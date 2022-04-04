<template>
  <section class="w-full">
    <div
      class="items-center px-5 py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32"
    >
      <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center mx-auto align-middle">
          <div class="max-w-3xl space-y-8 lg:text-center">
            <h1
              class="mb-4 text-4xl font-bold leading-none text-comet lg:text-6xl"
            >
              Join <span class="text-oyster">now, </span>
              and stop worrying.
            </h1>
            <p class="mb-6 text-lg font-light leading-relaxed text-club">
              Professional monitoring and notification, never worry about a cron
              job failing.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg max-w-7xl"
        >
          <img
            class="object-cover object-center w-full rounded-xl"
            alt="hero"
            src="../assets/images/dashboardCentered.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingDescription",
};
</script>

<style scoped></style>
