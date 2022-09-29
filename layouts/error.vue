<template>
  <div class="bg-white">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 pt-2">
        <img
          class="mx-auto h-20 w-auto"
          src="../assets/logo.svg"
          alt="Shigoto logo"
        />
      </div>
      <div class="max-w-xl mx-auto">
        <div class="text-center">
          <h1
            class="mt-2 text-4xl font-extrabold text-periblue tracking-tight sm:text-5xl"
          >
            This page does not exist.
          </h1>
          <p class="mt-2 text-lg text-stone">
            The page you are looking for could not be found.
          </p>
        </div>
        <div class="mt-12">
          <h2 class="text-sm font-semibold text-punch tracking-wide uppercase">
            Popular pages
          </h2>
          <ul
            role="list"
            class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              v-for="(link, linkIdx) in links"
              :key="linkIdx"
              class="relative py-6 flex items-start space-x-4"
            >
              <div class="flex-shrink-0">
                <span
                  class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50"
                >
                  <component
                    :is="link.icon"
                    class="h-6 w-6 text-indigo-700"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span
                    class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <NuxtLink :to="link.to" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </NuxtLink>
                  </span>
                </h3>
                <p class="text-base text-gray-500">
                  {{ link.description }}
                </p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <NuxtLink
              to="/"
              class="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Or go back home<span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api/dist/vue-composition-api";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon.svg?inline";
import DocsIcon from "@/assets/icons/DocsIcon.svg?inline";
import ResourcesIcon from "@/assets/icons/ResourcesIcon.svg?inline";
import ApiIcon from "@/assets/icons/ApiIcon.svg?inline";

Vue.use(VueCompositionAPI);

const links = [
  {
    title: "Documentation",
    description: "Learn how to integrate our tools with your app",
    icon: DocsIcon,
    to: "/docs",
  },
  {
    title: "API Reference",
    description: "A complete API reference for our libraries",
    icon: ApiIcon,
    to: "/api",
  },
  {
    title: "Features",
    description: "Why Shigoto should be your first choice",
    icon: ResourcesIcon,
    to: "/features",
  },
];

export default {
  components: {
    ChevronRightIcon,
    DocsIcon,
    ResourcesIcon,
    ApiIcon,
  },
  props: ["error"],
  data() {
    return {
      links,
    };
  },
};
</script>
