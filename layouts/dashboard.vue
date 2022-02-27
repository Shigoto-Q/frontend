<template>
  <div class="md:h-screen md:grid md:grid-cols-6">
    <section>
      <Sidebar />
    </section>
    <main class="md:col-span-5">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Sidebar from "~/components/dashboard/Sidebar";
export default {
  name: "dashboard",
  components: {Sidebar}
}
</script>

<style scoped>

</style>
