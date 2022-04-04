<template>
  <div :class="classObject">
    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
      <div>
        <h3
          class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase text-club"
          id="tier-plain"
        >
          {{ title }}
        </h3>
      </div>
      <div class="flex items-baseline mt-4 text-6xl font-extrabold text-comet">
        ${{ price }}
        <span class="ml-1 text-2xl font-medium text-club"> /mo </span>
      </div>
      <p class="mt-5 text-lg text-comet">Yeah, more features.</p>
    </div>
    <div
      class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-white sm:p-10 sm:pt-6"
    >
      <ul role="list" class="space-y-4">
        <div v-for="feature in features" :key="feature.id">
          <PricingFeature :feature="feature.title" :key="feature.id" />
        </div>
      </ul>
      <div class="">
        <LinkButton :text="`Buy ${title}`" :secondary="!isPromotional" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from "~/components/shared/LinkButton";
export default {
  name: "PricingCard",
  components: { LinkButton },
  props: {
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    isPromotional: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classObject: {
        "flex flex-col overflow-hidden border-2 rounded-xl": true,
        "border-oyster": this.isPromotional,
      },
    };
  },
};
</script>

<style scoped></style>
