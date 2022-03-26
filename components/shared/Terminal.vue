<template>
  <div class="w-full">
    <div class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
                bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden h-80 overflow-y-auto">
        <div class="top mb-2 flex">
            <div class="h-3 w-3 bg-red-500 rounded-full"></div>
            <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        <div class="mt-4 flex">
            <span class="text-green-400 select-none">shigoto:~$</span>
            <p class="flex-1 typing items-center pl-2">
                docker push image
                <br>
            </p>
        </div>
        <div v-for="msg in outputMessages" class="flex flex-col">
            <span class="text-stone"> {{ msg }}</span>
        </div>
        <div v-show="isEnd" class="mt-4 flex">
            <span class="text-green-400 select-none">shigoto:~$</span>
            <p class="flex-1 typing items-center pl-2">
                done
                <br>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { G_TERMINAL_OUTPUT, G_TERMINAL_END } from '@/store/terminal/getter-types';

export default {
  name: 'Terminal',
  props: {
    output: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    ...mapGetters({
      outputMessages: G_TERMINAL_OUTPUT,
      isEnd:  G_TERMINAL_END,
    }),
  },
}
</script>

<style>

</style>
