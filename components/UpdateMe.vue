<template>
  <section class="w-full">
    <h1 class="mb-4 text-base font-bold leading-none text-comet lg:text-base">
      We are <span class="text-oyster">coming soon</span>, subscribe to be aware
      when we do so!
    </h1>
    <form class="mt-2 space-y-6 lg:mt-0" action="#" method="POST">
      <Input label="E-mail" type="email" placeholder="user@example.com" />
      <Button text="Update me" />
    </form>
  </section>
</template>

<script>
import Button from "./shared/Button";
import Input from "./shared/Input";
export default {
  name: "UpdateMe",
  components: { Input, Button },
};
</script>

<style scoped></style>
