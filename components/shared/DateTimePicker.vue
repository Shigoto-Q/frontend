<template>
  <section>
    <div class="form-group">
      <label>{{ label }}</label>
      <div class="input-group">
        <flat-pickr
          class="form-control"
          v-model="inputModel"
          :config="config"
          :placeholder="placeholder"
          name="date"
          @change="onChange"
        />
      </div>
    </div>
  </section>
</template>
<script>
import flatPickr from 'vue-flatpickr-component';


export default {
  name: 'DateTimePicker',
  components: {
    flatPickr
  },
  props: {
    model: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: 'Select a date'
    },
    placeholder: {
      type: String,
      default: '29/04/2022'
    }
  },
  data() {
    return {
      date: null,
      localModel: "",
      config: {
        altFormat: "F j, Y",
        altInput: true,
        enableTime: true,
        dateFormat: "Y-m-d H:i",
      }
    }
  },
  computed: {
    inputModel: {
      get() {
        return this.localModel;
      },
      set(value) {
        return (this.localModel = value);
      },
    },
  },
  watch: {
    model() {
      this.localModel = this.model;
    },
  },
  methods: {
    onChange(selectedDates, dateStr, instance) {
      this.$emit("change", selectedDates, dateStr);
    },
  },
}
</script>
