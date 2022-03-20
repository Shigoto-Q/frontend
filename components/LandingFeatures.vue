<template>
<section class="relative w-full">
  <div
    class="
      relative
      items-center
      w-full
      px-5
      py-12
      mx-auto
      lg:py-32
      md:px-12
      lg:px-24
      max-w-7xl
    "
  >
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center m-auto align-middle">
        <div class="max-w-3xl space-y-8 lg:text-center">
          <h2
            class="mb-4 text-4xl font-bold leading-none text-comet lg:text-6xl"
          >
          Why choose <span class="text-oyster">Shigoto?</span>
          </h2>
        </div>
      </div>
    </div>

    <div class="py-6 lg:py-12">
      <div class="max-w-xl mx-auto lg:max-w-7xl">
        <h2 class="sr-only">Title text for screen readers</h2>
        <dl class="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
          <Card title="TODO" body="TODO" />
        </dl>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Card from "@/components/Card.vue"
export default {
name: "LandingFeatures",
  components: {
    Card,
    }
}
</script>

<style scoped>

</style>
