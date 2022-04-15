<template>
  <ul
    role="list"
    class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
  >
  <li
    v-for="item in items"
    :key="item.email"
    class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
  >
    <div class="w-full flex items-center justify-between p-6 space-x-6">
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 text-sm font-medium truncate">
          {{ item.imageName }}
        </h3>
        <span
          class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
        >{{ item.tag }}</span
        >
      </div>
      <p class="mt-1 text-gray-500 text-sm truncate">
        Last push at: {{ item.lastPushAt }} hours ago.
      </p>
    </div>
    <DockerIcon class="w-12 h-12 rounded-full flex-shrink-0" />
  </div>
  <div>
    <div class="-mt-px flex divide-x divide-gray-200">
      <div class="w-0 flex-1 flex">
        <button
          class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-ghost"
          @click="primaryAction(item)"
        >
          <DeployIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span class="ml-3">{{ primaryActionName }}</span>
        </button>
      </div>
      <div class="-ml-px w-0 flex-1 flex">
        <button
          class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 hover:bg-ghost"
          @click="secondaryAction(item)"
        >
          <DeleteIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span class="ml-3">{{ secondaryActionName }}</span>
        </button>
      </div>
    </div>
  </div>
  </li>
  </ul>

</template>

<script>
import TaskIcon from "@/assets/icons/TaskIcon.svg?inline";
import DeleteIcon from "@/assets/icons/DeleteIcon.svg?inline";
import DeployIcon from "@/assets/icons/DeployIcon.svg?inline";
import DockerIcon from "@/assets/icons/DockerColorIcon.svg?inline";
export default {
  name: "CardWithActions",
  components: { TaskIcon, DeleteIcon, DeployIcon, DockerIcon },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    primaryActionName: {
      type: String,
      default: () => 'Create',
    },
    secondaryActionName: {
      type: String,
      default: () => 'Delete',
    },
    primaryAction: {
      type: Function,
    },
    secondaryAction: {
      type: Function,
    },
  }
}
</script>

<style scoped>

</style>
