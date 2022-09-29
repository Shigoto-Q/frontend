<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex-grow flex flex-col">
      <Banner text="Soon Shigoto will offer free deploys/hosting for open source projects. More details coming soon."/>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "~/components/shared/Banner";

export default {
  name: "default",
  components: {
    Banner,
    Footer,
    Navbar,
  },
};
</script>

<style scoped></style>
