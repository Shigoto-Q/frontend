<template>
  <ul
    role="list"
    class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
  >
    <li
      v-for="image in images"
      :key="image.email"
      class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm font-medium truncate">
              {{ image.imageName }}
            </h3>
            <span
              class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
              >{{ image.tag }}</span
            >
          </div>
          <p class="mt-1 text-gray-500 text-sm truncate">
            Last push at: {{ image.lastPushAt }} hours ago.
          </p>
        </div>
        <DockerIcon class="w-12 h-12 rounded-full flex-shrink-0" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a
              href="#"
              class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <DeleteIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Delete</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a
              href="#"
              class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <DeployIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Deploy</span>
            </a>
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
import { A_LIST_IMAGES } from "@/store/kubernetes/action-types";
import { G_KUBERNETES_DOCKER_IMAGES } from "@/store/kubernetes/getter-types";
import { mapGetters } from "vuex";

export default {
  name: "deploy",
  components: { TaskIcon, DeleteIcon, DeployIcon, DockerIcon },
  middleware: "auth",
  layout(context) {
    return "dashboard";
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      images: G_KUBERNETES_DOCKER_IMAGES,
    }),
  },
  mounted() {
    this.$store.dispatch(A_LIST_IMAGES);
  },
};
</script>

<style scoped></style>
