<template>
  <div>
    <div class="mt-20 lg:flex justify-center">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <h1
          class="mt-6 text-xl font-sans font-semibold text-center text-vulcan"
        >
          Two-factor authentication
        </h1>
        <div
          class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl"
        >
          <span
            class="-ml-16 mb-4 text-sans text-lg font-normal leading-5 text-subtitle lg:text-sm"
          >
            If you have 2FA enabled, enter the 6-digit code from your app:
          </span>
          <div class="flex justify-center flex-col">
            <form @submit.prevent="verifyOtp" class="flex justify-center">
              <SingleInput
                v-for="(item, i) in numInputs"
                :key="i"
                :focus="activeInput === i"
                :value="otp[i]"
                :input-type="inputType"
                :input-classes="inputClasses"
                :is-last-child="i === numInputs - 1"
                :should-auto-focus="shouldAutoFocus"
                pattern="[0-9]"
                @on-change="handleOnChange"
                @on-keydown="handleOnKeyDown"
                @on-paste="handleOnPaste"
                @on-focus="handleOnFocus(i)"
                @on-blur="handleOnBlur"
              />
            </form>
          </div>
          <div class="flex justify-center mt-12 mb-12">
            <Button color="emerald">Continue</Button>
          </div>
          <div
            class="mt-12 mb-10 text-sm font-display font-semibold text-gray-700 text-center"
          >
            <div
              @click="cancel2faAndGoBack"
              class="font-sans font-semibold text-green-600 hover:text-indigo-800 cursor-pointer"
            >
              <p>
                <span
                  class="font-sans font-semibold text-link hover:text-indigo-800 cursor-pointer"
                  >Cancel 2FA and go back</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleInput from "@/components/SingleInput";
import Button from "@/components/shared/Button";

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;

export default {
  name: "OTPInput",
  components: {
    SingleInput,
    Button,
  },
  props: {
    numInputs: {
      default: 6,
    },
    separator: {
      type: String,
      default: "",
    },
    inputClasses: {
      type: String,
    },
    inputType: {
      type: String,
      default: "password",
    },
    shouldAutoFocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeInput: 0,
      otp: [],
      oldOtp: [],
    };
  },
  methods: {
    async verifyOtp() {
      const otp = Number(this.otp.join(""));
    },
    async cancel2faAndGoBack() {},
    handleOnFocus(index) {
      this.activeInput = index;
    },
    handleOnBlur() {
      this.activeInput = -1;
    },
    checkFilledAllInputs() {
      if (this.otp.join("").length === this.numInputs) {
        return this.$emit("on-complete", this.otp.join(""));
      }
      return "Wait until the user enters the required number of characters";
    },
    focusInput(input) {
      this.activeInput = Math.max(Math.min(this.numInputs - 1, input), 0);
    },
    focusNextInput() {
      this.focusInput(this.activeInput + 1);
    },
    focusPrevInput() {
      this.focusInput(this.activeInput - 1);
    },
    changeCodeAtFocus(value) {
      this.oldOtp = Object.assign([], this.otp);
      this.$set(this.otp, this.activeInput, value);
      if (this.oldOtp.join("") !== this.otp.join("")) {
        this.$emit("on-change", this.otp.join(""));
        this.checkFilledAllInputs();
      }
    },
    handleOnPaste(event) {
      event.preventDefault();
      const pastedData = event.clipboardData
        .getData("text/plain")
        .slice(0, this.numInputs - this.activeInput)
        .split("");
      if (this.inputType === "number" && !pastedData.join("").match(/^\d+$/)) {
        return "Invalid pasted data";
      }
      const currentCharsInOtp = this.otp.slice(0, this.activeInput);
      const combinedWithPastedData = currentCharsInOtp.concat(pastedData);
      this.$set(this, "otp", combinedWithPastedData.slice(0, this.numInputs));
      this.focusInput(combinedWithPastedData.slice(0, this.numInputs).length);
      return this.checkFilledAllInputs();
    },
    handleOnChange(value) {
      this.changeCodeAtFocus(value);
      this.focusNextInput();
    },
    clearInput() {
      if (this.otp.length > 0) {
        this.$emit("on-change", "");
      }
      this.otp = [];
      this.activeInput = 0;
    },
    handleOnKeyDown(event) {
      switch (event.keyCode) {
        case BACKSPACE:
          event.preventDefault();
          this.changeCodeAtFocus("");
          this.focusPrevInput();
          break;
        case DELETE:
          event.preventDefault();
          this.changeCodeAtFocus("");
          break;
        case LEFT_ARROW:
          event.preventDefault();
          this.focusPrevInput();
          break;
        case RIGHT_ARROW:
          event.preventDefault();
          this.focusNextInput();
          break;
        default:
          break;
      }
    },
  },
};
</script>
