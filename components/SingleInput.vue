<template>
  <div class="flex items-center flex-col">
    <input
      ref="input"
      v-model="model"
      class="mx-5 block w-16 border-0 border-b-2 border-gray-600 focus:ring-0 focus:border-green text-lg border-b focus:outline-none font-sans text-center"
      :type="inputType"
      min="0"
      max="9"
      maxlength="1"
      :pattern="pattern"
      :class="inputClasses"
      :value="value"
      @input="handleOnChange"
      @keydown="handleOnKeyDown"
      @paste="handleOnPaste"
      @focus="handleOnFocus"
      @blur="handleOnBlur"
    >
    <label class="input__label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'SingleInput',
  props: {
    value: {
      type: String
    },
    separator: {
      type: String
    },
    pattern: {
      type: String,
      required: true
    },
    focus: {
      type: Boolean
    },
    inputClasses: {
      type: String
    },
    shouldAutoFocus: {
      type: Boolean
    },
    inputType: {
      type: String,
      default () {
        return 'tel'
      }
    },
    label: {
      type: String
    },
    isLastChild: {
      type: Boolean
    }
  },
  data () {
    return {
      model: this.value || ''
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.model = newValue
      }
    },
    // whenever question changes, this function will run
    focus (newFocusValue, oldFocusValue) {
      // Check if focusedInput changed
      // Prevent calling function if input already in focus
      if (oldFocusValue !== newFocusValue && this.$refs.input && this.focus) {
        this.$refs.input.focus()
        this.$refs.input.select()
      }
    }
  },
  mounted () {
    if (this.$refs.input && this.focus && this.shouldAutoFocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    handleOnChange () {
      if (this.model.length > 1) {
        this.model = this.model.slice(0, 1)
      }
      return this.$emit('on-change', this.model)
    },
    handleOnKeyDown (event) {
      // Only allow characters 0-9, DEL, Backspace and Pasting
      const keyEvent = event || window.event
      const charCode = keyEvent.which ? keyEvent.which : keyEvent.keyCode
      if (
        this.isCodeNumeric(charCode) ||
        charCode === 8 ||
        charCode === 86 ||
        charCode === 46
      ) {
        this.$emit('on-keydown', event)
      } else {
        keyEvent.preventDefault()
      }
    },
    isCodeNumeric (charCode) {
      // numeric keys and numpad keys
      return (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 96 && charCode <= 105)
      )
    },
    handleOnPaste (event) {
      return this.$emit('on-paste', event)
    },
    handleOnFocus () {
      this.$refs.input.select()
      return this.$emit('on-focus')
    },
    handleOnBlur () {
      return this.$emit('on-blur')
    }
  }
}
</script>
<style scoped lang="scss">
.input__label {
  margin-top: 0.5rem;
}
</style>
