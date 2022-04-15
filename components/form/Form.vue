<template>
  <div class="flex flex-col mt-6 mb-6">
      <VueFormGenerator
        :class="classObject"
        :id="vueForm"
        :model="model"
        :schema="schema"
        @model-updated="localModelUpdated"
        :key="formKey"
      />
      <Button class="form__button" v-show="showSubmitButton" v-on="$listeners" :classes="classObject + ' w-6/12'" @click="handleOnClick"/>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";

export default {
  name: "Form",
  components: {
    Button,
  },
  props: {
    vueForm: {
      type: String,
      default: () => "vue-form",
    },
    model: {
      type: Object,
      required: true,
    },
    schema: {
      type: Object,
      required: true,
    },
    handleOnClick: {
      type: Function,
      required: false,
    },
    showSubmitButton: {
      type: Boolean,
      default: () => false,
    },
    classObject: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      formKey: 0,
    };
  },
  methods: {
    localModelUpdated() {
      this.$emit("modelUpdated", this.model);
    },
  },
};
</script>

<style lang="scss">
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
  width: 400px;
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
