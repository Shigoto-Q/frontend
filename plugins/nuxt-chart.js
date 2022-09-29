import Vue from "vue";
import { Line } from "vue-chartjs";

Vue.component("LineChart", {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
