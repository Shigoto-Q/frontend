<template>
<div class="relative px-3 py-2 border-2 rounded-lg border-antiflash focus-within:ring-1 focus-within:ring-oyster focus-within:border-oyster bg-white">
  <label class="absolute inline-block px-1 -mt-px text-xs font-medium bg-white text-stone -top-2 left-2">{{ label }}</label>
    <multiselect
    class="block w-full py-1 bg-white border-0 text-vulcan placeholder-cat focus:ring-0 sm:text-sm rounded"
      v-model="inputModel"
      deselect-label="Can't remove this value"
      track-by="name"
      open-direction="bottom"
      :label="name"
      :placeholder="placeholder"
      :options="options"
      :searchable="false"
      :allow-empty="false"
      @select="onChange"
    >
    <template slot="singleLabel" slot-scope="props">
        <span class="option__desc">
          <span class="option__title text-vulcan">
            {{ props.option.name }}
          </span>
        </span>
      </template>
    <template slot="option" slot-scope="props">
      <div class="option__desc"><span class="option__title">{{ props.option.name }}</span>
    </div>
    </template>
    </multiselect>
</div>
</template>
<script>

export default {
  name: "Select",
  props: {
    model: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
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
      default: () => '',
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      value: this.model,
  }},
  computed: {
    inputModel: {
      get() {
        return this.value;
    },
      set(newValue) {
        this.value = newValue;
      }
  },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onChange(e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
.multiselect__tags {
  border: none;
}
</style>
