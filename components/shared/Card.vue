<template>
  <div class="chart__area">
    <div>
      <line-chart
        :style="chartStyles"
        :chart-data="chartData.chartData"
        :gradient-colors="chartData.gradientColors"
        :gradient-stops="chartData.gradientStops"
        :extra-options="chartData.extraOptions"
      >
      </line-chart>
    </div>
  </div>
</template>

<script>
import ArrowUp from "assets/icons/ArrowUp.svg?inline";
import ArrowDown from "assets/icons/ArrowDown.svg?inline";
import LineChart from "@/components/charts/LineChart";
import * as chartConfigs from '@/components/charts/config';
import config from '@/config';
import {taskTypes, taskWsActions} from "@/constants/ws";

export default {
  name: "Card",
  components: {
    ArrowUp,
    ArrowDown,
    LineChart,
  },
  props: {
    countData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      stats: {},
      labels: ['14:00', "14:01", "14:02", "14:03", "14:04", "14:05", "14:06"],
      successData: [20, 45, 65, 87, 121, 152, 252],
      failureData: [10, 32, 105, 93, 25, 10, 50],
      pendingData: new this.Cache(10),
      receivedData: new this.Cache(10),
      startedData: new this.Cache(10),
      ignoredData: new this.Cache(10),
      rejectedData: new this.Cache(10),
      purpleLineChart: null,
      connection: null,
      resultSubscribe: {
        action: taskWsActions.SUBSCRIBE,
        token: this.$auth.strategy.token.get().split(" ")[1],
        topic: taskTypes.taskCount,
      },
    };
  },
  created() {
    this.connection = new WebSocket("ws://localhost:8080/ws");
    this.connection.onopen = () => {
      this.sendMessage(this.resultSubscribe);
    };
    this.connection.onmessage = (message) => {
      this.stats = JSON.parse(message.data);
      const timestamp = new Date(this.stats[0].timestamp)
      const st = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`
      this.labels.store(st)
      for(const n of this.stats) {
          if (n.status === 'success')
            this.successData.store(n.count)
          else if (n.status === 'failure')
            this.failureData.store(n.count)
          else if (n.status === 'pending')
            this.pendingData.store(n.count)
           else if (n.status === 'started')
            this.startedData.store(n.count)
          else if (n.status === 'ignored')
            this.ignoredData.store(n.count)
          else if (n.status === 'rejected')
            this.rejectedData.store(n.count)
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    this.connection.close();
    next();
  },
  computed: {
    chartStyles () {
      return {
        height: '250px',
        width: '100%'
      }
    },
    chartData() {
      return {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: this.labels,
          datasets: [
            {
              label: 'Successful',
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.successData,
            },
            {
              label: 'Failed',
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.failureData,
            },
            {
              label: 'Pending',
              fill: true,
              borderColor: config.colors.orange,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.orange,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.pendingData.values,
            },
            {
              label: 'Started',
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.info,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.startedData.values,
            },
            {
              label: 'Received',
              fill: true,
              borderColor: config.colors.teal,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.teal,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.receivedData.values,
            },
            {
              label: 'Rejected',
              fill: true,
              borderColor: config.colors.magenta,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.magenta,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.rejectedData.values,
            },
            {
              label: 'Ignored',
              fill: true,
              borderColor: config.colors.marvel,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.marvel,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.purpleGradient,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.ignoredData.values,
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      }
    }
  },
  mounted() {
    console.log(this.countData)
  },
  watch: {
    countData: function (newVal, oldVal) {
      return newVal;
    },
  },
  methods: {
    Cache(maxLength) {
      this.values = [];

      this.store = function(data) {
        if(this.values.length >= maxLength) {
          this.getLast();
        }
        return this.values.push(data);
      }

      this.getLast = function() {
        return this.values.splice(0,1)[0];
      }
    },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },
  }
};
</script>
<style scoped lang="scss">
.chart {
  &__area {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2.5rem;
    gap: 2px;
    grid-auto-rows: minmax(100px, auto);
  }
  &__title {
    margin-bottom: 1rem;
  }
}
</style>
