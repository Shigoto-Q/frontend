<template>
  <div>
    <Button @click="showAlert" text="Alert me"/>
    <Notification />
  </div>
</template>
<script>
import CheckMarkIcon from '~/assets/icons/CheckMark.svg?inline';
import Alert from '@/components/shared/Alert';
import Notification from '@/components/shared/Notification/Notification';
import Button from '@/components/shared/Button';
import { notificationTypes } from '@/constants/notifications';

export default {
  components: {
    CheckMarkIcon,
    Alert,
    Button,
    Notification,
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
  },
  methods: {
   showAlert() {
     this.$notify({
       title: 'Successful action event',
       duration: 3000,
       body: 'This is a test notification event.',
       type: notificationTypes.SUCCESS
     })
   }
  },
}
</script>
