<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ position.title }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ position.type }}
                </p>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  <IngressIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ position.department }}
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <IngressIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ position.location }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <IngressIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <p>
                  Age
                  {{ ' ' }}
                  <time :datetime="position.closeDate">{{ position.closeDateFull }}</time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IngressIcon from '@/assets/icons/IngressIcon.svg?inline'

export default {
  name: 'StackedList',
  components: {
    IngressIcon,
  },
  data() {
    return {
      positions: [
        {
          id: 1,
          title: 'ingress-shigoto-service',
          type: 'Running',
          location: '80, 443',
          department: 'shigo.to, ws.shigo.to, api.shigo.to',
          closeDate: '15d',
          closeDateFull: '15d',
        },
        {
          id: 2,
          title: 'ingress-test-service',
          type: 'Running',
          location: '80, 443',
          department: 'shigo.to, ws.shigo.to, api.shigo.to',
          closeDate: '15d',
          closeDateFull: '15d',
        },
      ],
    }
  },
}
</script>
