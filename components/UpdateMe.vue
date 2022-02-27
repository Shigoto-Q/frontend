<template>
  <section class="w-full">
    <div
      class="items-center px-5 py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32"
    >
      <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center mx-auto align-middle">
          <div class="max-w-3xl space-y-8 lg:text-center">
            <h1
              class="mb-4 text-base font-bold leading-none text-comet lg:text-4xl"
            >
              We are <span class="text-oyster">coming soon</span>, subscribe to be aware when we do so!
            </h1>
            <form class="mt-8 space-y-6 lg:mt-0" action="#" method="POST">
              <Input label="E-mail" type="email" placeholder="user@example.com"/>
              <Button text="Update me"/>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div
          class="
          flex flex-col
          items-center
          justify-center
          pt-24
          mx-auto
          rounded-lg
          max-w-7xl
        "
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./shared/Button";
import Input from "./shared/Input";
export default {
  name: "UpdateMe",
  components: {Input, Button}
}
</script>

<style scoped>

</style>
