<template>
  <div
    class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"
  >
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
  </div>
</template>

<script>
import ChevronDownIcon from "@/assets/icons/ChevronDown.svg?inline";
import SearchIcon from "@/assets/icons/SearchIcon.svg?inline";

export default {
  name: "Heading",
  components: {
    ChevronDownIcon,
    SearchIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
