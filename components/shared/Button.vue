<template>
  <button
    type="submit"
    :class="`btn button__${secondary ? secondaryClass : primaryClass}`"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
/* <button class="button-36" role="button">Button 36</button> */
// inline-flex items-center px-3 py-2 text-sm text-sm leading-4 font-medium text-center self-center flex justify-center
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: () => "Submit",
    },
    secondary: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      primaryClass: "primary",
      secondaryClass: "secondary",
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 500;
  height: auto;
  min-height: 3rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  line-height: normal;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}
.button {
  &__primary {
    background-image: linear-gradient(
      92.88deg,
      #455eb5 9.16%,
      #5643cc 43.89%,
      #673fd7 64.72%
    );
  }

  &__primary:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
  &__secondary {
    appearance: none;
    background-color: transparent;
    border: 2px solid #1a1a1a;
    color: #3b3b3b;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &__secondary:disabled {
    pointer-events: none;
  }

  &__secondary:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &__secondary:active {
    box-shadow: none;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .btn {
    padding: 0 2.6rem;
  }
}
</style>
