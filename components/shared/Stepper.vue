<template>
  <nav aria-label="Progress">
    <ol role="list" class="md:flex md:space-y-0">
      <li v-for="step in steps" :key="step.name" class="md:flex-1">
        <a
          v-if="step.status === 'complete'"
          :href="step.href"
          class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-punch font-semibold tracking-wide uppercase group-hover:text-indigo-800"
          >{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
        <a
          v-else-if="step.status === 'current'"
          :href="step.href"
          class="pl-4 py-2 flex flex-col border-l-4 border-mana md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          aria-current="step"
        >
          <span
            class="text-xs text-punch font-semibold tracking-wide uppercase"
          >{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
        <a
          v-else
          :href="step.href"
          class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs text-punch font-semibold tracking-wide uppercase group-hover:text-gray-700"
          >{{ step.id }}</span>
          <span class="text-sm font-medium">{{ step.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>
