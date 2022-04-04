<template></template>

<script>
export default {
  name: "create",
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
};
</script>

<style scoped></style>
