<template>
  <div>
    <section class="relative w-full">
      <div
        class="relative items-center w-full px-5 py-24 mx-auto max-w-7xl md:px-12 lg:px-24"
      >
        <div class="flex w-full mx-auto text-left lg:mt-6">
          <div class="relative inline-flex items-center m-auto align-middle">
            <div class="max-w-6xl space-y-8 lg:text-center">
              <h1
                class="mb-4 text-4xl font-bold leading-none tracking-tighter text-comet lg:text-7xl"
              >
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bubble"
                >
                  An amazing pricing
                </span>
                that will make you fall on your back
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="relative items-center w-full px-5 py-12 mx-auto lg:pb-12 lg:py-0 md:px-12 lg:px-16 max-w-7xl"
      >
        <div class="relative rounded-xl bg-ghost lg:p-10">
          <div class="relative z-10 p-4 mx-auto max-w-7xl">
            <div
              class="max-w-md mx-auto space-y-4 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0"
            >
              <PricingCard
                price="99"
                title="Professional"
                :features="features"
                :is-promotional="isPromotional"
              />
              <PricingCard price="50" title="Starter" :features="features" />
              <PricingCard price="499" title="Business" :features="features" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "pricing",
  data() {
    return {
      features: [
        { title: "100 Deployments monthly", id: 1 },
        { title: "Unlimited cron tabs", id: 2 },
      ],
      isPromotional: true,
    };
  },
};
</script>

<style scoped></style>
