<template>
  <div class="flex flex-col">
    <Button @click="showAlert" text="Alert me"/>
    <Terminal />
    <InputWithIcon label="Some text"/>
    <Notification />
  </div>
</template>
<script>
import CheckMarkIcon from '~/assets/icons/CheckMark.svg?inline';
import {taskWsActions, taskTypes} from "~/constants/ws";
import Alert from '@/components/shared/Alert';
import Notification from '@/components/shared/Notification/Notification';
import Button from '@/components/shared/Button';
import InputWithIcon from '@/components/shared/InputWithIcon';
import Terminal from '@/components/shared/Terminal';
import { notificationTypes } from '@/constants/notifications';
import { M_TERMINAL_OUTPUT } from '@/store/terminal/mutation-types';

export default {
  components: {
    CheckMarkIcon,
    Alert,
    Button,
    Notification,
    Terminal,
    InputWithIcon,
  },
  data() {
    return {
      show: false,
      connection: null,
      createImageData: {
        action: taskWsActions.createImage,
        token: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`,
        topic: taskWsActions.createImage,
        data: {
          Repository: 'https://github.com/Shigoto-Q/docker_deploy_test',
          Name: 'docker_deploy_test',
          ImageName: 'docker-deploy-test-from-docker4',
          Command: "python app.py"
        },
      },
      terminalOutput: [],
    }
  },
  mounted() {
  },
  beforeRouteLeave(to, from, next) {
    this.connection.close()
    this.terminalOutput = [];
    next()
  },
  methods: {
   showAlert() {
    this.connection = new WebSocket('ws://localhost:8080/ws')
    this.connection.onopen = () => {
      this.sendMessage(this.createImageData)
    }
    this.connection.onmessage = (message) => {
      let data = JSON.parse(message.data)
      this.terminalOutput.push(data);
      this.$store.commit(M_TERMINAL_OUTPUT, data)
    }
    this.$notify({
       title: 'Successful action event',
       duration: 3000,
       body: 'This is a test notification event.',
       type: notificationTypes.SUCCESS
     })
   },
    sendMessage(message) {
      this.connection.send(JSON.stringify(message))
    },
  },
}
</script>
