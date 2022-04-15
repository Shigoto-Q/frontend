<template>
  <div class="w-full">
    <div
      class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-lilac pb-6 pt-4 rounded-t-lg leading-normal overflow-hidden h-3"
    >
      <div class="top mb-2 flex sticky">
        <div class="h-3 w-3 bg-red-500 rounded-full"></div>
        <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
        <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
    <div
      class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-lilac pb-6 pt-4 rounded-b-lg leading-normal overflow-hidden h-80 overflow-y-auto scroll-smooth"
    >
      <div class="mt-4 flex">
        <span
          class="text-primary select-none font-medium font-serif tracking-widest"
          >shigoto:~$</span
        >
        <p
          class="flex-1 typing items-center pl-2 text-vulcan font-sans tracking-wider"
        >
          docker push image
          <br />
        </p>
      </div>
      <div v-for="msg in outputMessages" class="flex flex-col">
        <span class="text-primary font-sans tracking-wider"> {{ msg }}</span>
      </div>
      <div v-show="isEnd" class="mt-4 flex">
        <span
          class="text-primary select-none font-medium font-serif tracking-widest"
          >shigoto:~$</span
        >
        <p
          class="flex-1 typing items-center pl-2 text-vulcan font-sans tracking-wider"
        >
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  G_TERMINAL_OUTPUT,
  G_TERMINAL_END,
} from "@/store/terminal/getter-types";

export default {
  name: "Terminal",
  props: {
    output: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      outputMessages: G_TERMINAL_OUTPUT,
      isEnd: G_TERMINAL_END,
    }),
  },
};
</script>

<style></style>
