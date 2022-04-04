<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex-grow">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "default",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style scoped></style>
