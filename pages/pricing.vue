<template>
  <div class="bg-white">
    <div
      class="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="max-w-6xl space-y-8 lg:text-center">
        <h1
          class="text-2xl font-bold leading-none tracking-tighter text-comet lg:text-5xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bubble"
          >
            Shigoto
          </span>
          plans and pricing
        </h1>
        <p class="text-xl text-comet">
          Everything you need, nothing you don't. Pick a plan that best suits
          your business.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section v-for="(tier, tierIdx) in tiers" :key="tier.name">
          <div class="px-4 mb-8">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ tier.name }}
            </h2>
            <p class="mt-4">
              <span class="text-4xl font-extrabold text-gray-900"
                >${{ tier.priceMonthly }}</span
              >
              {{ " " }}
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <Button @click="handleCheckout"> Buy {{ tier.name }} </Button>
          </div>

          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption
              class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"
            >
              {{
                section.name
              }}
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="feature in section.features"
                :key="feature.name"
                class="border-t border-gray-200"
              >
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td class="py-5 pr-4">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700 text-right"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="ml-auto h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <XIcon v-else class="ml-auto h-5 w-5 text-gray-400" />
                    <span class="sr-only">{{
                      feature.tiers[tier.name] === true ? "Yes" : "No"
                    }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            :class="[
              tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
              'border-t border-gray-200 px-4',
            ]"
          >
            <Button @click="handleCheckout"> Buy {{ tier.name }} </Button>
          </div>
        </section>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th
                class="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                scope="col"
              >
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th
                v-for="tier in tiers"
                :key="tier.name"
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                {{ tier.name }}
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                class="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                scope="row"
              >
                Pricing
              </th>
              <td
                v-for="tier in tiers"
                :key="tier.name"
                class="h-full py-8 px-6 align-top"
              >
                <div class="relative h-full table">
                  <p>
                    <span class="text-4xl font-extrabold text-gray-900"
                      >${{ tier.priceMonthly }}</span
                    >
                    {{ " " }}
                    <span class="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <p class="mt-4 mb-16 text-sm text-gray-500">
                    {{ tier.description }}
                  </p>
                  <Button @click="handleCheckout"> Buy {{ tier.name }} </Button>
                </div>
              </td>
            </tr>
            <template v-for="section in sections">
              <tr>
                <th
                  class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                  colspan="4"
                  scope="colgroup"
                >
                  {{ section.name }}
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th
                  class="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-gray-700"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <template v-else>
                    <CheckIcon
                      v-if="feature.tiers[tier.name] === true"
                      class="h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <XIcon
                      v-else
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="sr-only"
                      >{{
                        feature.tiers[tier.name] === true
                          ? "Included"
                          : "Not included"
                      }}
                      in {{ tier.name }}</span
                    >
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-200">
              <th class="sr-only" scope="row">Choose your plan</th>
              <td v-for="tier in tiers" :key="tier.name" class="pt-5 px-6">
                <a
                  :href="tier.href"
                  class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                  >Buy {{ tier.name }}</a
                >
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="flex justify-center mt-4">
          <p class="text-sm text-comet self-center">
            Shigoto will contribute 0.5% of your purchase to remove CO₂ from the
            atmosphere. Read more
            <a class="text-link" href="https://climate.stripe.com/GcbOW2"
              >here.</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from "@/assets/icons/CheckMark.svg?inline";
import XIcon from "@/assets/icons/X.svg?inline";
import Link from "@/components/shared/Link";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@/components/shared/Button";

export default {
  name: "pricing",
  components: {
    Button,
    Link,
    CheckIcon,
    XIcon,
  },
  data() {
    return {
      stripe: null,
      sections: [
        {
          name: "Kubernetes",
          features: [
            {
              name: "Deployments",
              tiers: {
                Personal: " 1 deployments",
                Professional: "Up to 5 deployments",
                Business: "Up to 100 deployments",
              },
            },
            {
              name: "Services",
              tiers: {
                Personal: "1 service",
                Professional: "Up to 5 services",
                Business: "Up to 100 services",
              },
            },
            { name: "Ingress", tiers: { Professional: true, Business: true } },
            {
              name: "Ingress SSL/TLS",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            {
              name: "Namespace",
              tiers: {
                Personal: "1 namespace",
                Professional: "1 namespace",
                Business: "Up to 5 namespaces",
              },
            },
            { name: "Persistent storage", tiers: { Business: true } },
          ],
        },
        {
          name: "Docker",
          features: [
            {
              name: "Image build",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            {
              name: "Image push",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            { name: "Own registry", tiers: { Business: true } },
          ],
        },
        {
          name: "Cron jobs",
          features: [
            {
              name: "Simple HTTP Operator",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            {
              name: "Kubernetes job",
              tiers: { Professional: true, Business: true },
            },
            {
              name: "Docker job",
              tiers: { Personal: true, Professional: true, Business: true },
            },
          ],
        },
        {
          name: "Monitoring & Alerts",
          features: [
            {
              name: "Discord integration",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            {
              name: "Slack integration",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            {
              name: "E-mail notifications",
              tiers: { Personal: true, Professional: true, Business: true },
            },
            { name: "SMS notifications", tiers: { Business: true } },
          ],
        },
      ],
      tiers: [
        {
          name: "Personal",
          href: "#",
          priceMonthly: 15,
          description:
            "Quis suspendisse ut fermentum neque vivamus non tellus.",
        },
        {
          name: "Professional",
          href: "#",
          priceMonthly: 50,
          description:
            "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
        },
        {
          name: "Business",
          href: "#",
          priceMonthly: 500,
          description:
            "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
        },
      ],
    };
  },
  created() {
    this.loadStripeApi();
  },
  methods: {
    async loadStripeApi() {
      this.stripe = await loadStripe(process.env.stripeSecretKey);
    },
    handleCheckout() {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            this.$auth.strategy.token.get().split(" ")[1]
          }`,
        },
      };
      const body = {
        priceId: "price_1L3QDKItAhzYJ7dgF3wKWDHL",
      };
      this.$axios
        .post("/api/v1/customer/subscription/session/create/", body, config)
        .then((res) => {
          console.log(res);
          this.stripe?.redirectToCheckout({ sessionId: res.data.sessionId });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped></style>
