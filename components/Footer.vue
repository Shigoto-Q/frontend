<template>
  <footer class="bg-slate-50 mt-16" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <NuxtLink
                    :to="item.href"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <NuxtLink
                    :to="item.href"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <NuxtLink
                    :to="item.href"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Legal
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <NuxtLink
                    :to="item.href"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3
            class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
          >
            Subscribe to our newsletter
          </h3>
          <p class="mt-4 text-base text-gray-500">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              type="email"
              name="email-address"
              autocomplete="email"
              required=""
              class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
              placeholder="Enter your email"
            >
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button classes="w-full">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="mt-8 border-t border-gray-200 pt-4 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-2 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2022 Shigoto, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import ShigotoLogo from 'assets/logo.svg?inline'
import GithubIcon from 'assets/icons/GithubIcon.svg?inline'
import LinkedinIcon from 'assets/icons/LinkedinIcon.svg?inline'
import DiscordIcon from 'assets/icons/DiscordIcon.svg?inline'
import TwitterIcon from 'assets/icons/TwitterIcon.svg?inline'
import ClimateIcon from 'assets/icons/StripeClimateIcon.svg?inline'

import VueCompositionAPI, {
  defineComponent
} from '@vue/composition-api/dist/vue-composition-api'
import { h } from '@vue/composition-api'
import Vue from 'vue'
import Button from '@/components/shared/Button'

Vue.use(VueCompositionAPI)

export default {
  name: 'Footer',
  components: {
    Button,
    ShigotoLogo,
    GithubIcon,
    DiscordIcon,
    LinkedinIcon,
    TwitterIcon,
    ClimateIcon
  },
  data () {
    return {
      navigation: {
        solutions: [
          { name: 'Deployments', href: '#' },
          { name: 'Cron management', href: '#' },
          { name: 'Monitoring', href: '#' }
        ],
        support: [
          { name: 'Pricing', href: '#' },
          { name: 'Documentation', href: '#' },
          { name: 'Guides', href: '#' },
          { name: 'API Status', href: '#' }
        ],
        company: [
          { name: 'About', href: '#' },
          { name: 'The team', href: '/team' },
          { name: 'Blog', href: '#' },
          { name: 'Jobs', href: '#' }
        ],
        legal: [
          { name: 'Privacy', href: '/privacy' },
          { name: 'Terms', href: '/terms' }
        ],
        social: [
          {
            name: 'Github',
            href: 'https://github.com/Shigoto-Q',
            icon: GithubIcon
          },
          {
            name: 'Discord',
            href: 'https://discord.gg/4UwG7WwDgT',
            icon: DiscordIcon
          },
          {
            name: 'LinkedIn',
            href: '#',
            icon: LinkedinIcon
          },
          {
            name: 'Twitter',
            href: 'https://twitter.com/ShigotoLLC',
            icon: TwitterIcon
          },
          {
            name: 'Climate',
            href: 'https://climate.stripe.com/GcbOW2',
            icon: ClimateIcon
          }
        ]
      }
    }
  }
}
</script>
