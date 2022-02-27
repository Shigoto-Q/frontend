<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="flex justify-center items-center"
    content-class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
    v-on="$listeners"
  >

    <div class="mt-3 text-center sm:mt-5">
      <span class="text-lg leading-6 font-medium text-gray-900">
        <slot class="text-lg leading-6 font-medium text-gray-900" name="title"></slot>
      </span>
    </div>
    <div class="mt-3 text-center sm:mt-5">
      <div class="mt-2">
        <slot class="text-sm text-gray-500" v-bind:params="params"></slot>
      </div>
    </div>
    <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
      <Button class="vfm-btn" @click="$emit('confirm', close)" text="Confirm"/>
      <Button class="vfm-btn" @click="$emit('cancel', close)" text="Cancel"/>
    </div>
  </vue-final-modal>
</template>

<script>
import Button from "~/components/shared/Button";
export default {
  name: "Modal",
  components: {Button},
  inheritAttrs: false,
}
</script>

<style scoped>

</style>
