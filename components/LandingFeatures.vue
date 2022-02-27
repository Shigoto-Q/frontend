<template>

  <section>
    <div class="lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-16">
      <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center mx-auto">
          <div class="max-w-3xl space-y-8 lg:text-center">
            <h1
              class="mb-4 text-4xl font-bold leading-none text-comet lg:text-6xl"
            >
              All the features
            </h1>
            <p class="mb-6 text-lg font-light leading-relaxed text-club">
              Free and Premium themes, UI Kit's, templates and landing pages built
              with Tailwind CSS, HTML & Next.js.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 space-y-8">
        <FeatureCard to="/login" title="Legacy" text="Lorem ipsum..." />
        <FeatureCard to="/login" title="Legacy" text="Lorem ipsum..." />
        <FeatureCard to="/login" title="Legacy" text="Lorem ipsum..." />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "./shared/FeatureCard";
export default {
name: "LandingFeatures",
  components: {FeatureCard}
}
</script>

<style scoped>

</style>
