<template></template>

<script>
export default {
  name: "notifications",
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
};
</script>

<style scoped></style>
