<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <dl class="flex flex-row mt-5">
      <div v-for="item in stats" :key="item.id" class="relative ml-2 bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden w-64">
        <dt>
          <div class="absolute rounded-md p-3">
            <component :is="item.icon" class="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">{{ item.name }}</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            {{ item.stat }}
          </p>
          <div class="heart-rate">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="32px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
    <polyline fill="none" stroke="green" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
    />
  </svg>
            <div class="fade-in"></div>
            <div class="fade-out"></div>
          </div>
          <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                View all<span class="sr-only"> {{ item.name }} stats</span></a
              >
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import SuccessIcon from '~/assets/icons/Success.svg?inline'
import FailedIcon from 'assets/icons/Failed.svg?inline'
import PendingIcon from 'assets/icons/Pending.svg?inline'
import ArrowUp from 'assets/icons/ArrowUp.svg?inline'
import ArrowDown from 'assets/icons/ArrowDown.svg?inline'
import StartIcon from 'assets/icons/Start.svg?inline'
import ReceiveIcon from 'assets/icons/Receive.svg?inline'
import RejectIcon from "assets/icons/Reject.svg?inline";


export default {
  name: 'Card',
  components: {
    ArrowUp,
    ArrowDown
  },
  props: {
   successCount: {
     type: Number,
     default: 0,
   },
    receivedCount: {
      type: Number,
      default: 0,
    },
    startedCount: {
      type: Number,
      default: 0,
    },
    rejectedCount: {
      type: Number,
      default: 0,
    },
    ignoredCount: {
      type: Number,
      default: 0,
    },
    failCount: {
      type: Number,
      default: 0,
    },
    pendingCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    stats() {
      return [
        { id: 1, name: 'Started', stat: this.startedCount, icon: StartIcon },
        { id: 2, name: 'Success', stat: this.successCount, icon: SuccessIcon },
        { id: 3, name: 'Received', stat: this.receivedCount, icon: ReceiveIcon },
        { id: 4, name: 'Pending', stat: this.pendingCount, icon: PendingIcon },
        { id: 5, name: 'Rejected', stat: this.rejectedCount, icon: RejectIcon },
        { id: 6, name: 'Failed', stat: this.failCount, icon: FailedIcon },
      ]
    }
  },
  watch: {
    successCount: function(newVal, oldVal) {
      return newVal
    },
    startedCount: function(newVal, oldVal) {
      return newVal
    },
    receivedCount: function(newVal, oldVal) {
      return newVal
    },
    pendingCount: function(newVal, oldVal) {
      return newVal
    },
    rejectedCount: function(newVal, oldVal) {
      return newVal
    },
    failCount: function(newVal, oldVal) {
      return newVal
    },
    ignoredCount: function(newVal, oldVal) {
      return newVal
    },
  }
}
</script>
<style scoped>
.heart-rate {
  margin-left: 2rem;
  position: relative;
  overflow:hidden;
}

.fade-in {
  position: absolute;
  width: 100%;
  height:100%;
  background-color: white;
  top: 0;
  right: 0;
  animation: heartRateIn 4.5s linear infinite;
}

.fade-out {
  position: absolute;
  width: 120%;
  height: 100%;
  top: 0;
  left: -120%;
  animation: heartRateOut 4.5s linear infinite;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);
}

@keyframes heartRateIn {
  0% {
    width: 100%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 0;
  }
}

@keyframes heartRateOut {
  0% {
    left: -120%;
  }
  30% {
    left: -120%;
  }
  100% {
    left: 0;
  }
}
</style>
