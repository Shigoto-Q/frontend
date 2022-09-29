<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900" />
      </div>
    </div>
    <div class="ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              {{ column }}
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(plan, planIdx) in items" :key="plan.id">
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-transparent',
                'relative py-4 pl-4 sm:pl-6 pr-3 text-sm',
              ]"
            >
              <div class="font-medium text-gray-900">
                {{ plan.name }}
                <span
                  v-if="plan.isCurrent"
                  class="text-indigo-600"
                >(Current Plan)</span>
              </div>
              <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                <span>{{ plan.age }} / {{ plan.cpu }}</span>
                <span class="hidden sm:inline"> · </span>
                <span>{{ plan.storage }}</span>
              </div>
              <div
                v-if="planIdx !== 0"
                class="absolute right-0 left-6 -top-px h-px bg-gray-200"
              />
            </td>
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-gray-200',
                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
              ]"
            >
              {{ plan.age }}
            </td>
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-gray-200',
                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
              ]"
            >
              {{ plan.cpu }}
            </td>
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-gray-200',
                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell',
              ]"
            >
              {{ plan.storage }}
            </td>
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-gray-200',
                'px-3 py-3.5 text-sm text-gray-500',
              ]"
            >
              <div class="sm:hidden">
                {{ plan.ready }}/mo
              </div>
              <div class="hidden sm:block">
                {{ plan.ready }}
              </div>
            </td>
            <td
              :class="[
                planIdx === 0 ? '' : 'border-t border-transparent',
                'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium',
              ]"
            >
              <Button secondary>
                Scale
              </Button>
              <div
                v-if="planIdx !== 0"
                class="absolute right-6 left-0 -top-px h-px bg-gray-200"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from '@/components/shared/Button'
export default {
  name: 'SimpleTable',
  components: { Button },
  props: {
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
