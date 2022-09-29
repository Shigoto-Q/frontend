<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
        >
          <span class="sr-only">Edit</span>
          <EditIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
        >
          <span class="sr-only">Delete</span>
          <ResetIcon class="h-5 w-5 text-mana" aria-hidden="true" />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import EditIcon from '~/assets/icons/Edit.svg?inline'
import ResetIcon from '~/assets/icons/Reset.svg?inline'

export default {
  components: {
    EditIcon,
    ResetIcon
  }
}
</script>
