<template>
  <section class="relative w-full">
    <div
      class="relative items-center w-full px-5 py-12 mx-auto lg:py-32 md:px-12 lg:px-24 max-w-7xl"
    >
      <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center m-auto align-middle">
          <div class="max-w-3xl space-y-8 lg:text-center">
            <h2
              class="mb-4 text-4xl font-bold leading-none text-comet lg:text-6xl"
            >
              Why choose <span class="text-primary-light">Shigoto?</span>
            </h2>
          </div>
        </div>
      </div>

      <div class="py-6 lg:py-12">
        <div class="max-w-xl mx-auto lg:max-w-7xl">
          <h2 class="sr-only">Title text for screen readers</h2>
          <dl class="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Card
              title="Kubernetes"
              body="Flexible, and simple deployments, is what shigoto aims for with one-click deploys."
            />
            <Card
              title="Cron jobs"
              body="Shigoto lets you schedule jobs, whether they are on your server, docker, or kubernetes."
            />
            <Card
              title="Monitoring"
              body="With its real-time monitoring capability, Shigoto lets you stay alerted on your running jobs and it also stores their run history."
            />
            <Card
              title="Scheduler"
              body="Whether you want to run something every day, every second, every full moon, it is all possible with Shigoto."
            />
            <Card
              title="Docker"
              body="Not familiar with Docker? That is fine, shigoto does all the background work for you. From providing sample Dockerfiles, to building and pushing images."
            />
            <Card
              title="Alerts"
              body="Get notified immediately, whether something fails, or succeeds, you choose your own alerts."
            />
            <Card
              title="REST API"
              body="If you want to integrate it in your own system, Shigoto provides its own API."
            />
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "LandingFeatures",
  components: {
    Card,
  },
};
</script>

<style scoped></style>
