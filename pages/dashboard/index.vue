<template />

<script>
export default {
  name: "Pricing",
  middleware: "auth",
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
