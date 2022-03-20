<template>
    <div class="h-full p-6 border rounded-xl lg:p-12 shadow-static bg-white">
      <dt class="space-y-8">
        <div class="flex items-center text-oyster">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>

        <p class="text-xl text-comet lg:text-2xl">{{ title }}</p>
      </dt>
      <dd class="mt-2 text-base lg:text-lg text-club">
        <span>
          {{ body }}
        </span>
      </dd>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>
