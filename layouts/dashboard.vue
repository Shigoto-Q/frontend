<template>
  <div class="md:h-screen md:grid md:grid-cols-6">
    <section class="w-max">
      <Sidebar />
    </section>
    <main class="dashboard w-full -ml-6 md:col-span-5">
      <Nuxt />
      <Notification />
    </main>
  </div>
</template>

<script>
import Sidebar from "~/components/dashboard/Sidebar";
import Notification from "@/components/shared/notification/Notify";
export default {
  name: "Dashboard",
  components: { Sidebar, Notification },
};
</script>

<style scoped lang="scss"></style>
