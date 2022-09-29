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
            <ShigotoLogo class="w-18 h-14" />
          </div>
        </NuxtLink>
        <button
          class="burger burger1 navbar__button md:hidden focus:outline-none"
          :class="burgerClassObject"
          aria-label="hidden"
          @click="onClick"
        >
          <svg fill="#7353ba" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              v-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
              style="display: none"
            />
          </svg>
        </button>
      </div>
      <nav :class="classObject">
        <NavLink to="/" text="Home" class="lg:ml-auto" />
        <NavLink to="/features" text="Features" />
        <NavLink to="/pricing" text="Pricing" />
        <NavLink to="/about" text="About us" class="lg:mr-auto" />
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
import ShigotoLogo from "assets/branding/logo/LogoWithText.svg?inline";
import LinkButton from "./shared/LinkButton";
import NavLink from "./shared/NavLink";
import Button from "~/components/shared/Button";

export default {
  name: "Navbar",
  components: { Button, NavLink, LinkButton, ShigotoLogo },
  beforeRouteLeave() {
    this.open = !this.open;
  },
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
    burgerClassObject() {
      return {
        unToggled: !this.open,
        toggled: this.open,
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

:root {
  --font-size: 1; // Scale is using font-size in rems;
  --color1: #f0ffff;
  --borderRadius: 1em;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
h1 {
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 2rem;
  text-align: center;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: #24273b;
  height: 100%;
  color: #9c9cab;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4rem;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

section {
  width: 15rem;
  height: 15rem;
  background: #151728;
  border-radius: 4px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px #00000026, 0 3px 6px #0000001f;
}

.sliderBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  input {
    width: 200px;
  }
  .range-value {
    font-weight: 100;
    font-size: 22px;
    color: #fff;
  }
}

input[type="range"] {
  width: 100%;
  margin: 2em 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #ffffff66;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: -12px;
  width: 25px;
  height: 25px;
  background: #151728;
  box-shadow: inset 0px 1px 1px #ffffff66, 0px 1px 3px rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
input[type="range"]::-moz-range-track {
  background: #ffffff;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 13px 0;
  color: transparent;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-fill-upper {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type="range"]:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #ffffff;
}

.customCheckbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  label {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
    top: 0;
    left: 0;
    margin: 1em;
    background: #151728;
    border-radius: 1em;
    box-shadow: inset 0px 1px 1px #ffffff66, 0px 1px 3px rgba(0, 0, 0, 1);
    &:after {
      content: "";
      width: 18px;
      height: 18px;
      display: block;
      background: olive;
      border-radius: 1em;
      position: absolute;
      font-size: 1.5em;
      font-weight: 900;
      top: 7px;
      left: 6px;
      opacity: 0;
    }
    &:hover::after {
    }
  }
  input[type="checkbox"] {
    visibility: hidden;
    position: absolute;
    &:checked + label:after {
      opacity: 1;
    }
  }
}

.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  > * {
    background: #15172855;
    // box-shadow: 0px 0px 20px #00000055;
    border: 1px solid #ffffff11;
    padding: 0 3rem;
    width: 15rem;
    height: 7rem;
  }
}
</style>
