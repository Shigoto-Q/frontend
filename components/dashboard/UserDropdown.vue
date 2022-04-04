<template>
  <div
    class="flex flex-row px-4 py-1 mb-2 border-2 rounded-lg self-center justify-center align-center bg-white"
  >
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="flex relative z-10 block rounded-md bg-white p-2 focus:outline-none"
    >
      <AvatarIcon class="w-10 h-10" />
      <span
        class="text-base font-semibold leading-none text-comet lg:text-base text-center self-center"
        >{{ user.firstName }} {{ user.lastName }}</span
      >
      <ChevronDownIcon class="w-4 h-4 self-center ml-4" />
    </button>
    <div
      v-show="dropdownOpen"
      @click="dropdownOpen = false"
      class="fixed inset-0 h-full w-full z-10"
    ></div>
    <div
      v-show="dropdownOpen"
      class="absolute mt-12 py-2 w-48 bg-white rounded-md shadow-xl z-20 border-2"
    >
      <div
        class="block px-4 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
      >
        Settings
      </div>
      <hr class="my-2" />
      <a
        @click="logout"
        href="#"
        class="block px-4 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
      >
        Log out
      </a>
    </div>
  </div>
</template>

<script>
import AvatarIcon from "../../assets/icons/Avatar.svg?inline";
import ChevronLeftIcon from "../../assets/icons/ChevronLeft.svg?inline";
import ChevronDownIcon from "../../assets/icons/ChevronDown.svg?inline";

export default {
  name: "UserDropdown",
  components: {
    AvatarIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
  },
  data() {
    return {
      dropdownOpen: false,
      user: this.$auth.state.user,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
