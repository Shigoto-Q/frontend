<template>
  <div>
  <form class="flex flex-col items-center justify-center">
      <VueFormGenerator :id="vueForm" :model="model" :schema="schema" @model-updated="localModelUpdated" :key="formKey" />
      <Button v-show="showSubmitButton" v-on="$listeners" />
  </form>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";


export default {
  name: "Form",
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
      required: true,
    },
    handleOnClick: {
      type: Function,
      required: true,
    },
    showSubmitButton: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      formKey: 0,
    }
  },
  methods: {
    localModelUpdated() {
      this.$emit('modelUpdated', this.model)
    }
  }
}
</script>

<style scoped>

</style>
