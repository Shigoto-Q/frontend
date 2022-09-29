<template>
  <div class="floating-form">
    <div class="floating-label">
      <input
        :id="name"
        v-model="inputModel"
        class="floating-input"
        :name="name"
        :type="type"
        :disabled="disabled"
        placeholder=" "
        @input="onInput"
        @change="onChange"
      >
      <div
        v-show="type === 'password'"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <VisibilityIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <label :for="name">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
import VisibilityIcon from '@/assets/icons/VisibilityIcon.svg?inline'
const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
  input.addEventListener('blur', (event) => {
    if (event.target.value) {
      input.classList.add('is-valid')
    } else {
      input.classList.remove('is-valid')
    }
  })
})
export default {
  name: 'Input',
  components: {
    VisibilityIcon
  },
  props: {
    model: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    inline: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      localModel: ''
    }
  },
  computed: {
    inputModel: {
      get () {
        return this.localModel
      },
      set (value) {
        return (this.localModel = value)
      }
    }
  },
  watch: {
    model () {
      this.localModel = this.model
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>
.floating-label {
  position: relative;
  margin-bottom: 20px;
}
.floating-input,
.floating-select {
  font-size: 14px;
  display: block;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #a0a0a0;
}

.floating-input:focus,
.floating-select:focus {
  outline: none;
  border-bottom: 2px solid #7353ba;
}

label {
  color: #999;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-input:focus ~ label,
.floating-input:not(:placeholder-shown) ~ label {
  top: -18px;
  font-size: 14px;
  color: #7353ba;
}

.floating-select:focus ~ label,
.floating-select:not([value=""]):valid ~ label {
  top: -18px;
  font-size: 14px;
  color: #7353ba;
}

/* active state */
.floating-input:focus ~ .bar:before,
.floating-input:focus ~ .bar:after,
.floating-select:focus ~ .bar:before,
.floating-select:focus ~ .bar:after {
  width: 100%;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.floating-input:focus ~ .highlight,
.floating-select:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* animation */
@-webkit-keyframes inputHighlighter {
  from {
    background: #7353ba;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #7353ba;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #7353ba;
  }
  to {
    width: 0;
    background: transparent;
  }
}

@media (max-width: 800px) {
  input,
  label {
    max-width: 400px;
  }
}
</style>
