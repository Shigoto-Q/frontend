<template>
  <div class="form-wrapper flex flex-col mt-6 mb-6">
    <VueFormGenerator
      :id="vueForm"
      :key="formKey"
      :class="classObject"
      :model="model"
      :schema="schema"
      @model-updated="localModelUpdated"
    />
    <Button
      v-show="showSubmitButton"
      v-on="$listeners"
      @click="handleLocalOnClick"
    >
      Submit
    </Button>
  </div>
</template>

<script>
import Button from '~/components/shared/Button'

export default {
  name: 'Form',
  components: {
    Button
  },
  props: {
    vueForm: {
      type: String,
      default: () => 'vue-form'
    },
    model: {
      type: Object,
      required: true
    },
    schema: {
      type: Object,
      required: true
    },
    handleOnClick: {
      type: Function,
      required: false
    },
    showSubmitButton: {
      type: Boolean,
      default: () => false
    },
    classObject: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      formKey: 0
    }
  },
  methods: {
    handleLocalOnClick () {
      if (this.handleOnClick) {
        this.handleOnClick()
      } else { console.log('Clicked!') }
    },
    localModelUpdated () {
      this.$emit('modelUpdated', this.model)
    }
  }
}
</script>

<style lang="scss">
.form-wrapper {
  width: 100%;
}

input:focus {
  outline: none !important;
  border-bottom-width: 2px;
  border-bottom-color: #7353ba;
}
input:focus + label {
  outline: none !important;
  color: #7353ba;
}

.vue-form-generator {
  display: flex;
  justify-content: center;
}

.form-group {
  width: 100%;
  flex: 40%;
}

fieldset {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-100 {
  flex: 100%;
}

@media (max-width: 800px) {
  button {
    width: 300px;
  }
  .form-group {
    width: 300px;
  }
  .form__button {
    width: 300px;
  }
  .form__link {
    padding-left: 10rem !important;
    font-size: 1rem !important;
  }
}
</style>
