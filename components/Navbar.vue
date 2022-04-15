<template>
  <header
    class="w-full mx-auto bg-white border-b border-antiflash fixed z-50 drop-shadow-md"
  >
    <div
      class="flex flex-col w-full px-4 mx-auto max-w-full bg-bunker md:items-center md:justify-between md:flex-row md:px-6 lg:px-20"
    >
      <div class="flex flex-row items-center justify-between py-2 lg:py-0">
        <NuxtLink
          to="/"
          class="text-lg font-semibold rounded-lg text-club focus:outline-none focus:shadow-outline"
        >
          <div class="inline-flex items-center">
            <ShigotoLogo />
            shigoto
          </div>
        </NuxtLink>
        <button
          class="navbar__button md:hidden focus:outline-none"
          @click="onClick"
          aria-label="hidden"
        >
          <svg fill="#7353ba" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
              style="display: none"
            ></path>
          </svg>
        </button>
      </div>
      <nav :class="classObject">
        <NavLink to="/" text="Home" class="lg:ml-auto" />
        <NavLink to="/features" text="Features" />
        <NavLink to="/pricing" text="Pricing" class="lg:mr-auto" />
        <div v-if="!$auth.loggedIn">
          <LinkButton to="/onboarding/login" text="Log in" :secondary="true" />
        </div>
        <div v-else class="">
          <LinkButton
            to="/dashboard/tasks/manage"
            text="Dashboard"
            :secondary="true"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import LinkButton from "./shared/LinkButton";
import NavLink from "./shared/NavLink";
import ShigotoLogo from "assets/logo.svg?inline";
import Button from "~/components/shared/Button";

export default {
  name: "Navbar",
  components: { Button, NavLink, LinkButton, ShigotoLogo },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    classObject() {
      return {
        flex: this.open,
        "flex-col": true,
        "items-center": true,
        "flex-grow": true,
        hidden: !this.open,
        "px-5": true,
        "md:pb-0": true,
        "md:flex": true,
        "md:justify-end": true,
        "md:flex-row": true,
        "mb-6": this.open,
      };
    },
  },
  methods: {
    onClick() {
      this.open = !this.open;
    },
    async logOut() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped lang="scss">
.navbar__button {
  width: auto;
}
</style>
