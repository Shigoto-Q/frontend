<template>
  <div>
    <section class="w-full">
      <div class="flex justify-center items-center">
        <h1>Yeet</h1>
      </div>
    </section>
    <Nuxt />
  </div>
</template>

<script>
import {taskWsActions, taskTypes} from "~/constants/ws";

export default {
  name: "tasks",
  layout (context) {
    return 'dashboard'
  },
  data() {
    return {
      connection: null,
      resultSubscribe: {
        action: taskWsActions.SUBSCRIBE,
        token: this.$auth.strategy.token.get().split(' ')[1],
        topic: taskTypes.taskCount,
      }
    }
  },
  created() {
    this.connection = new WebSocket('ws://localhost:8080/ws')
    this.connection.onopen = () => {
      this.sendMessage(this.resultSubscribe)
    }
  },
  beforeRouteLeave(to, from, next) {
    this.connection.close()
    next()
  },
  methods: {
    sendMessage(message) {
      this.connection.send(JSON.stringify(message))
    }
  }
}
</script>

<style scoped>

</style>
