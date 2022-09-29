<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="application in applications" :key="application.type">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="flex-shrink-0">
              <component :is="application.icon" class="h-12 w-12" />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
              <div>
                <p class="text-sm font-medium text-indigo-600 truncate">
                  {{ application.name }}
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  <span class="truncate">{{ application.type }}</span>
                </p>
              </div>
              <div class="hidden md:block">
                <div>
                  <p class="text-sm text-gray-900">
                    {{ " " }}
                    <time :datetime="application.date">{{
                      application.stage
                    }}</time>
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <RouterIcon
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    {{ application.ip }}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p class="text-sm text-gray-900">
                    {{ " " }}
                    <time :datetime="application.date">{{
                      application.stageTwo
                    }}</time>
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <RouterIcon
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    {{ application.descriptionSecond }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TrashBinIcon class="h-10 w-10 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LoadBalancerIcon from "@/assets/icons/LoadBalancerIcon.svg?inline";
import RouterIcon from "@/assets/icons/RouterIcon.svg?inline";
import TrashBinIcon from "@/assets/icons/TrashBinIcon.svg?inline";

export default {
  components: {
    LoadBalancerIcon,
    RouterIcon,
    TrashBinIcon,
  },
  data() {
    return {
      applications: [
        {
          name: "sgt-frontend",
          type: "ClusterIP",
          icon: RouterIcon,
          date: "10.112.0.1",
          ip: "10.112.0.1",
          stage: "CLUSTER-IP",
          stageTwo: "EXTERNAL-IP",
          descriptionSecond: "34.116.232.253",
        },
        {
          name: "sgt-frontend-svc",
          type: "LoadBalancer",
          icon: LoadBalancerIcon,
          date: "10.112.13.125",
          ip: "10.112.13.125",
          stage: "CLUSTER-IP",
          stageTwo: "EXTERNAL-IP",
          descriptionSecond: "<none>",
        },
      ],
    };
  },
};
</script>
